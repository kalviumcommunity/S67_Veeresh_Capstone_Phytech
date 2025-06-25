const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const inMemoryDB = require('../database/inMemoryDB');

// Register a new user
const register = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: "Username and password are required" });
    }

    const existingUser = inMemoryDB.findUserByUsername(username);
    if (existingUser) {
      return res.status(400).json({ message: "Username already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = inMemoryDB.createUser({
      username,
      password: hashedPassword,
      role: 'buyer' // default role
    });

    res.status(201).json({ message: 'User registered successfully' });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error during registration' });
  }
};

// Login a user
const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: "Username and password are required" });
    }

    const user = inMemoryDB.findUserByUsername(username);
    if (!user) return res.status(404).json({ message: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET || 'secret',
      { expiresIn: '1d' }
    );

    res.status(200).json({ message: 'Login successful', token, user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error during login' });
  }
};

// Upgrade role to 'seller'
const upgradeRole = async (req, res) => {
  try {
    const userId = req.user.id; // comes from auth middleware
    const { newRole } = req.body;

    if (!['buyer', 'seller'].includes(newRole)) {
      return res.status(400).json({ message: "Invalid role" });
    }

    const user = inMemoryDB.updateUserById(userId, { role: newRole });
    
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: `Role updated to ${newRole}`, user });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to update role' });
  }
};

module.exports = { register, login, upgradeRole };

