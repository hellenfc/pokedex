var Pokemon = require('../models/pokemon');
var Type = require('../models/type');

module.exports = {
  getPokemons : function(req, res){
    Pokemon.find({

    });
  },
  addPokemon : function(req, res){
    var pokemon = new Pokemon();
    if(req.body.type){
      pokemon.type = req.body.type;
    }
    if(req.body.before){
      pokemon.before = req.body.before
    }
    if(req.body.after){
      pokemon.after = req.body.after;
    }
    if(req.body.height){
      pokemon.height = req.body.height;
    }
    if(req.body.weight){
      pokemon.weight = req.body.weight;
    }
    pokemon.name = req.body.name;
    pokemon.number = req.body.number;
    pokemon.save(function(err){
      if (err) {
        res.json({
          success: false,
          message: 'Error'
        });
      } else{
        res.json({
          success: true,
          message: 'Success'
        })
      }
    });
  },
  modifyPokemon : function(req, res, id){
    var id = req.body.
    Pokemon.update({

    });
  },
  deletePokemon : function(req, res, id){

  }
}
