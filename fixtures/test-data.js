module.exports = {
  users: {
    admin: {
      email: 'admin@juice-shop.com',
      password: 'admin123',
      role: 'admin'
    },
    customer: {
      email: 'customer@juice-shop.com',
      password: 'customer123',
      role: 'customer'
    }
  },
  orders: {
    testOrder: {
      id: 12345,
      total: 99.99,
      status: 'pending'
    }
  }
};