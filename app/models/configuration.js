export default (sequelize, Sequelize) => {
  return sequelize.define('configuration', {
    cfid: {
      autoIncrement: true,
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    refkey: {
      type: Sequelize.STRING(60),
      allowNull: true
    },
    title: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    content: {
      type: Sequelize.TEXT,
      allowNull: true
    },
    order: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    delete_yn: {
      type: Sequelize.CHAR(1),
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
    tableName: 'configuration',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "cfid" },
        ]
      },
    ]
  });
};
