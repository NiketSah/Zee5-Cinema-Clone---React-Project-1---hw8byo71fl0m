// src/components/VideoPlayer.js
import React from 'react';
import ReactPlayer from 'react-player';

function VideoPlayer({ videoUrl }) {
  return (
    <div>
      <ReactPlayer
        url={videoUrl}
        controls // Display video controls (play, pause, etc.)
        width="100%" // Set the video player width
        height="auto" // Adjust the height as needed
      />
    </div>
  );
}

export default VideoPlayer;
