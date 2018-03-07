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

router.get('/add', (req, res, next) => {
    res.render('games/details', {
        title: "Add a new Game",
        games: ''
    });
});

router.post('/add', (req, res, next) => {
    let newGame = game({
        "Name": req.body.name,
        "Cost": req.body.cost,
        "Rating": req.body.rating
    });

    game.create(newGame, (err, game) => {
        if (err)
        {
            console.log(err);
            return next(err);
        }
        res.redirect('/games');
    });
});

module.exports = router;
