module.exports = app => {
    const curso = require("../controllers/curso.controller.js");
  
    var router = require("express").Router(); 
  
    router.get("/obtercursos", curso.findAll);

<<<<<<< HEAD
    router.get("/obterpelonome", curso.FindByName);
=======
    router.get("/obtercursospelonome", curso.findAllByName);
>>>>>>> 27a74e403082005f511701e859eb0bf413513912

    app.use("/api", router);

  };

  // get serviu para requisitar o nosso banco é o verbo httpcliente por exemplo.  Ai o front tem q estar em get também, isso é nossa definição de requisitar os dados. banco para o back, back para front.
  /*  package json serve para informar oq ele tem que baixar(bibliotecas,dependencias)  , coloca dentro de node_modules */
  // o sequelize é uma orm(biblioteca) que a gente instalou.
