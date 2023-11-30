export default (sequelize, Sequelize) => {
  return sequelize.define('company', {
    comid: {
      autoIncrement: true,
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id: {
      type: Sequelize.STRING(200),
      allowNull: true
    },
    password: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    comp_name: {
      type: Sequelize.STRING(500),
      allowNull: true
    },
    phone: {
      type: Sequelize.STRING(20),
      allowNull: true
    },
    addr1: {
      type: Sequelize.STRING(500),
      allowNull: true
    },
    addr2: {
      type: Sequelize.STRING(500),
      allowNull: true
    },
    latitude: {
      type: Sequelize.STRING(100),
      allowNull: true
    },
    longitude: {
      type: Sequelize.STRING(100),
      allowNull: true
    },
    entry: {
      type: Sequelize.CHAR(1),
      allowNull: true
    },
    introduction: {
      type: Sequelize.STRING(500),
      allowNull: true
    },
    business_type: {
      type: Sequelize.CHAR(1),
      allowNull: true
    },
    cop_sn: {
      type: Sequelize.STRING(20),
      allowNull: true
    },
    ceo_nm: {
      type: Sequelize.STRING(200),
      allowNull: true
    },
    biz_kind: {
      type: Sequelize.STRING(500),
      allowNull: true
    },
    biz_type: {
      type: Sequelize.STRING(500),
      allowNull: true
    },
    email: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    second_code: {
      type: Sequelize.STRING(6),
      allowNull: true
    },
    second_code_time: {
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
    tableName: 'company',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "comid" },
        ]
      },
    ]
  });
};
