const pokedex = [];

module.exports = {
    getPokedex: (req, res) => {
        res.status(200).send(pokedex);
    },
    catchPokemon: (req, res) => {
        const {pokemon} = req.body;
        pokedex.push(pokemon);
        res.status(200).send(pokedex);
    }
};