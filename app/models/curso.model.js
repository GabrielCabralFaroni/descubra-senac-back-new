module.exports = (sequelize, Sequelize) => {
  const Curso = sequelize.define("cursos_", {
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
      type: Sequelize.TEXT,
      allowNull: false
    },
    valor_total: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    parcelas: {
      type: Sequelize.TEXT
    },
    parcela_valor: {
      type: Sequelize.TEXT
    },
    prerequisitos: {
      type: Sequelize.TEXT
    },
    matricula: {
      type: Sequelize.TEXT
    },
    categoria: {
      type: Sequelize.TEXT
    },
    subcategoria: {
      type: Sequelize.TEXT
    },
    categoria_pai: {
      type: Sequelize.TEXT
    },
    nivel: {
      type: Sequelize.TEXT
    },
    modalidade: {
      type: Sequelize.TEXT
    },
    codigo_imagem: {
      type: Sequelize.TEXT
    },
    codigo_arquivo: {
      type: Sequelize.TEXT,
    },
    extensao: {
      type: Sequelize.TEXT,
    },
    grayphoto: {
      type: Sequelize.TEXT,
    },
    qtd: {
      type: Sequelize.TEXT
    },
    imagem_url: {
      type: Sequelize.TEXT,
    },
    arquivo: {
      type: Sequelize.TEXT,
    }
  });

  return Curso;
};