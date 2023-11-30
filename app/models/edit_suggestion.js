export default (sequelize, Sequelize) => {
  return sequelize.define('edit_suggestion', {
    esid: {
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
    type: {
      type: Sequelize.CHAR(1),
      allowNull: true
    },
    status: {
      type: Sequelize.CHAR(1),
      allowNull: true
    },
    closure: {
      type: Sequelize.DATE,
      allowNull: true
    },
    product: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    price: {
      type: Sequelize.INTEGER,
      allowNull: true
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
    service: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    phone: {
      type: Sequelize.CHAR(1),
      allowNull: true
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
    addr1: {
      type: Sequelize.STRING(100),
      allowNull: true
    },
    addr2: {
      type: Sequelize.STRING(100),
      allowNull: true
    },
    zipcode: {
      type: Sequelize.CHAR(7),
      allowNull: true
    },
    writedate: {
      type: Sequelize.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'edit_suggestion',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "esid" },
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
