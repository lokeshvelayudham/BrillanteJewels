const GoldItem = require('../models/goldItem');
const { all } = require('../routes/api');



module.exports.generateRandomGoldPrice = (req, res) => {
    const minPrice = 40; // Minimum gold price
    const maxPrice = 60; // Maximum gold price
    const randomPrice = Math.random() * (maxPrice - minPrice) + minPrice;
    return res.json({ price: randomPrice });
    
  };

module.exports.fetchData = async(req, res) =>{
  try{
    const allData = await GoldItem.find();
    console.log(allData);
    res.json({Data: allData});
  }catch (error) {
    res.send('Error fetching data from mongodb');
  }
};


module.exports.updateGoldItemPrice = async (req, res) => {
  try {
    const minPrice = 40; // Minimum gold price
    const maxPrice = 60; // Maximum gold price
    const mockPrice = Math.random() * (maxPrice - minPrice) + minPrice;

    const items = await GoldItem.find();
    // res.json({Data: items});

    items.forEach(async (item) => {
      const updatedPrice = mockPrice * item.grams;
      item.price = updatedPrice;
      await item.save();
    });
    // res.json({data:items});

    res.json({ message: 'Gold prices updated successfully.',
              Data: items  });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while updating prices.' });
  }
};