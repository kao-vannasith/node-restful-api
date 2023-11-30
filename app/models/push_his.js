export default (sequelize, Sequelize) => {
  return sequelize.define('push_his', {
    paid: {
      autoIncrement: true,
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
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
    adpush: {
      type: Sequelize.CHAR(1),
      allowNull: true
    },
    title: {
      type: Sequelize.STRING(200),
      allowNull: true
    },
    content: {
      type: Sequelize.STRING(1000),
      allowNull: true
    },
    wirtedate: {
      type: Sequelize.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'push_his',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "paid" },
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
