var mongoose = require('mongoose'); 
var Schema = mongoose.Schema;

module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      nome: String,
        endereco: {type: Schema.Types.ObjectId, ref: 'Endereço'}, 
        categoria: [ 
          [{type: Schema.Types.ObjectId, ref: 'Categoria'}] 
        ], 
      placeId: String
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Estabelecimento = mongoose.model("estabelecimento", schema);
  return Estabelecimento;
};
