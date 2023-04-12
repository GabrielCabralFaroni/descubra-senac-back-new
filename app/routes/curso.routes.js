module.exports = app => {
    const curso = require("../controllers/curso.controller.js");
  
    var router = require("express").Router(); 
  
    router.get("/obtercursos", curso.findAll);

    app.use("/api", router);

  };