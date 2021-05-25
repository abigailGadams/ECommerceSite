const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");
const mongoose = require("mongoose");

class Category extends Model {}

Category.init(
  {
    category_name: DataTypes.STRING
  },
  name: {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "category",
  }
);

module.exports = mongoose.model("Category",catagorySchema);
