const VideoModal = ({ isOpen, videoUrl, onClose }) => {
    if (!isOpen) return null;
  
    return (
      <div
        className="modal show d-block"
        tabIndex="-1"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content bg-dark">
              <button
                type="button"
                className="btn-close bg-white m-2"
                onClick={onClose}
              ></button>
            <div className="modal-body">
              <video
                src={videoUrl}
                controls
                autoPlay
                style={{ width: '100%' }}
              ></video>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  window.VideoModal = VideoModal;
  
