import React, { useState } from 'react';
import './Comment.css'

const Comment = () => {
  const [comment, setComment] = useState('');

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  return (
    <div>
      <textarea className='comment-box'
        placeholder="¿Cómo me hace sentir esta predicción?"
        value={comment}
        onChange={handleChange}
      />
    </div>
  );
};

export default Comment;