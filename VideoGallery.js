const { useState } = React;

const VideoGallery = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState('');

  const videos = [
    { title: 'iPhone 16Pro', url: 'https://www.apple.com/105/media/ww/iphone/family/2024/cf19f185-dd7e-4350-97ff-e44860713b54/anim/welcome-01/medium.mp4' },
    { title: 'iPhone 16', url: 'https://www.apple.com/105/media/us/iphone-16/2024/3bd53bf6-27ee-4633-bd00-597a4ec4bf1b/anim/highlights-apple-intelligence/medium.mp4' },
    { title: 'IPhone 15', url: 'https://www.apple.com/newsroom/videos/iphone-15-pro-action-button/large_2x.mp4' },
    { title: 'IPhone 15Pro', url: 'https://www.apple.com/newsroom/videos/iphone-15-pro-camera-optical-zoom/large_2x.mp4' },
    { title: 'IPhone 14', url: 'https://www.apple.com/newsroom/videos/iphone-14-pro-3up/large_2x.mp4' },
    { title: 'IPhone 14Pro', url: 'https://www.apple.com/newsroom/videos/iphone-14-photonic-engine/large_2x.mp4' },
  ];

  const openModal = (videoUrl) => {
    setCurrentVideo(videoUrl);
    setModalOpen(true);
  };

  const closeModal = () => {
    setCurrentVideo('');
    setModalOpen(false);
  };

  return (
    <div className="container my-4">
      <h1 className="text-center mb-3 text-light fs-3">Galería de Videos</h1>
      <div className="row">
        {videos.map((video, index) => (
          <div key={index} className="col-md-4 col-sm-6 col-12 text-center mb-3">
            <div className="p-2  bg-dark rounded mx-1">
              <h5 className="mb-3  text-light">{video.title}</h5>
              <button
                className="btn btn-outline-light"
                onClick={() => openModal(video.url)}
              >
                Reproducir
              </button>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <VideoModal
          isOpen={isModalOpen}
          videoUrl={currentVideo}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

// Haz que VideoGallery esté disponible globalmente
window.VideoGallery = VideoGallery;

  