module.exports = app => {
    const municipios = require("../app/controllers/municipio.controller.js"); 
    var router = require("express").Router(); 
    // Create a new Municipio 
    router.post("/", municipios.create); 
    // Retrieve all municipios 
    router.get("/", municipios.findAll); 
    // Retrieve a single Municipio with id 
    router.get("/:id", municipios.findOne); 
    // Update a Municipio with id 
    router.put("/:id", municipios.update); 
    // Delete a Municipio with id 
    router.delete("/:id", municipios.delete); 
    // Create a new Municipio 
    router.delete("/", municipios.deleteAll); 
    app.use('/api/municipios', router); 
  }; 
