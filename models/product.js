'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Product.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    slug: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    image: {
      type: DataTypes.JSON,
      allowNull: true
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    cropPrice: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    deletedAt: { 
      type: DataTypes.Date, 
      defaultValue: null
    }
  }, {
    sequelize,
    tableName: 'products',
    modelName: 'Product',
  });
  return Product;
};