var mongoose = require('mongoose'); 
var Schema = mongoose.Schema;

module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      cepPadrao: Number,
      bairro: String,
      complemento: String,
      logradouro: String,
        municipio: {type: Schema.Types.ObjectId, ref: 'Municipio'}, 
        coordenada: {type: Schema.Types.ObjectId, ref: 'Coordenada'}, 
      globalCode: String
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Endereço = mongoose.model("endereço", schema);
  return Endereço;
};
