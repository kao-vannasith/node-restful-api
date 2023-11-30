export default (sequelize, Sequelize) => {
  return sequelize.define('cars', {
    id: {
      autoIncrement: true,
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    car_name: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    brand: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    image: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    color: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    year: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    plate: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    country: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    cc: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    no: {
      type: Sequelize.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'cars',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
