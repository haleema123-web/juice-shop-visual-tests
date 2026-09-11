require('dotenv').config();

module.exports = {
  // ✅ Tokens from environment variables
  authToken: process.env.AUTH_TOKEN,
  apiKey: process.env.API_KEY,
  
  // ✅ Test users from environment variables
  testUser: {
    email: process.env.TEST_USER_EMAIL,
    password: process.env.TEST_USER_PASSWORD
  },
  
  // ✅ Check if token exists
  hasAuthToken: () => {
    return !!process.env.AUTH_TOKEN;
  },
  
  // ✅ Get token with fallback
  getAuthToken: () => {
    return process.env.AUTH_TOKEN || null;
  }
};