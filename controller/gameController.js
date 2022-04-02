const Game = require("../game-model/game");

module.exports.allGames = function(req, res){
    let offset = 0;
    let count = 5;
    if(req.query.count){
        count = req.query.count;
    }
    if(req.query.offset){
        offset = req.query.offset;
    }
    Game.find({}, (err, data)=>{
        if(err){
            console.log(err);
            return;
        }
        res.status(200).json(data);
    }).skip(offset).limit(count);
    
}

module.exports.oneGame = function(req, res){
    let gameId = req.params.gameId;
    console.log(gameId);

    Game.findById({_id: gameId}, (err, game)=>{
        if(err){
            res.status(404).json({"Error": "Game not found"});
        }
        else{
            res.status(200).json(game);
        }
        
    });
}

module.exports.deleteOne = (req, res)=>{
    let gameId = req.params.gameId;
    Game.deleteOne({_id: gameId}, (err)=>{
        if(err){
            console.log(err);
            return;
        }
        res.status(200).send("Delete successful!");
    });
};