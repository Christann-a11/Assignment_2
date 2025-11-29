const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContactSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    phone: String,
    email: {
      type: String,
      match: [/.+\@.+\..+/, "Please fill a valid e-mail address"]
    },
    message: String   // <-- added
  },
  { collection: "contacts" }
);

module.exports = mongoose.model("Contacts", ContactSchema);