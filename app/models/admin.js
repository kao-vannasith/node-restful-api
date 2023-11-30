export default (sequelize, Sequelize) => {
  return sequelize.define('admin', {
    admid: {
      autoIncrement: true,
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    type: {
      type: Sequelize.CHAR(1),
      allowNull: true
    },
    id: {
      type: Sequelize.STRING(200),
      allowNull: true
    },
    password: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    password_expiredate: {
      type: Sequelize.DATE,
      allowNull: true
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
      type: Sequelize.CHAR(1),
      allowNull: true
    },
    comp_mng: {
      type: Sequelize.CHAR(1),
      allowNull: true
    },
    mbr_mng: {
      type: Sequelize.CHAR(1),
      allowNull: true
    },
    srvc_mng: {
      type: Sequelize.CHAR(1),
      allowNull: true
    },
    rsv_mng: {
      type: Sequelize.CHAR(1),
      allowNull: true
    },
    cnt_mng: {
      type: Sequelize.CHAR(1),
      allowNull: true
    },
    second_code: {
      type: Sequelize.STRING(6),
      allowNull: false
    },
    second_code_time: {
      type: Sequelize.DATE,
      allowNull: false
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
    tableName: 'admin',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "admid" },
        ]
      },
    ]
  });
};
