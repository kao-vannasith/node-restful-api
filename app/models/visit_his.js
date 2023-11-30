export default (sequelize, Sequelize) => {
  return sequelize.define('visit_his', {
    vhid: {
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
    comid2: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    writedate: {
      type: Sequelize.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'visit_his',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "vhid" },
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
