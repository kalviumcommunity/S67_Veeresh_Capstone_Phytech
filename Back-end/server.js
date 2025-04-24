const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const connectDB = require('./database/db');
const productRoutes = require('./routes/productroutes');
const authRouter = require('./routes/authRoutes');
const cartRouter = require('./routes/cartRoutes');
const errorHandler = require('./middleware/errorHandler');

require('dotenv').config({ path: './Config/.env' });
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRouter);
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRouter)
//app.use(errorHandler);
app.use(errorHandler)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});