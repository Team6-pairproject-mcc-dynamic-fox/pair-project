'use strict';
module.exports = (sequelize, DataTypes) => {
  class Hospital extends sequelize.Sequelize.Model { }
  Hospital.init({
    name: DataTypes.STRING,
    address: DataTypes.STRING(1000),
    city: DataTypes.STRING,
    link_map: DataTypes.STRING(1000),
    suspect_total: DataTypes.INTEGER,
    suspect_quota: DataTypes.INTEGER,
    hotline: DataTypes.STRING
  }, {
    sequelize,
    modelName: "Hospital"
  })
  Hospital.associate = function (models) {
    // associations can be defined here
    Hospital.belongsToMany(models.Suspect, { through: 'HospitalReferences' });
  };
  return Hospital;
};