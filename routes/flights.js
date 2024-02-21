var express = require('express');
var router = express.Router();

const flightsCtrl = require('../controllers/flights');

/* GET users listing. */
router.get('/new', flightsCtrl.new);

// POST 
router.post('/', flightsCtrl.create);

// GET FOR THE FLIGHTS
router.get('/', flightsCtrl.index);

module.exports = router;
