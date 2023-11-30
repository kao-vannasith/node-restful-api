export default (sequelize, Sequelize) => {
  return sequelize.define('company_payment', {
    cpid: {
      autoIncrement: true,
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    comid: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'company',
        key: 'comid'
      }
    },
    credit: {
      type: Sequelize.CHAR(1),
      allowNull: true
    },
    sspay: {
      type: Sequelize.CHAR(1),
      allowNull: true
    },
    zeropay: {
      type: Sequelize.CHAR(1),
      allowNull: true
    },
    cash: {
      type: Sequelize.CHAR(1),
      allowNull: true
    },
    ggvoucher: {
      type: Sequelize.CHAR(1),
      allowNull: true
    },
    kakaopay: {
      type: Sequelize.CHAR(1),
      allowNull: true
    },
    etc: {
      type: Sequelize.STRING(200),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'company_payment',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "cpid" },
        ]
      },
      {
        name: "comid",
        using: "BTREE",
        fields: [
          { name: "comid" },
        ]
      },
    ]
  });
};
