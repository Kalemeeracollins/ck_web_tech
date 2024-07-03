// components/VideoPlayer.js

const VideoPlayer = () => {
    return (
      <div className="video-container">
        <video className="video" controls>
          <source src="/marketing.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  };
  
  export default VideoPlayer;
  