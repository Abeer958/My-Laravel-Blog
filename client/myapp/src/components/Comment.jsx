import React from 'react'
import './comment.scss'

const Comment = () => {
  return (
    <div className="comment">
      <img
        className="avatar"
        src="https://images.pexels.com/photos/2709388/pexels-photo-2709388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt=""
      />
      <div className="details">
        <span className="name">
          Jose Murino <span className="date"> 3 days ago</span>
        </span>
        <div className="desc">
          Fantastic! Looking forward to part 2 for connecting to a DB and making
          it dynamic! Subscribed.
        </div>
      </div>
    </div>
  );
}

export default Comment