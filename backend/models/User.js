const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const config = require("../config/config");
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["moderator", "admin", "bloger"],
      default: "moderator",
    },
    language: {
      type: String,
      enum: ["ru", "en", "es","it","fr","de"],
    },
  },
  {
    timestamps: true,
  }
);
// Encrypt password using bcrypt
userSchema.pre('save' , async function(next) {
    if(!this.isModified('password')) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password , salt);
});
// Sign JWT and return
userSchema.methods.getSignedJWT = function() {
    return JWT.sign({ id: this._id } , config.JWT_SECRET , {
        expiresIn: config.JWT_EXPIRE
    });
}

//  Match user entered password to hashed password in database
userSchema.methods.matchPassword = async function(enteredPassword){
    return await bcrypt.compare( enteredPassword, this.password);
}
module.exports = mongoose.model("User", userSchema);
