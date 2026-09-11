module.exports = {
  // ⏳ Default timeouts
  default: 30000,        // 30 seconds
  short: 5000,          // 5 seconds
  medium: 15000,        // 15 seconds
  long: 60000,          // 60 seconds
  
  // 🔒 Security controls
  rateLimit: 60000,     // 60 seconds
  lockout: 120000,      // 2 minutes
  twoFactor: 30000,     // 30 seconds
  
  // 📍 Navigation
  navigation: 30000,
  pageLoad: 10000,
  elementVisible: 5000,
};