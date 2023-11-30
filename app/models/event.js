export default (sequelize, Sequelize) => {
  return sequelize.define('event', {
    evid: {
      autoIncrement: true,
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING(200),
      allowNull: true
    },
    link: {
      type: Sequelize.STRING(1000),
      allowNull: true
    },
    ispopup: {
      type: Sequelize.CHAR(1),
      allowNull: true
    },
    popupsize: {
      type: Sequelize.CHAR(1),
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
    tableName: 'event',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "evid" },
        ]
      },
    ]
  });
};
