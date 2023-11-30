export default (sequelize, Sequelize) => {
  return sequelize.define('inquiry', {
    iqid: {
      autoIncrement: true,
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    mid: {
      type: Sequelize.INTEGER,
      allowNull: true,
      comment: "회원번호(key)"
    },
    title: {
      type: Sequelize.STRING(200),
      allowNull: true
    },
    content: {
      type: Sequelize.STRING(1000),
      allowNull: true
    },
    type: {
      type: Sequelize.CHAR(1),
      allowNull: true
    },
    status: {
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
    tableName: 'inquiry',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "iqid" },
        ]
      },
    ]
  });
};
