var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var typeSchema = new Schema({
  name: {type : String, required : true},
  strength: [{type : Schema.Types.ObjectId, ref : 'Type'}],
  weak: [{type : Schema.Types.ObjectId, ref : 'Type'}]
});

typeSchema.index({ name : 'text'});
module.exports = mongoose.model('Type', typeSchema);
