const express = require('express');
const router = express.Router();
const contentController = require('../controllers/content.controller');
const { verifyToken, isTeacher, isPrincipal } = require('../middlewares/auth.middleware');
const upload = require('../middlewares/upload.middleware');

router.post('/upload', verifyToken, isTeacher, upload.single('file'), contentController.uploadContent);

router.patch('/review/:id', verifyToken, isPrincipal, contentController.reviewContent);

module.exports = router;