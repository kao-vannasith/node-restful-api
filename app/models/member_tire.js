export default (sequelize, Sequelize) => {
  return sequelize.define('member_tire', {
    mtid: {
      autoIncrement: true,
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    mcid: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'member_car',
        key: 'mcid'
      }
    },
    brand: {
      type: Sequelize.STRING(100),
      allowNull: true
    },
    tire_name: {
      type: Sequelize.STRING(100),
      allowNull: true
    },
    sectional: {
      type: Sequelize.STRING(20),
      allowNull: true
    },
    aspectratio: {
      type: Sequelize.STRING(20),
      allowNull: true
    },
    inch: {
      type: Sequelize.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'member_tire',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "mtid" },
        ]
      },
      {
        name: "mcid",
        using: "BTREE",
        fields: [
          { name: "mcid" },
        ]
      },
    ]
  });
};
