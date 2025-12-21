var mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/scooby2025")
var User = require("./models/user.js").User


var first_user = new User({
   username: "Mejit",
   password: "51595258"
})


first_user.save();
