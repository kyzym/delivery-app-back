const loadShopsData = async () => {
  try {
    await Shop.deleteMany();

    const shopsData = require('./shops.json');

    await Shop.insertMany(shopsData);
    console.log('Data loaded successfully');
  } catch (error) {
    console.log('Error loading data:', error);
  }
};
