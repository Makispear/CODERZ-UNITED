// import express.js -----------------------
const express = require('express')
const PORT = process.env.PORT || 3001
const app = express()
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// import the database ---------------------
const db = require('./config/connection')


db.once('open', () => {
  app.listen(PORT, () => console.log(`API server running on port ${PORT}!`));
});
