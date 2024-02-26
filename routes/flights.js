var express = require('express');
var router = express.Router();

const flightsCtrl = require('../controllers/flights');

// GET FOR THE FLIGHTS
router.get('/', flightsCtrl.index);

/* GET users listing. */
router.get('/new', flightsCtrl.new);

// GET FOR SHOW
router.get('/:id', flightsCtrl.show);

// POST 
router.post('/', flightsCtrl.create);

module.exports = router;
