var Pokemon = require('../models/pokemon');

module.exports = {
  getPokemons : function(req, res){
    Pokemon.find({}, function(err, pokemons){
			if(err){
				res.json({success : false, message : 'Error'});
			}else{
				res.json(pokemons);
			}
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
        });
      }
    });
  },
  modifyPokemon : function(req, res, id){
    var id = req.params.id;
    Pokemon.findById({id}, function(err, pokemon){
			if(err){
        res.json({success : false, message : 'Error'});
			}else{
				if(req.body.name){
					pokemon.name = req.body.name;
				}
        if(req.body.number){
          pokemon.number = req.body.number;
        }
        if(req.body.type){
          pokemon.type = req.body.type;
        }
        if(req.body.before){
          pokemon.before = req.body.before;
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
				pokemon.save(function(err){
					if(err){
            res.json({success : false, message : 'Error'});
          }
					else {
						res.json(success)
					}
				});
			}
		});
  },
  deletePokemon : function(req, res, id){
    var id = req.params.id;
    Pokemon.remove({
      id}, function(err, pokemon){
        if(err){
          res.json({sucess : false, message: 'Error'});
        }
        else{
          res.json(success)
        }
      });
  }
}
