export default (sequelize, Sequelize) => {
  return sequelize.define('review_reply', {
    rvrpid: {
      autoIncrement: true,
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    reviewid: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'review',
        key: 'reviewid'
      }
    },
    rsvid: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'reservation',
        key: 'rsvid'
      }
    },
    mid2: {
      type: Sequelize.INTEGER,
      allowNull: true,
      comment: "회원번호(key)",
      references: {
        model: 'member',
        key: 'mid'
      }
    },
    rvr_content: {
      type: Sequelize.STRING(1000),
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
    tableName: 'review_reply',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "rvrpid" },
        ]
      },
      {
        name: "mid2",
        using: "BTREE",
        fields: [
          { name: "mid2" },
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
        name: "reviewid",
        using: "BTREE",
        fields: [
          { name: "reviewid" },
        ]
      },
    ]
  });
};
