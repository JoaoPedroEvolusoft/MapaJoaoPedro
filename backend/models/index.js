const mongoose = require("mongoose"); 
mongoose.Promise = global.Promise; 
const db = {}; 
db.mongoose = mongoose; 

//Declara Coordenada
db.coordenadas = require("./coordenada.model.js")(mongoose); 

//Declara Categoria
db.categorias = require("./categoria.model.js")(mongoose); 

//Declara Endereço
db.endereços = require("./endereço.model.js")(mongoose); 

//Declara Estabelecimento
db.estabelecimentos = require("./estabelecimento.model.js")(mongoose); 

//Declara Estado
db.estados = require("./estado.model.js")(mongoose); 

//Declara Municipio
db.municipios = require("./municipio.model.js")(mongoose); 

//Declara Busca
db.buscas = require("./busca.model.js")(mongoose); 

