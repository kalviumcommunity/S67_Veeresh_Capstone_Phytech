const Cart = require('../model/Cart')
cartRouter.get('/:userId', async (req, res) => {
    try {
      const cart = await Cart.findOne({ user: req.params.userId }).populate('items.product');
  
      if (!cart) return res.status(404).json({ message: 'Cart not found' });
  
      res.status(200).json(cart);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  
module.exports = cartRouter;