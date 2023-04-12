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

exports.findAllByName = (req, res) => {

  Curso.findAll({ where: { titulo: req.query.titulo } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Erro ao consultar cursos."
      });
    });

    console.log(req.query.titulo);
};

// function popularBase(){


// }


// // exports.findOne = (req, res) => {
  
// // };
