module.exports = app => {
    const categorias = require("../app/controllers/categoria.controller.js"); 
    var router = require("express").Router(); 
    // Create a new Categoria 
    router.post("/", categorias.create); 
    // Retrieve all categorias 
    router.get("/", categorias.findAll); 
    // Retrieve a single Categoria with id 
    router.get("/:id", categorias.findOne); 
    // Update a Categoria with id 
    router.put("/:id", categorias.update); 
    // Delete a Categoria with id 
    router.delete("/:id", categorias.delete); 
    // Create a new Categoria 
    router.delete("/", categorias.deleteAll); 
    app.use('/api/categorias', router); 
  }; 
