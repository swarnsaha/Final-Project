const videos = require('../utils/videos');

exports.getAddVideoForm = (req, res) => {
  if (req.session.user) {
    res.render('add_video');
  } else {
    res.redirect('/auth/login');
  }
};

exports.addNewVideo = (req, res) => {
  if (req.session.user) {
    const { url, title } = req.body;
    if (url && title) {
      videos.addVideo(req.session.user.email, url, title);
      res.render('add_video', { message: 'Video added successfully.' });
    } else {
      res.render('add_video', { error: 'Please fill in all fields.' });
    }
  } else {
    res.redirect('/auth/login');
  }
};

exports.getVideoDashboard = (req, res) => {
  if (req.session.user) {
    const filter = req.params.videofilter;
    let filteredVideos = [];
    if (filter === 'all') {
      filteredVideos = videos.getVideos();
    } else if (filter === 'my') {
      filteredVideos = videos.getVideosByEmail(req.session.user.email);
    } else {
      filteredVideos = videos.getVideos();
    }
    res.render('dashboard', { videos: filteredVideos });
  } else {
    res.redirect('/auth/login');
  }
};
