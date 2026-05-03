const mongoose = require('mongoose');

const SkillSchema = new mongoose.Schema({
  name: { type: String, required: true },
  icon: { type: String } // FontAwesome class, e.g., 'fa-brands fa-python'
});

module.exports = mongoose.model('Skill', SkillSchema);
