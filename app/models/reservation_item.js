export default (sequelize, Sequelize) => {
  return sequelize.define('reservation_item', {
    riid: {
      autoIncrement: true,
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    rsvid: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'reservation',
        key: 'rsvid'
      }
    },
    pid: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'product',
        key: 'pid'
      }
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
    tableName: 'reservation_item',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "riid" },
        ]
      },
      {
        name: "rsvid",
        using: "BTREE",
        fields: [
          { name: "rsvid" },
        ]
      },
      {
        name: "pid",
        using: "BTREE",
        fields: [
          { name: "pid" },
        ]
      },
    ]
  });
};
