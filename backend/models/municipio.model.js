var mongoose = require('mongoose'); 
var Schema = mongoose.Schema;

module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      nome: String,
        coordenada: {type: Schema.Types.ObjectId, ref: 'Coordenada'}, 
      CodigoIBDE: String,
        uf: {type: Schema.Types.ObjectId, ref: 'UnidadeFederativa'}, 
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Municipio = mongoose.model("municipio", schema);
  return Municipio;
};
