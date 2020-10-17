let products = require('../data/products.json');
const { v4: uuidv4 } = require('uuid');
const { writeDataToFile } = require("../utils");

function findAll() {
  //return promise because fetching data
  return new Promise((resolve, reject) => {
    resolve(products)
  })
}

function findById(id) {
  //return promise because fetching data
  return new Promise((resolve, reject) => {
    const product = products.find((p) => p.id === id);
    resolve(product);
  })
}

function create(product) {
  //return promise because fetching data
  return new Promise((resolve, reject) => {
    const newProduct = { id: uuidv4(), ...product };
    products.push(newProduct);
    writeDataToFile('./data/products.json', products);
    resolve(newProduct)

  })
}

function update(id, product) {
  //return promise because fetching data
  return new Promise((resolve, reject) => {
    const index = products.findIndex((p) => p.id === id);
    products[index] = {
      id,
      ...product
    }
    writeDataToFile('./data/products.json', products);
    resolve(products[index])

  })
}

function remove(id) {
  //return promise because fetching data
  return new Promise((resolve, reject) => {
    products = products.filter((p) => p.id !== id)
    writeDataToFile('./data/products.json', products);
    resolve()

  })
}


module.exports = {
  findAll,
  findById,
  create,
  update,
  remove
}