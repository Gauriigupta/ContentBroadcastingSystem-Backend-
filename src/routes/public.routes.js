const express = require('express');
const router = express.Router();
const publicController = require('../controllers/public.controller');

router.get('/live/:teacherId', publicController.getLiveBroadcast);

module.exports = router;