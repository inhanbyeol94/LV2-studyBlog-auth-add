const express = require('express');
const app = express.Router();

const db = require('../database/library');

//all read
app.get('/', async (req, res) => {
  try {
    res.json((await db.find('post', {}, { password: 0 })).sort((a, b) => new Date(b.date) - new Date(a.date)));
  } catch (err) {
    return res.json(err);
  }
});

module.exports = app;
