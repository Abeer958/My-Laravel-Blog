import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './home.scss'

const Home = () => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://127.0.0.1:8000/api/posts')
        setPosts(res.data)
      } catch(err) {
        console.log(err)
      }
    }
    fetchData();
  }, [])


  // const posts = [
  //       {
  //         id: 1,
  //         title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //         img: "https://images.pexels.com/photos/1918290/pexels-photo-1918290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  //       },
  //       {
  //         id: 2,
  //         title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //         img: "https://images.pexels.com/photos/5716296/pexels-photo-5716296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  //       },
  //       {
  //         id: 3,
  //         title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //         img: "https://images.pexels.com/photos/5361973/pexels-photo-5361973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  //       },
  //       {
  //         id: 4,
  //         title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //         img: "https://images.pexels.com/photos/13374931/pexels-photo-13374931.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  //       },
  //       {
  //         id: 5,
  //         title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //         img: "https://images.pexels.com/photos/2078126/pexels-photo-2078126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  //       }
  //     ]

  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="" />
            </div>
            <div className="content">
              <Link className="link" to={post.id}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.content}</p>
              <Link className="link" to="/post/1">
                <button>Read More</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home