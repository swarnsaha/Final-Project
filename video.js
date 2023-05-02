const express = require('express');
const videoController = require('../controllers/videoController');
const router = express.Router();

router.get('/new_video', videoController.getAddVideoForm);
router.post('/new', videoController.addNewVideo);
router.get('/dashboard/:videofilter', videoController.getVideoDashboard);

module.exports = router;
