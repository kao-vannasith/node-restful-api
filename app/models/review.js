export default (sequelize, Sequelize) => {
  return sequelize.define('review', {
    reviewid: {
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
    mid: {
      type: Sequelize.INTEGER,
      allowNull: false,
      comment: "회원번호(key)",
      references: {
        model: 'member',
        key: 'mid'
      }
    },
    starpoint: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    rv_content: {
      type: Sequelize.STRING(1000),
      allowNull: true
    },
    status: {
      type: Sequelize.CHAR(1),
      allowNull: true
    },
    reason: {
      type: Sequelize.TEXT,
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
    tableName: 'review',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "reviewid" },
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
        name: "mid",
        using: "BTREE",
        fields: [
          { name: "mid" },
        ]
      },
    ]
  });
};
