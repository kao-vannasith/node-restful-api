export default (sequelize, Sequelize) => {
  return sequelize.define('member_car', {
    mcid: {
      autoIncrement: true,
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
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
    car_type: {
      type: Sequelize.STRING(100),
      allowNull: true
    },
    car_brand: {
      type: Sequelize.STRING(100),
      allowNull: true
    },
    model: {
      type: Sequelize.STRING(100),
      allowNull: true
    },
    year: {
      type: Sequelize.STRING(6),
      allowNull: true
    },
    fuel: {
      type: Sequelize.CHAR(1),
      allowNull: true
    },
    cc: {
      type: Sequelize.STRING(10),
      allowNull: true
    },
    color: {
      type: Sequelize.STRING(100),
      allowNull: true
    },
    regdate: {
      type: Sequelize.DATE,
      allowNull: true
    },
    carno: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    production_date: {
      type: Sequelize.DATE,
      allowNull: true
    },
    car_class: {
      type: Sequelize.STRING(100),
      allowNull: true
    },
    last_inspection: {
      type: Sequelize.DATE,
      allowNull: true
    },
    representative: {
      type: Sequelize.CHAR(1),
      allowNull: true
    },
    drive_distance: {
      type: Sequelize.INTEGER,
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
    tableName: 'member_car',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "mcid" },
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
