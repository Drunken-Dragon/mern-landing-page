const express = require('express');
const router = express.Router();
const Lead = require('../../../models/Lead');

// @route   GET api/leads
// @desc    Get all leads
// @access  Public
router.get('/', (request, response) => {
    Lead.find()
        .then(leads => response.json(leads))
});

// @route   POST api/leads
// @desc    Add a new lead
// @access  Public
router.post('/', (request, response) => {
    const newLead = new Lead({
        firstName: request.body.firstName,
        lastName: request.body.lastName,
        email: request.body.email,
        eventDate: request.body.eventDate
    });

    newLead.save().then(lead => response.json(lead));
});

// @route   DELETE api/leads/:id
// @desc    Remove a new lead
// @access  Public
router.delete('/:id', (request, response) => {
    Lead.findById(request.params.id)
        .then(lead => lead.remove()
        .then(() => response.json({"Status":"Successfully deleted"})))
        .catch(error => response.status(404).json({"Status":"Id not found"}))
});

module.exports = router;