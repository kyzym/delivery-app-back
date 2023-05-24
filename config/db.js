const { DB_HOST } = process.env;
const mongoose = require('mongoose').set('strictQuery', true);
require('colors');

const connectDb = async () => {
  try {
    const db = await mongoose.connect(DB_HOST);
    console.log(`connected to DB: ${db.connection.name}`.bgGreen);
  } catch (error) {
    console.log(`${error}`.bgRed);
    process.exit(1);
  }
};

module.exports = connectDb;
