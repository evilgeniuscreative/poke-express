//--------------  Data  ----------------//

const { seedlings } = require('../seed/seeds.js');
console.log('seedlings', seedlings);

//--------------  Models ----------------//
const { Pokemon } = require('../models/pokemon');

//--------------  Controllers  ----------------//

function getAllPokemon(req, res) {
  Pokemon.find({});
  res.render('pokemon', { Pokemon });
}

async function getAPokemon(req, res) {
  const pokemon = await Pokemon.findById(req.params.id);
  res.render('apokemon', { Pokemon });
}

function createPokemon(req, res) {
  res.render('createpokemon');
  Pokemon.create(req.body);
}

async function updatePokemonById(req, res) {
  const pokemon = await Pokemon.findById(req.params.id);
  res.render('updatepokemon', { Pokemon });
}

function updatePokemonInDB(req, res) {
  Pokemon.findOneAndUpdate(req.params.id, req.body);
}

function deletePokemon(req, res) {
  Pokemon.findByIdAndDelete(req.params.id);
  res.redirect('/pokemon');
}

function seedPokemon(req, res) {
  Pokemon.insertMany(seedPokemon.seedlings);
  res.redirect('/pokemon');
}

module.exports = {
  seedPokemon,
  getAllPokemon,
  getAPokemon,
  createPokemon,
  updatePokemonById,
  updatePokemonInDB,
  deletePokemon,
};
