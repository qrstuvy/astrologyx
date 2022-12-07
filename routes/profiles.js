const express = require('express');
const router = express.Router();
const profilesCtrl = require('../controllers/profiles');


router.post('/:id', profilesCtrl.create);
router.get('/:id', profilesCtrl.index)

module.exports = router;