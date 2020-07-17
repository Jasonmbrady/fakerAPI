const express = require("express");
const app = express();
const User = require("./User");
const Company = require("./Company");


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/user/new", (req, res) => {
    res.json(new User());
});

app.get("/api/company/new", (req, res) => {
    res.json(new Company());
});

app.get("/api/user/company", (req, res) => {
    res.json({
        "user": new User(),
        "company": new Company()
    });
});

app.listen(8000, () => {
    console.log("Listening on port 8000")
})