import React, { useState } from 'react';

const Window = () => {
  const [meaning, setMeaning] = useState('');
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleSaveComment = () => {
    setComments([...comments, newComment]);
    setNewComment('');
  };

  const date = new Date().toLocaleDateString(); 

  return (
    <div className="window">
      <div className="window-content">
        <h3>{date}</h3>
        <p>{meaning}</p>
        <p>Tu comentario</p>
        <div
          className="comment-input"
          contentEditable="true"
          onInput={(e) => setNewComment(e.target.textContent)}
        ></div>
        <button onClick={handleSaveComment}>Guardar comentario</button>
      </div>

      {comments.map((comment, index) => (
        <div className="window" key={index}>
          <div className="window-content">
            <h3>{date}</h3>
            <p>{meaning}</p>
            <p>{comment}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Window;
