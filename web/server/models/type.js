var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var typeSchema = new Schema({
  name: {type : String},
  strength: [{type : Schema.Type.ObjectId, ref : 'Type'}],
  weak: [{type : Schema.Type.ObjectId, ref : 'Type'}]
});

typeSchema.index({ name : 'text'})
module.exports = mongoose.model('Type', typeSchema);
