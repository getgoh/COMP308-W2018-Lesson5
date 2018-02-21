let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// game object created from the Schema / Model
let game = require('../models/games');

/* GET home page. */
router.get('/', (req, res, next) => {

    // find all games
    game.find((err, games) => {
        if(err){
            return console.error(err);
        }
        else {
            console.log(games);
            res.render('games/index', {
                title: 'Games',
                games: games
            });
        }
    });

    
});

module.exports = router;
