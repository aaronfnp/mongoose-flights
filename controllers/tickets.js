const Flight = require('../models/flight');

module.exports = {
    create,
    show
}

async function create(req, res) {
    await Ticket.create(req.body);
    res.redirect(`/flights/${flight._id}`);
    // res.redirect(`/flights/${req.body.flight}`)
}

async function show(req, res) {
    const flight = req.params.id;
    res.render('tickets/new', {flight, errorMsg: ''});
}