export default (sequelize, Sequelize) => {
  return sequelize.define('holiday', {
    hdid: {
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
    startdate: {
      type: Sequelize.DATE,
      allowNull: true
    },
    enddate: {
      type: Sequelize.DATE,
      allowNull: true
    },
    writedate: {
      type: Sequelize.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'holiday',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "hdid" },
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
