export default (sequelize, Sequelize) => {
  return sequelize.define('product', {
    pid: {
      autoIncrement: true,
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    comid: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'company',
        key: 'comid'
      }
    },
    scid: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'service_category',
        key: 'scid'
      }
    },
    name: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    status: {
      type: Sequelize.CHAR(1),
      allowNull: true
    },
    price: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    display: {
      type: Sequelize.CHAR(1),
      allowNull: true
    },
    del_yn: {
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
    tableName: 'product',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "pid" },
        ]
      },
      {
        name: "comid",
        using: "BTREE",
        fields: [
          { name: "comid" },
        ]
      },
      {
        name: "scid",
        using: "BTREE",
        fields: [
          { name: "scid" },
        ]
      },
    ]
  });
};
