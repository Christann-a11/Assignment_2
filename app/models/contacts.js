const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContactSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    email: {
      type: String,
      match: [/.+\@.+\..+/, "Please fill a valid e-mail address"]
    }
  },
  { collection: "contacts" }
);

module.exports = mongoose.model("Contacts", ContactSchema);
