import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import path from 'path';
dotenv.config();

import UserRoute from './routes/user.route.js';
import AuthRoute from './routes/auth.route.js';
import SalesRoute from './routes/sales.route.js';
import BarangRoute from './routes/barang.route.js';
import activityInRoute from './routes/activityIn.route.js';
import activityOutRoute from './routes/activityOut.route.js';

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.use(express.json());

app.use(cookieParser());

app.listen(3000, () => {
  console.log('Server is running on port 3000!');
});

app.use('/api/user', UserRoute);
app.use('/api/auth', AuthRoute);
app.use('/api/sales', SalesRoute);
app.use('/api/barang', BarangRoute);
app.use('/api/actIn', activityInRoute);
app.use('/api/actOut', activityOutRoute);

// app.use(express.static(path.join(__dirname, '/client/dist')));

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
// })

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
