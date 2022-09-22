const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const user = require("./routes/user");

const app = express();

app.use(
  cors({
    origin: ["http://localhost:3000"],
    optionsSuccessStatus: 200,
  })
);

app.use(bodyParser.json());

require("./models/User");

mongoose
  .connect("mongodb://localhost/novelty", {
    useNewUrlParser: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use("/api/v1/user", user);

const PORT = 2000;
app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
