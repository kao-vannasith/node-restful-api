export default (sequelize, Sequelize) => {
  return sequelize.define('s3_ref', {
    refid: {
      autoIncrement: true,
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    reftype: {
      type: Sequelize.CHAR(1),
      allowNull: true
    },
    refpk: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    refkey: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    bucket_nm: {
      type: Sequelize.STRING(255),
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
    tableName: 's3_ref',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "refid" },
        ]
      },
    ]
  });
};
