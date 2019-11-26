let inventory = [
    {name: 'Great Ball', image: 'http://pixelartmaker.com/art/a56a64f1b2b6379.png', qty: 10}
]

module.exports = {
    getInventory: (req, res) => {
        res.status(200).send(inventory)
    }
};