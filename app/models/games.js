let mongoose = require('mongoose');

// create a model class
let gamesSchema = mongoose.Schema({
    Name: String,
    Rating: Number,
    Cost: Number
},
{
    collection: "games"
});

module.exports = mongoose.model('games', gamesSchema);