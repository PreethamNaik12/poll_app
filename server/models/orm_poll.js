'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ORM_Poll extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ORM_Poll.init({
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    choice:{
      type:  DataTypes.BOOLEAN,
      allowNull: false,
    },
    submissionDate: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    }
  }, {
    sequelize,
    modelName: 'ORM_Poll',
  });
  return ORM_Poll;
};