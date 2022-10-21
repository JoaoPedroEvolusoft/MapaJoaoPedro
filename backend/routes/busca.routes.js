module.exports = app => {
    const buscas = require("../app/controllers/busca.controller.js"); 
    var router = require("express").Router(); 
    // Create a new Busca 
    router.post("/", buscas.create); 
    // Retrieve all buscas 
    router.get("/", buscas.findAll); 
    // Retrieve a single Busca with id 
    router.get("/:id", buscas.findOne); 
    // Update a Busca with id 
    router.put("/:id", buscas.update); 
    // Delete a Busca with id 
    router.delete("/:id", buscas.delete); 
    // Create a new Busca 
    router.delete("/", buscas.deleteAll); 
    app.use('/api/buscas', router); 
  }; 
