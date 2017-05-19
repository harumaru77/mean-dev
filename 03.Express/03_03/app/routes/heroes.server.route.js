// Load the 'heroes' controller
const heroes = require('../controllers/heroes.server.controller');

// Define the routes module' method
module.exports = function(app) {
    // Mount the 'heroes' controller's 'render' method
    app.get('/heroes', heroes.getHeroes);
    app.post('/heroes', heroes.getNewHeroes);
    //app.put('/heroes', heroes.getHiphopHeroes);

};