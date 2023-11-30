export default (sequelize, Sequelize) => {
  return sequelize.define('company_infra', {
    ciid: {
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
    group_seat: {
      type: Sequelize.CHAR(1),
      allowNull: true
    },
    valet: {
      type: Sequelize.CHAR(1),
      allowNull: true
    },
    booking: {
      type: Sequelize.CHAR(1),
      allowNull: true
    },
    pet: {
      type: Sequelize.CHAR(1),
      allowNull: true
    },
    rest_area: {
      type: Sequelize.CHAR(1),
      allowNull: true
    },
    parking: {
      type: Sequelize.CHAR(1),
      allowNull: true
    },
    visit_trip: {
      type: Sequelize.CHAR(1),
      allowNull: true
    },
    wifi: {
      type: Sequelize.CHAR(1),
      allowNull: true
    },
    facilities: {
      type: Sequelize.CHAR(1),
      allowNull: true
    },
    coffee: {
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
    tableName: 'company_infra',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ciid" },
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
