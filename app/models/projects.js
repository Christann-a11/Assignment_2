const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema(
  {
    title: String,
    description: String,        
    imagePath: String     
   
  },
  { collection: "projects" }
);

module.exports = mongoose.model("Projects", ProjectSchema);
