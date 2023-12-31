const express = require('express');
const router = express.Router();
const goldController = require('../controllers/goldItemController');

router.get('/mockprice', goldController.generateRandomGoldPrice);
router.get('/data', goldController.fetchData);
router.get('/update', goldController.updateGoldItemPrice);

module.exports = router;