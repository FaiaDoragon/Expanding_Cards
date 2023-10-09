const { Router } = require('express');
const { pageGet } = require('../controllers/server');

const router = Router()

router.get('/', pageGet);

module.exports = router;