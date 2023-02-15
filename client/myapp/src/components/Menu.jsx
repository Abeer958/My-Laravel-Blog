import React, { useEffect, useState } from 'react'
import './menu.scss'
import axios from 'axios'

const Menu = () => {
  // const [posts, setPosts] = useState([])

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await axios.get('http://127.0.0.1:8000/api/posts')
  //       setPosts(res.data)
  //     } catch(err) {
  //       console.log(err)
  //     }
  //   }
  //   fetchData();
  // }, [])
    const posts = [
        {
          id: 1,
          title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          img: "https://images.pexels.com/photos/1918290/pexels-photo-1918290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
          id: 2,
          title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          img: "https://images.pexels.com/photos/5716296/pexels-photo-5716296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
      ]
  return (
    <div className='menu'>
        <h1>Other posts you may like</h1>
        {posts.map(post=>(
            <div className="post" key={post.id}>
                <img src={post.img} alt="" />
                <h2>{post.title}</h2>
                <button>Read more</button>
            </div>
        ))}
    </div>
  )
}

export default Menu