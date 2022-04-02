const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PublisherSchema = new Schema({
		"name" : {
            type: String,
            required: true
        },
		"country" : {
            type: String
        },
		"established" : {
            type: Number,
            length: 4
        }
});

const GameSchema = new Schema({
	"title" : {
        type: String,
        required: true
    },
	"year" : Number,
	"rate" : {
        type: Number,
        default: 1,
        min: 1,
        max: 5
    },
	"price" : {
        type: Number,
        min: 0,
        default: 0
    },
	"minPlayers" : {
        type: Number,
        min: 1,
        max: 10
    },
	"maxPlayers" : {
        type: Number,
        min: 1,
        max: 10
    },
	"publisher" : PublisherSchema,
	"reviews" :  { 
        type: [{String}]
     },
	"minAge" : {
        type: Number,
        min: 1
    },
	"designers" : {type: [String]}

});

module.exports = mongoose.model("Game", GameSchema, "games");


