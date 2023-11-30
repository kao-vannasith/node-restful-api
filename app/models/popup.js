export default (sequelize, Sequelize) => {
  return sequelize.define('popup', {
    ppid: {
      autoIncrement: true,
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    admid: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'admin',
        key: 'admid'
      }
    },
    name: {
      type: Sequelize.STRING(200),
      allowNull: true
    },
    size: {
      type: Sequelize.CHAR(1),
      allowNull: true
    },
    link: {
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
    tableName: 'popup',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ppid" },
        ]
      },
      {
        name: "admid",
        using: "BTREE",
        fields: [
          { name: "admid" },
        ]
      },
    ]
  });
};
