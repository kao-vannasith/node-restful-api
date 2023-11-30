export default (sequelize, Sequelize) => {
  return sequelize.define('event_comment', {
    evcid: {
      autoIncrement: true,
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    evid: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'event',
        key: 'evid'
      }
    },
    content: {
      type: Sequelize.STRING(500),
      allowNull: true
    },
    writedate: {
      type: Sequelize.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'event_comment',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "evcid" },
        ]
      },
      {
        name: "evid",
        using: "BTREE",
        fields: [
          { name: "evid" },
        ]
      },
    ]
  });
};
