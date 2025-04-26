
import { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // Check if user is already logged in (from localStorage)
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setCurrentUser(JSON.parse(user));
    }
    setLoading(false);
  }, []);
  
  // Login function
  const login = async (email, password) => {
    try {
      // Mock login for now
      const userData = { 
        id: 1, 
        name: "User", 
        email,
        role: 'user', // default role
        isSellerVerified: false
      };
      setCurrentUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };
  
  // Register function
  const register = async (name, email, password) => {
    try {
      // Mock register for now
      const userData = { 
        id: 1, 
        name, 
        email,
        role: 'user', // default role
        isSellerVerified: false
      };
      setCurrentUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };
  
  // Become seller function
  const becomeSeller = async (sellerData) => {
    try {
      // Mock seller registration for now
      const updatedUser = {
        ...currentUser,
        role: 'seller_pending',
        sellerData
      };
      setCurrentUser(updatedUser);
      localStorage.setItem("user", JSON.stringify(updatedUser));
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };
  
  // Logout function
  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem("user");
  };
  
  const value = {
    currentUser,
    login,
    register,
    logout,
    becomeSeller,
    loading
  };
  
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
