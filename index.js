import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import adminRoutes from './routes/admin.js';


dotenv.config();


const app = express();
app.use(express.json());


mongoose
.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error(err));


app.use('/auth', authRoutes);
app.use('/admin', adminRoutes);


app.get('/', (req, res) => {
res.send('API is running...');
});


app.listen(process.env.PORT, () => {
console.log(`Server running on port ${process.env.PORT}`);
});