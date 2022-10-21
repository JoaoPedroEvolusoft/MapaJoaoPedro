module.exports = app => {
    const estabelecimentos = require("../app/controllers/estabelecimento.controller.js"); 
    var router = require("express").Router(); 
    // Create a new Estabelecimento 
    router.post("/", estabelecimentos.create); 
    // Retrieve all estabelecimentos 
    router.get("/", estabelecimentos.findAll); 
    // Retrieve a single Estabelecimento with id 
    router.get("/:id", estabelecimentos.findOne); 
    // Update a Estabelecimento with id 
    router.put("/:id", estabelecimentos.update); 
    // Delete a Estabelecimento with id 
    router.delete("/:id", estabelecimentos.delete); 
    // Create a new Estabelecimento 
    router.delete("/", estabelecimentos.deleteAll); 
    app.use('/api/estabelecimentos', router); 
  }; 
