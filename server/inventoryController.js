const rewards = require('./rewards.json')

let inventory = [
    {name: 'PokéDollar', image: 'https://res.cloudinary.com/teepublic/image/private/s--O3OvyFHG--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_000000,e_outline:48/co_000000,e_outline:inner_fill:48/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1538621304/production/designs/3255711_0.jpg', qty: 250},
    {name: 'Great Ball', image: 'http://pixelartmaker.com/art/a56a64f1b2b6379.png', qty: 10}
]

module.exports = {
    getInventory: (req, res) => {
        res.status(200).send(inventory)
    },
    getReward: (req, res) => {
        const {id} = req.params;
        let reward = rewards.find(element => element.id === +id);
        let inventoryCheck = inventory.findIndex(element => element.name === reward.name);
        if(inventoryCheck !== -1){
            inventory[inventoryCheck].qty += reward.qty
        } else {
            let restructuredReward = {
                name: reward.name,
                image: reward.image,
                qty: reward.qty
            }
            inventory.push(restructuredReward)
        }
        res.sendStatus(200)
    }
};