module.exports = app => {
    const coordenadas = require("../app/controllers/coordenada.controller.js"); 
    var router = require("express").Router(); 
    // Create a new Coordenada 
    router.post("/", coordenadas.create); 
    // Retrieve all coordenadas 
    router.get("/", coordenadas.findAll); 
    // Retrieve a single Coordenada with id 
    router.get("/:id", coordenadas.findOne); 
    // Update a Coordenada with id 
    router.put("/:id", coordenadas.update); 
    // Delete a Coordenada with id 
    router.delete("/:id", coordenadas.delete); 
    // Create a new Coordenada 
    router.delete("/", coordenadas.deleteAll); 
    app.use('/api/coordenadas', router); 
  }; 
