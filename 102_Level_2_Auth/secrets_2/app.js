//jshint esversion:6
require("dotenv").config()

const express = require('express')
const app = express()
const PORT = 3000;
const bodyParser = require("body-parser")
const ejs = require("ejs")
const mongoose = require("mongoose")
const encrypt = require("mongoose-encryption")


app.use(express.static("public"));
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))


mongoose.connect("mongodb://localhost:27017/userDB");

const userSchema = new mongoose.Schema( {
    email: String,
    password: String
});

const secret = process.env.SECRET;
userSchema.plugin(encrypt, { secret: secret, encryptedFields: ["password"] });

console.log(process.env.API_KEY)

const User = new mongoose.model("User", userSchema)

app.get("/", function(req, res){
    res.render("home")
})



app.get("/login", function(req, res){
    res.render("login")
})

app.get("/register", function(req, res){
    res.render("register")
})


app.post("/register", function(req, res){
    const newUser = new User({
        email: req.body.username,
        password: req.body.password
    })

    // Mongoose v6+ returns a promise from save() and no longer accepts a callback.
    // Use promise handlers (then/catch) or async/await instead.
    newUser.save()
        .then(() => {
            res.render("secrets");
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send("Registration failed");
        });

});


// Use async/await and proper error handling to avoid uncaught exceptions
app.post("/login", async function(req, res){
    const username = req.body.username;
    const password = req.body.password;

    try {
        const foundUser = await User.findOne({ email: username }).exec();
        if (foundUser && foundUser.password === password) {
            // Match registration behaviour which renders the secrets page
            return res.render("secrets");
        }
        // Authentication failed
        return res.status(401).send("Invalid username or password");
    } catch (err) {
        console.error(err);
        return res.status(500).send("Internal server error");
    }
});



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

