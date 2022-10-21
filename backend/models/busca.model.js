var mongoose = require('mongoose'); 
var Schema = mongoose.Schema;

module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      nome: String,
        municipios: {type: Schema.Types.ObjectId, ref: 'Municipio'}, 
        categoria: {type: Schema.Types.ObjectId, ref: 'Categoria'}, 
      progressoDaBuscaPorMunicipio: String,
      progressoDaBuscaPorCategoria: String,
      dataDeInicioDaBusca: Date,
      dataFimDaBusca: Date,
      ultimaAtualizacao: Date,
      Estado: String
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Busca = mongoose.model("busca", schema);
  return Busca;
};
