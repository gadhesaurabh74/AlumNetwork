const User = require('../Models/users');
const Alumini = require('../Models/alumni');

// Get user profile
const getUserProfile = async (req, res) => {
  const { _id } = req.params;
  console.log('Getting user profile');

  try {
   
    const user = await User.findById(_id).select('fullName graduationYear course usn fieldOfStudy');
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update user profile
const updateUserProfile = async (req, res) => {
  const { _id } = req.params;
  const updates = req.body;

  try {
    const user = await User.findByIdAndUpdate(_id, updates, { new: true });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json({ message: 'Profile updated successfully', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Getalumini profile
const getAluminiProfile = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await Alumini.findById(id).select('fullName graduationYear course usn fieldOfStudy');
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update Alumini profile
const updateAluminiProfile = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  try {
    const user = await Alumini.findByIdAndUpdate(id, updates, { new: true });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json({ message: 'Profile updated successfully', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getUserProfile,
  updateUserProfile,
  getAluminiProfile,
  updateAluminiProfile,
};
