const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  tech: [{ type: String }],
  icon: { type: String }, // FontAwesome class, e.g., 'fa-solid fa-traffic-light'
  githubLink: { type: String }
});

module.exports = mongoose.model('Project', ProjectSchema);
