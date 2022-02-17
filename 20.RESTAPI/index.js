const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");

dotenv.config();
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("Connected to MongoDB"))
  .catch((error) => console.log(error));

app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);

app.listen(8000, () => {
  console.log("Server ist running");
});
