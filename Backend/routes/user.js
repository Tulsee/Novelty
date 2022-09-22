const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const router = express.Router();

const User = require("../models/User");

router.post("/login", (req, res) => {
  let { email, password } = req.body;
  console.log(email);
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
          newUser.save().then((user) => res.json(user));
        });
      });
    }
  });
});

module.exports = router;
