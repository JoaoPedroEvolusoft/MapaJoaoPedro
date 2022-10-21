module.exports = app => {
    const estados = require("../app/controllers/estado.controller.js"); 
    var router = require("express").Router(); 
    // Create a new Estado 
    router.post("/", estados.create); 
    // Retrieve all estados 
    router.get("/", estados.findAll); 
    // Retrieve a single Estado with id 
    router.get("/:id", estados.findOne); 
    // Update a Estado with id 
    router.put("/:id", estados.update); 
    // Delete a Estado with id 
    router.delete("/:id", estados.delete); 
    // Create a new Estado 
    router.delete("/", estados.deleteAll); 
    app.use('/api/estados', router); 
  }; 
