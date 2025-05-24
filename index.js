require('dotenv').config();
const express = require('express');
const mongoose  = require('mongoose');
const app = express()
const errorHandler = require('./middleware/error.middleware');

const userRoute = require('../crud/routes/user.routes');

app.use(express.json());

app.use('/api/v1', userRoute);
app.use(errorHandler);





const PORT = process.env.PORT;
const URL = process.env.URL;
console.log(PORT);
console.log(URL);


mongoose.connect(URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`✅ Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err);
  });
