var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pokemonSchema = new Schema({
  name : {type: String, required: true, index: {unique: true}},
  number : {type: Number, required: true},
  type : [{type: Schema.Types.ObjectId, required: true, ref : 'Type'}],
  before : [{type: Schema.Types.ObjectId, ref : 'Pokemon'}],
  after : [{type: Schema.Types.ObjectId, ref : 'Pokemon'}],
  height : {type: Number, min:0, required: true},
  weight : {type: Number, min:0, require: true}
});

pokemonSchema.index({ name : 'text'});
module.exports = mongoose.model('Pokemon', pokemonSchema);
