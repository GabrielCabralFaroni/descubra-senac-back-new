/* Banco criado apenas para estudo será deletado 
   logo credenciais invalidas */
module.exports = {
    HOST: "dpg-cged7q284i25mv7opvv0-a",
    USER: "admin",
    PASSWORD: "gVKgBBv0QpMZzLS7ZdY9PeCo2vXzplI4",
    DB: "basemoedas_9bu4",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };



  // db config  deu as informações(credencias) para a ligação com o postgress que o server vai ler.