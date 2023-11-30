export default (sequelize, Sequelize) => {
  return sequelize.define('member', {
    mid: {
      autoIncrement: true,
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "회원번호(key)"
    },
    name: {
      type: Sequelize.STRING(200),
      allowNull: true
    },
    phone: {
      type: Sequelize.STRING(70),
      allowNull: true
    },
    activation: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    sec_reason: {
      type: Sequelize.TEXT,
      allowNull: true
    },
    sec_date: {
      type: Sequelize.DATE,
      allowNull: true
    },
    logintime: {
      type: Sequelize.DATE,
      allowNull: true
    },
    device_id: {
      type: Sequelize.STRING(200),
      allowNull: true
    },
    id: {
      type: Sequelize.STRING(100),
      allowNull: true
    },
    password: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    email: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    last_pw_changedate: {
      type: Sequelize.DATE,
      allowNull: true
    },
    addr1: {
      type: Sequelize.STRING(1000),
      allowNull: true
    },
    addr2: {
      type: Sequelize.STRING(1000),
      allowNull: true
    },
    zipcode: {
      type: Sequelize.CHAR(7),
      allowNull: true
    },
    service_agree: {
      type: Sequelize.CHAR(1),
      allowNull: true
    },
    service_agree_date: {
      type: Sequelize.DATE,
      allowNull: true
    },
    location_service_agree: {
      type: Sequelize.CHAR(1),
      allowNull: true
    },
    location_service_agree_date: {
      type: Sequelize.DATE,
      allowNull: true
    },
    privacy_agree: {
      type: Sequelize.CHAR(1),
      allowNull: true
    },
    privacy_agree_date: {
      type: Sequelize.DATE,
      allowNull: true
    },
    marketing_agree: {
      type: Sequelize.CHAR(1),
      allowNull: true
    },
    marketing_agree_date: {
      type: Sequelize.DATE,
      allowNull: true
    },
    carinfo_agree: {
      type: Sequelize.CHAR(1),
      allowNull: true
    },
    carinfo_agree_date: {
      type: Sequelize.DATE,
      allowNull: true
    },
    night_push_agree: {
      type: Sequelize.CHAR(1),
      allowNull: true
    },
    nightad_agree: {
      type: Sequelize.CHAR(1),
      allowNull: true
    },
    nightad_agree_date: {
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
    tableName: 'member',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "mid" },
        ]
      },
    ]
  });
};
