const express = require('express')
      pokeCtrl = require('./pokeController'),
      invenCtrl = require('./inventoryController');

const app = express();
app.use(express.json());

//POKEMON ENDPOINTS
app.get('/api/pokedex', pokeCtrl.getPokedex);
app.post('/api/pokemon', pokeCtrl.catchPokemon);

//INVENTORY ENDPOINTS
app.get('/api/inventory', invenCtrl.getInventory);

const port = 4040;
app.listen(port, () => console.log(`Gotta Catch em All on ${port}`))