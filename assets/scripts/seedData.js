// scripts/seedData.js
const mongoose = require('mongoose');
const config = require('../../config/mongoose');
const GoldItem = require('../../models/goldItem');

(async () => {
  try {
    // Connect to MongoDB
    // await mongoose.connect(config.mongoUri, {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    // });


    // Remove existing data
    await GoldItem.deleteMany();

    // Seed sample data
    const sampleData = [
      { name: 'Gold Necklace0', grams: 10, price: 0 },
      { name: 'Gold Ring0', grams: 5, price: 0 },
      { name: 'Gold Bracelet0', grams: 8, price: 0 },
      { name: 'Gold Necklace1', grams: 10, price: 0 },
      { name: 'Gold Ring1', grams: 5, price: 0 },
      { name: 'Gold Bracelet1', grams: 8, price: 0 },
    ];

    await GoldItem.insertMany(sampleData);

    console.log('Sample data seeded successfully');
    process.exit(0);
  } catch (error) {
    console.error('An error occurred:', error.message);
    process.exit(1);
  }
})();
