var PokedexController = require('../controllers/pokedexController');

module.exports = function(express){
  var pokedexApi = express.Router();

  pokedexApi.route('/pokemon')
  .get(function(req, res){
    PokedexController.getPokemons(req, res);
  })
  .post(function(req, res){
    PokedexController.addPokemon(req, res)
  });

  pokedexApi.route('/pokemon/:id')
  .put(function(req, res){
    var id = req.params.id;
    PokedexController.modifyPokemon(req, res, id);
  })
  .delete(function(req, res){
    var id = req.params.id;
    PokedexController.deletePokemon(req, res, id);
  });
  return pokedexApi;
}
