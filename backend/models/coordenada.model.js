var mongoose = require('mongoose'); 
var Schema = mongoose.Schema;

module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      latitude: Number,
      longitude: Number,
      sexo: String,
        raca: {type: Schema.Types.ObjectId, ref: 'TipoRaça'}, 
      estagio: String,
      idade: Number,
      escore: String,
        registroProducao: [ 
          [{type: Schema.Types.ObjectId, ref: 'RegistroProducao'}] 
        ], 
      numeroRegistro: Number,
      tipoSanguineo: String,
        criador: {type: Schema.Types.ObjectId, ref: 'Pessoa'}, 
      variedade: String,
      composicaoRacial: String
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Coordenada = mongoose.model("coordenada", schema);
  return Coordenada;
};
