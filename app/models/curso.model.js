module.exports = (sequelize, Sequelize) => {
  const Curso = sequelize.define("curso_senac", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    url: {
      type: Sequelize.STRING,
      allowNull: false
    },
    titulo: {
      type: Sequelize.STRING,
      allowNull: false
    },
    resumo: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    descricao: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    mercado: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    diferenciais: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    cargahoraria: {
      type: Sequelize.STRING,
      allowNull: false
    },
    valor_total: {
      type: Sequelize.STRING,
      allowNull: false
    },
    parcelas: {
      type: Sequelize.STRING
    },
    parcela_valor: {
      type: Sequelize.STRING
    },
    prerequisitos: {
      type: Sequelize.STRING
    },
    matricula: {
      type: Sequelize.STRING
    },
    categoria: {
      type: Sequelize.STRING
    },
    subcategoria: {
      type: Sequelize.STRING
    },
    categoria_pai: {
      type: Sequelize.STRING
    },
    nivel: {
      type: Sequelize.STRING
    },
    modalidade: {
      type: Sequelize.STRING
    },
    codigo_imagem: {
      type: Sequelize.STRING
    },
    codigo_arquivo: {
      type: Sequelize.STRING,
      allowNull: true
    },
    extensao: {
      type: Sequelize.STRING,
      allowNull: true
    },
    grayphoto: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    },
    qtd: {
      type: Sequelize.INTEGER
    },
    imagem_url: {
      type: Sequelize.STRING,
      allowNull: true
    },
    arquivo: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    }
  });

  return Curso;
};