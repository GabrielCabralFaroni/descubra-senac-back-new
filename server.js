const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
db.sequelize.sync()                 // esse sync serviu para quando mandar, criar a tabela por exemplo, quando mandamos em curso.model
    .then(() => {
        console.log("Sucesso ao sincronizar com o banco.");
    })
    .catch((err) => {
        console.log("Filha ao sincronizar com b banco: " + err.message);
    });

db.sequelize.sync({ force: true }).then(() => {
    console.log("Sincronize novamente o db.");
});

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Sucesso" });
});

require("./app/routes/curso.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}.`);
});

// server como oq fez ligação com o postgress