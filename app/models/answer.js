export default (sequelize, Sequelize) => {
  return sequelize.define('answer', {
    anid: {
      autoIncrement: true,
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iqid: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'inquiry',
        key: 'iqid'
      }
    },
    comid: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'company',
        key: 'comid'
      }
    },
    content: {
      type: Sequelize.STRING(1000),
      allowNull: true
    },
    writedate: {
      type: Sequelize.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'answer',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "anid" },
        ]
      },
      {
        name: "iqid",
        using: "BTREE",
        fields: [
          { name: "iqid" },
        ]
      },
      {
        name: "comid",
        using: "BTREE",
        fields: [
          { name: "comid" },
        ]
      },
    ]
  });
};
