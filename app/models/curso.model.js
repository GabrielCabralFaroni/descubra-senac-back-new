module.exports = (sequelize, Sequelize) => {
  const Curso = sequelize.define("cursos_s", {
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
      type: Sequelize.TEXT,
      allowNull: false
    },
    parcela_valor: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    prerequisitos: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    matricula: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    categoria: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    subcategoria: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    categoria_pai: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    nivel: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    modalidade: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    codigo_imagem: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    codigo_arquivo: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    extensao: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    grayphoto: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    qtd: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    imagem_url: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    arquivo: {
      type: Sequelize.TEXT,
      allowNull: false
    }
  });

  return Curso;
};