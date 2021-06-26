const mongoose = require('mongoose');

const filmSchema = new mongoose.Schema({
  genre: Array,
  withWom: Array,
  mood: Array,
  id: Number
});

module.exports = mongoose.model('Film', filmSchema);
