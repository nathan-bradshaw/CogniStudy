//Whiteboard.js
import React, { useState } from 'react';
import Draggable from 'react-draggable'
import "../styles/Whiteboard.css"

const Whiteboard = () => {
    const [text, setText] = useState('');

    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    return (
      <Draggable handle=".handle" bounds="body">
        <div className="whiteboard-container">
          <h2 className="handle">Whiteboard</h2>
          <textarea
            value={text}
            onChange={handleTextChange}
            placeholder="Write something..."
          ></textarea>
        </div>
      </Draggable>
    );
};

export default Whiteboard;