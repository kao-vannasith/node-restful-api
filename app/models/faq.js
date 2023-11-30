export default (sequelize, Sequelize) => {
  return sequelize.define('faq', {
    faqid: {
      autoIncrement: true,
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: Sequelize.STRING(200),
      allowNull: true
    },
    type: {
      type: Sequelize.CHAR(1),
      allowNull: true
    },
    answer: {
      type: Sequelize.STRING(1000),
      allowNull: true
    },
    writedate: {
      type: Sequelize.DATE,
      allowNull: true
    },
    modifydate: {
      type: Sequelize.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'faq',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "faqid" },
        ]
      },
    ]
  });
};
