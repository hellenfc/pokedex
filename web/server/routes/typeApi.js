var TypeController = require('../controllers/typeController');

module.exports = function(express){
  var typeApi = express.Router();

  typeApi.route('/type')
  .get(function(req, res){
    TypeController.getTypes(req, res);
  })
  .post(function(req, res){
    TypeController.addTypes(req, res);
  })
  return typeApi;
}
