const express = require('express');
const cors = require('cors');
const productRoutes = require('./routes/productroutes');
const authRouter = require('./routes/authRoutes');
const cartRouter = require('./routes/cartRoutes');
const errorHandler = require('./middleware/errorHandler');

require('dotenv').config({ path: './Config/.env' });

// Note: Using in-memory database for testing instead of MongoDB
console.log('✅ Using in-memory database for testing');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRouter);
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRouter);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});

