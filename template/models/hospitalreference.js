'use strict';
module.exports = (sequelize, DataTypes) => {

  class HospitalReference extends sequelize.Sequelize.Model { }
  HospitalReference.init({
    SuspectId: DataTypes.INTEGER,
    HospitalId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName:"HospitalReference"
  })
HospitalReference.associate = function (models) {
  // associations can be defined here
};
return HospitalReference;
};