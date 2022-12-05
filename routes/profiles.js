const express = require('express');
const router = express.Router();
const profilesCtrl = require('../controllers/profiles');


router.post('/:id', profilesCtrl.create);


module.exports = router;