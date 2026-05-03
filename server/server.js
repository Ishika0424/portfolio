require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const apiRoutes = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
const mongoURI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/portfolio';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Routes
app.use('/api', apiRoutes);

// Seed Data endpoint (for initial setup)
app.get('/api/seed', async (req, res) => {
  const Project = require('./models/Project');
  const Skill = require('./models/Skill');
  
  await Project.deleteMany({});
  await Skill.deleteMany({});

  const skills = [
    { name: 'Python', icon: 'fa-brands fa-python' },
    { name: 'Machine Learning', icon: 'fa-solid fa-brain' },
    { name: 'Deep Learning', icon: 'fa-solid fa-chart-network' },
    { name: 'React', icon: 'fa-brands fa-react' },
    { name: 'Java', icon: 'fa-brands fa-java' },
    { name: 'SQL', icon: 'fa-solid fa-database' }
  ];

  const projects = [
    {
      title: 'Smart Traffic System',
      description: 'AI-based traffic control system utilizing YOLOv5 for real-time object detection and density estimation.',
      tech: ['Python', 'YOLOv5', 'OpenCV'],
      icon: 'fa-solid fa-traffic-light',
      githubLink: '#'
    },
    {
      title: 'Smart Library System',
      description: 'Java-based comprehensive library management system featuring a graphical user interface and QR code integration.',
      tech: ['Java', 'GUI', 'QR Code'],
      icon: 'fa-solid fa-book-open-reader',
      githubLink: 'https://github.com/yourrepo'
    }
  ];

  await Skill.insertMany(skills);
  await Project.insertMany(projects);

  res.send('Database Seeded!');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
