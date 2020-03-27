'use strict';

let data = require('../data/data');

data = data.map(obj => {
  return {
    species: obj.species,
    price: obj.price,
    gender: obj.gender,
    weight: obj.weight,
    birth_date: obj.birth_date,
    color: obj.color,
    breed: obj.breed,
    image: `public/img/image_${obj.id}.jpg`,
    is_sterile: obj.is_sterile,
    hair: obj.hair,
    description: obj.description,
    createdAt: new Date(),
    updatedAt: new Date(),
  }
});

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Pets', data);
},
  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Pets', null, {});
  }
};