require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('./mongo')

const port = process.env.BACKEND_PORT;
console.log(' Database connection state', mongoose.connection.readyState)

app.get('/', (req, res) => {
  console.log(`App is running on port ${port}`);
  res.send("Server is working");
 
});

app.listen(port);
