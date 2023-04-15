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

exports.FindByName = (req, res) => {

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

// // exports.findOne = (req, res) => {
  
// // };


// exports serve para me permitir usar tal função em outros lugares, como por exemplo o require em rotas chamando o controller.