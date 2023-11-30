export default (sequelize, Sequelize) => {
  return sequelize.define('reservation', {
    rsvid: {
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
    mid: {
      type: Sequelize.INTEGER,
      allowNull: true,
      comment: "회원번호(key)",
      references: {
        model: 'member',
        key: 'mid'
      }
    },
    rsvno: {
      type: Sequelize.STRING(20),
      allowNull: true
    },
    rsv_type: {
      type: Sequelize.CHAR(1),
      allowNull: true
    },
    rsv_status: {
      type: Sequelize.CHAR(1),
      allowNull: true
    },
    reservation_date: {
      type: Sequelize.DATE,
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
    tableName: 'reservation',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "rsvid" },
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
        name: "mid",
        using: "BTREE",
        fields: [
          { name: "mid" },
        ]
      },
    ]
  });
};
