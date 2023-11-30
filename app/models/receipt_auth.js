export default (sequelize, Sequelize) => {
  return sequelize.define('receipt_auth', {
    rcid: {
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
    title: {
      type: Sequelize.STRING(200),
      allowNull: true
    },
    status: {
      type: Sequelize.CHAR(1),
      allowNull: true
    },
    content: {
      type: Sequelize.STRING(1000),
      allowNull: true
    },
    reason: {
      type: Sequelize.TEXT,
      allowNull: true
    },
    writedate: {
      type: Sequelize.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'receipt_auth',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "rcid" },
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
