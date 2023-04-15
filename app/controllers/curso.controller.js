const db = require("../models");
const Curso = db.cursos;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {

    Curso.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Erro ao consultar cursos."
        });
      });
};

<<<<<<< HEAD
exports.FindByName = (req, res) => {

  Curso.findAll()
=======
exports.findAllByName = (req, res) => {

  Curso.findAll({ where: { titulo: req.query.titulo } })
>>>>>>> 27a74e403082005f511701e859eb0bf413513912
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Erro ao consultar cursos."
      });
    });
<<<<<<< HEAD
};

=======

    console.log(req.query.titulo);
};

// function popularBase(){


// }


>>>>>>> 27a74e403082005f511701e859eb0bf413513912
// // exports.findOne = (req, res) => {
  
// // };


// exports serve para me permitir usar tal função em outros lugares, como por exemplo o require em rotas chamando o controller.