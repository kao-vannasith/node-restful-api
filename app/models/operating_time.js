export default (sequelize, Sequelize) => {
  return sequelize.define('operating_time', {
    otid: {
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
    allday_open: {
      type: Sequelize.CHAR(1),
      allowNull: true
    },
    weekday_open: {
      type: Sequelize.CHAR(1),
      allowNull: true
    },
    weekday_open_time: {
      type: Sequelize.STRING(20),
      allowNull: true
    },
    weekday_rest_time: {
      type: Sequelize.STRING(20),
      allowNull: true
    },
    weekend_open: {
      type: Sequelize.CHAR(1),
      allowNull: true
    },
    weekend_open_time: {
      type: Sequelize.STRING(20),
      allowNull: true
    },
    weekend_rest_time: {
      type: Sequelize.STRING(20),
      allowNull: true
    },
    holiday_open: {
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
    tableName: 'operating_time',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "otid" },
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
