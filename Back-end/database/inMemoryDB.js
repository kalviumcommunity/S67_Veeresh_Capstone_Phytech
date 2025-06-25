// Simple in-memory database for testing
const users = [];

const inMemoryDB = {
  // Find user by username
  findUserByUsername: (username) => {
    return users.find(user => user.username === username);
  },
  
  // Create new user
  createUser: (userData) => {
    const newUser = {
      _id: Date.now().toString(), // Simple ID generation
      username: userData.username,
      password: userData.password,
      role: userData.role || 'buyer',
      favorites: [],
      cart: []
    };
    users.push(newUser);
    return newUser;
  },
  
  // Update user by ID
  updateUserById: (id, updateData) => {
    const userIndex = users.findIndex(user => user._id === id);
    if (userIndex !== -1) {
      users[userIndex] = { ...users[userIndex], ...updateData };
      return users[userIndex];
    }
    return null;
  },
  
  // Get all users (for debugging)
  getAllUsers: () => users
};

module.exports = inMemoryDB;

