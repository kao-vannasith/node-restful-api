export default (sequelize, Sequelize) => {
  return sequelize.define('notification', {
    ntid: {
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
    title: {
      type: Sequelize.STRING(200),
      allowNull: true
    },
    content: {
      type: Sequelize.STRING(1000),
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
    tableName: 'notification',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ntid" },
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
