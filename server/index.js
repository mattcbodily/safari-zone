const express = require('express')
      pokeCtrl = require('./pokeController');

const app = express();
app.use(express.json());

//ENDPOINTS
app.get('/api/pokedex', pokeCtrl.getPokedex);
app.post('/api/pokemon', pokeCtrl.catchPokemon);

const port = 4040;
app.listen(port, () => console.log(`Gotta Catch em All on ${port}`))