const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const pokemonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  img: [
    {
      type: String,
      required: true,
    },
  ],
});

const Pokemon = mongoose.model('Pokemon', pokemonSchema, 'pokemon');

module.exports = { Pokemon };
