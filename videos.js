const videos = [];

exports.addVideo = (email, url, title) => {
  videos.push({ email, url, title });
};

exports.getVideos = () => {
  return videos;
};

exports.getVideosByEmail = (email) => {
  return videos.filter((video) => video.email === email);
};
