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
  addType : function(req, res){
    var type = new Type();

    if(req.body.strength){
      type.strength = req.body.strength;
    }
    if(req.body.weak){
      type.weak = req.body.weak;
    }
    type.name = req.body.name;
    type.save(function(err){
      console.log(req.body.name);
      console.log(type.name);
      console.log(req.body.weak);
      console.log(type.weak);
      console.log(req.body.strength);
      console.log(type.strength);
      if(err){
        res.send(err);
        // res.json({ success : false, message : 'Error'});
      } else{
        res.json({
          success : true, message : 'Success'
        })
      }
    });
  },
  modifyType : function(req, res, id){
    
  }
}
