var Type = require('../models/type');

module.exports = {
  getTypes : function(req, res){
    Type.find({}, function(err, types){
      if(err){
				res.json({success : false, message : 'Error'});
			}else{
				res.json(types);
			}
    });
  },
  
}
