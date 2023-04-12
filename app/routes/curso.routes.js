module.exports = app => {
    const curso = require("../controllers/curso.controller.js");
  
    var router = require("express").Router(); 
  
    router.get("/obtercursos", curso.findAll);

    router.get("/obtercursospelonome", curso.findAllByName);

    app.use("/api", router);

  };