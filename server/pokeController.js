const pokedex = [];

module.exports = {
    getPokedex: (req, res) => {
        res.status(200).send(pokedex);
    },
    catchPokemon: (req, res) => {
        const {name, image} = req.body;
        const pokemonObj = {
            name,
            image
        }
        pokedex.push(pokemonObj);
        res.status(200).send(pokedex);
    }
};