module.exports = app => {
    const curso = require("../controllers/curso.controller.js");
  
    var router = require("express").Router(); 
  
    router.get("/obtercursos", curso.findAll);

    router.get("/obterpelonome", curso.FindByName);

    app.use("/api", router);

  };

  // get serviu para requisitar o nosso banco é o verbo httpcliente por exemplo.  Ai o front tem q estar em get também, isso é nossa definição de requisitar os dados. banco para o back, back para front.
  /*  package json serve para informar oq ele tem que baixar(bibliotecas,dependencias)  , coloca dentro de node_modules */
  // o sequelize é uma orm(biblioteca) que a gente instalou.
