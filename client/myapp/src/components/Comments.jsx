import React from 'react'
import Comment from './Comment';
import './comments.scss'

const Comments = () => {
  return (
    <div className="container">
      <div className="new-comment">
        <img
          className="avatar"
          alt=""
          src="https://images.pexels.com/photos/4350178/pexels-photo-4350178.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
        <input placeholder="Add a comment..." />
        <button>Submit</button>
      </div>
      <Comment />
      <Comment />
    </div>
  );
}

export default Comments