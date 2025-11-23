const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ServiceSchema = new Schema(
  {
    title: String,
    price: Number,
    description: String
  },
  { collection: "services" }
);

module.exports = mongoose.model("Services", ServiceSchema);
