module.exports = app => {
    const endereços = require("../app/controllers/endereço.controller.js"); 
    var router = require("express").Router(); 
    // Create a new Endereço 
    router.post("/", endereços.create); 
    // Retrieve all endereços 
    router.get("/", endereços.findAll); 
    // Retrieve a single Endereço with id 
    router.get("/:id", endereços.findOne); 
    // Update a Endereço with id 
    router.put("/:id", endereços.update); 
    // Delete a Endereço with id 
    router.delete("/:id", endereços.delete); 
    // Create a new Endereço 
    router.delete("/", endereços.deleteAll); 
    app.use('/api/endereços', router); 
  }; 
