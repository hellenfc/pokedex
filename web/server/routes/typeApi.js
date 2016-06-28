var TypeController = require('../controllers/typeController');

module.exports = function(express){
  var typeApi = express.Router();

  typeApi.route('/type')
  .get(function(req, res){
    TypeController.getTypes(req, res);
  })
  .post(function(req, res){
    TypeController.addType(req, res);
  })

  typeApi.route('/type/:id')
  .put(function(req, res){
    TypeController.modifyType(req, res);
  })

  return typeApi;
}
