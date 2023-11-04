const express = require('express');
const router = express.Router();
const { Pokemon } = require('../models/pokemon');
const { seedPokemon, getAllPokemon, getAPokemon, createPokemon, updatePokemonById, deletePokemon } = require('../controllers/pokemonController');

//----------------------  CRUD  ----------------------//
//--------------  Create  ----------------//
router.post('/create', createPokemon);

//--------------  Read  ----------------//
router.get('/pokemon', getAllPokemon);
router.get('/apokemon', getAPokemon);

//--------------  Update  ----------------//
router.put('/update/:id', updatePokemonById);

//--------------  Delete  ----------------//

router.delete('/delete/:id', deletePokemon);

//--------------  Seed Data  ----------------//
router.post('/seedPokemon', seedPokemon);

module.exports = router;
