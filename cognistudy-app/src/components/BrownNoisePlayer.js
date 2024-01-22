// BrownNoisePlayer.js
import React from 'react';
import "../styles/BrownNoisePlayer.css";
import Draggable from 'react-draggable';

const BrownNoisePlayer = () => {
  const videoId = 'RqzGzwTY-6w';

  return (
    <Draggable handle=".handle" bounds="body">
      <div className="brown-noise-container">
        <h2 className="handle">Brown Noise Player</h2>
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&loop=1&rel=0`}
          title="Brown Noise Player"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </Draggable>
  );
};

export default BrownNoisePlayer;
