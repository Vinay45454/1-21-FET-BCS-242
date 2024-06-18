const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/testdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema({
  rollNumber: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  accessCode: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

app.post('/register', async (req, res) => {
  try {
    const { rollNumber, email, accessCode } = req.body;
    const newUser = new User({ rollNumber, email, accessCode });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    if (error.code === 11000) {
      res.status(400).json({ message: 'Roll Number or Email already exists' });
    } else {
      res.status(500).json({ message: 'Internal server error' });
    }
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
