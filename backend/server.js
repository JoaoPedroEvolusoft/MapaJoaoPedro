const express = require("express");
const cors = require("cors"); 
const app = express();

var corsOptions = { 
  origin: "http://localhost:8081" 
}; 

app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:admin@cluster0.a3mav.mongodb.net/curso-javascript?retryWrites=true&w=majority');

// simple route
app.get("/", (req, res) => { 
  res.json({ message: "Welcome to application." }); 
}); 

//Declara Coordenada rotas
require("./routes/coordenada.routes")(app); 

//Declara Categoria rotas
require("./routes/categoria.routes")(app); 

//Declara Endereço rotas
require("./routes/endereço.routes")(app); 

//Declara Estabelecimento rotas
require("./routes/estabelecimento.routes")(app); 

//Declara Estado rotas
require("./routes/estado.routes")(app); 

//Declara Municipio rotas
require("./routes/municipio.routes")(app); 

//Declara Busca rotas
require("./routes/busca.routes")(app); 

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}.`);
});
