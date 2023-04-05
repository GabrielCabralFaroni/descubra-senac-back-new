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

// // exports.findOne = (req, res) => {
  
// // };
