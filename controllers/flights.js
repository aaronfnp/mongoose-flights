const Flight = require('../models/flight');

module.exports = {
    new: newFlight,
    create,
    index
}

function newFlight(req, res) {
    res.render('flights/new', { errorMsg: ''});
}

async function create(req, res) {
    // Trims white space off input airline
    req.body.airline = req.body.airline.trim();
    try {
        await Flight.create(req.body);
        res.redirect('/flights');
    } catch (err) {
        console.log(err);
        res.redirect('/flights/new');
    }
}

async function index(req, res) {
    const flights = await Flight.find({});
    res.render('flights/index', {
        flights
    })
}