import React, { useEffect, useState} from "react";
import { Link, useLocation} from "react-router-dom";
import axios from "axios";
import Menu from "../components/Menu";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import "./single.scss";
import Comments from "../components/Comments";

const Single = () => {
  const [post, setPost] = useState({})
  const location = useLocation()
  const postId = location.pathname.split("/")[2];
  console.log(postId)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://127.0.0.1:8000/api/posts/${postId}`
        );
        setPost(res.data)
      } catch(err) {
        console.log(err)
      }
    }

    fetchData();
  }, [postId])

  return (
    <div className="single">
      <div className="content">
        <img
          src={post.img}
          alt=""
          className="single-page-img"
        />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/7676185/pexels-photo-7676185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className="single-page-img"
          />
          <div className="info">
            <span>Abeer</span>
            <p>Posted 2 seconds ago</p>
          </div>
          <div className="edit">
            <Link to="/write">
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
        <Comments />
      </div>

      <Menu />
    </div>
  );
};
export default Single;
