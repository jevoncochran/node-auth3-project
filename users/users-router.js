const express = require('express');
const router = express.Router();
const restricted = require('../auth/restrictedMiddleware');

const users = require('./users-model');

router.get('/', restricted, (req, res) => {
    users.find()
        .then(users => {
            res.status(200).json(users);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ errorMessage: 'unable to retrieve users' });
        })
})

module.exports = router;