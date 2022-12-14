const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const router = express.Router();

const User = require("../models/User");

router.post("/login", (req, res) => {
  let { email, password } = req.body;
  User.findOne({ email: email }).then((user) => {
    if (!user) {
      return res
        .status(400)
        .json({ error: "User doe not exist with this email" });
    }

    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        const payload = {
          id: user.id,
          name: user.name,
          email: user.email,
        };
        jwt.sign(
          payload,
          "hello",
          {
            expiresIn: 360000,
          },
          (err, token) => {
            res.json({
              success: true,
              token: token,
            });
          }
        );
      } else {
        return res.status(400).json({ error: "Password is Incorrect" });
      }
    });
  });
});

router.post("/register", (req, res) => {
  let { name, email, password } = req.body;
  User.findOne({
    email: email,
  }).then((user) => {
    if (user) {
      return res.status(400).json({ error: "Email already exist" });
    } else {
      const newUser = new User({
        name: name,
        email: email,
        password: password,
      });
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (error, hash) => {
          newUser.password = hash;
          if (error) throw error;
          newUser.save().then((user) => {
            res.status(200).json(user);
          });
        });
      });
    }
  });
});

router.get("/", (req, res) => {
  const { search = "" } = req.query;
  User.count({ $or: [{ name: { $regex: search } }] }, function (err, count) {
    User.find({
      $or: [{ name: { $regex: search } }],
    })
      .select("-password")
      .then((users) => {
        res.status(200).json({
          users,
          count,
        });
      });
  });
});

router.delete("/:id", (req, res) => {
  let id = req.params.id;
  User.findByIdAndDelete(id).then((data) => {
    return res.status(200).json({ message: "User deleted successfully" });
  });
});

router.patch("/:id", async (req, res) => {
  const id = req.params.id;
  const { name, email } = req.body.params;
  const updates = {};
  const user = await User.findById(id);
  if (name !== undefined) {
    updates.name = name;
  }
  if (email !== undefined) {
    updates.email = email;
  }
  if (!user) {
    throw new Error("No user available");
  }
  const data = await User.findByIdAndUpdate(id, updates, { new: true });
  return res.status(200).json(data);
});

module.exports = router;
