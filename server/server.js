const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Bodyparser Middleware
app.use(express.json());

//change to .env file
const db =
  "mongodb+srv://admin:admin@matchup-my7yz.mongodb.net/test?retryWrites=true&w=majority";

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
