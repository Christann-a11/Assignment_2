const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    email: {
      type: String,
      unique: true,
      match: [/.+\@.+\..+/, "Please fill a valid e-mail address"]
    },
    username: {
      type: String,
      unique: true,
      required: 'Username is required',
      trim: true
    },
<<<<<<< HEAD
    password: {
      type: String,
      required: 'Password is required'
    },
=======
>>>>>>> 9ca08161849e86f9901efd5e4cb5bf18ac0035d1
    role: {
      type: String,
      default: "User"
    },
    created: {
      type: Date,
      default: Date.now,
      immutable: true
    },
    updated: {
      type: Date,
      default: Date.now
    }
  },
  { collection: "users" }
);

module.exports = mongoose.model("Users", UserSchema);
