const mongoose = require('mongoose');

// Schema for individual cart item
const cartItemSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  quantity: {
    type: Number,
    required: true,
    default: 1,
    min: [1, 'Quantity must be at least 1']
  }
});

// Schema for the entire cart
const cartSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Buyer',
    required: true,
    unique: true
  },
  items: [cartItemSchema],
  totalPrice: {
    type: Number,
    default: 0
  },
  status: {
    type: String,
    enum: ['active', 'checked_out', 'abandoned'],
    default: 'active'
  }
}, {
  timestamps: true
});

// 🔁 Method to calculate total price (must populate items.product first)
cartSchema.methods.calculateTotalPrice = function () {
  this.totalPrice = this.items.reduce((total, item) => {
    const price = item.product.price || 0; // fallback for safety
    return total + item.quantity * price;
  }, 0);
  return this.totalPrice;
};

// Export both model and sub-schema
const Cart = mongoose.model('Cart', cartSchema);

module.exports = {
  Cart,
  cartItemSchema
};
