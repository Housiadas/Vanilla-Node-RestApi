const products = require('../data/products.json');

function findAll() {
  //return promise because fetching promise
  return new Promise((resolve, reject) => {
    resolve(products)
  })
}

module.exports = {
  findAll
}