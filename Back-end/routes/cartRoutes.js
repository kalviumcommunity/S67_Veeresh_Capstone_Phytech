const { Router } = require('express');
const { Cart, cartItemSchema} = require('../model/Cart');
const cartRouter = Router();
const mongoose = require('mongoose');

// ✅ Add item(s) to cart
cartRouter.post('/add', async (req, res) => {
  try {
    const { user, items } = req.body;

    if (!user || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ error: 'Request must include user and items array.' });
    }

    let cart = await Cart.findOne({ user });

    if (!cart) {
      cart = new Cart({ user, items: [] });
    }

    // Merge new items into cart
    for (const newItem of items) {
      const existingItem = cart.items.find(
        (item) => item.product.toString() === newItem.product
      );

      if (existingItem) {
        existingItem.quantity += newItem.quantity;
      } else {
        cart.items.push(newItem);
      }
    }

    await cart.populate('items.product');
    cart.calculateTotalPrice();
    await cart.save();

    res.status(200).json({ message: 'Item(s) added to cart', cart });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Get cart for a user
cartRouter.get('/:userId', async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.params.userId }).populate('items.product');

    if (!cart) return res.status(404).json({ message: 'Cart not found' });

    cart.calculateTotalPrice();
    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Update quantity
cartRouter.put('/update', async (req, res) => {
  try {
    const { user, product, quantity } = req.body;

    const cart = await Cart.findOne({ user });
    if (!cart) return res.status(404).json({ message: 'Cart not found' });

    const item = cart.items.find((i) => i.product.toString() === product);
    if (!item) return res.status(404).json({ message: 'Item not found in cart' });

    item.quantity = quantity;

    await cart.populate('items.product');
    cart.calculateTotalPrice();
    await cart.save();

    res.status(200).json({ message: 'Quantity updated', cart });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Remove item
cartRouter.delete('/remove', async (req, res) => {
  try {
    const { user, product } = req.body;

    const cart = await Cart.findOne({ user });
    if (!cart) return res.status(404).json({ message: 'Cart not found' });

    cart.items = cart.items.filter((item) => item.product.toString() !== product);

    await cart.populate('items.product');
    cart.calculateTotalPrice();
    await cart.save();

    res.status(200).json({ message: 'Item removed', cart });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Clear cart
cartRouter.delete('/clear/:userId', async (req, res) => {
  try {
    const cart = await Cart.findOneAndDelete({ user: req.params.userId });
    if (!cart) return res.status(404).json({ message: 'Cart already empty or not found' });

    res.status(200).json({ message: 'Cart cleared' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = cartRouter;
