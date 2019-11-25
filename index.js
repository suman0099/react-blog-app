//Entry Point for Backend App
const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose
    .connect(
        "mongodb+srv://suman0013:suman0013@react-blog-88tkt.mongodb.net/test?retryWrites=true&w=majority",
        { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error(err));

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(5000, () => {
    console.log(`Server started on 5000`);
});
