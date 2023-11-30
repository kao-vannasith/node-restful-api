export default (sequelize, Sequelize) => {
  return sequelize.define('category_company_map', {
    crid: {
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
    writedate: {
      type: Sequelize.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'category_company_map',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "crid" },
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
