import React, { useEffect, useState, useContext } from 'react'
import { Link, useLocation, useNavigate} from 'react-router-dom'
import axios from 'axios'
import Menu from '../components/Menu'
import Edit from '../img/edit.png'
import Delete from '../img/delete.png'
import './single.scss'

const Single = () => {
  // const [post, setPost] = useState({})
  // const location = useLocation()
  // const navigate = useNavigate()
  // const postId = location.pathname.split("/")[2]
  // const { currentUser } = useContext(AuthContext)

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await axios.get(`${process.env.REACT_APP_API}/posts/${postId}`)
  //       setPost(res.data)
  //     } catch(err) {
  //       console.log(err)
  //     }
  //   }
    
  //   fetchData();
  // }, [postId])

  // const handleDelete = async() => {
  //   try {
  //     await axios.delete(`${process.env.REACT_APP_API}/posts/${postId}`, {
  //       withCredentials: true,
  //     })
  //     navigate("/")
  //   } catch(err) {
  //     console.log(err)
  //   }
  // }

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }
  
  return (
    <div className='single'>
      <div className="content">
        <img src="https://images.pexels.com/photos/13374931/pexels-photo-13374931.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <div className="user">
          <img src="https://images.pexels.com/photos/7676185/pexels-photo-7676185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
          <div className="info">
            <span>Abeer</span>
            <p>Posted 2 seconds ago</p>
          </div>
          <div className="edit">
          <Link to='/write'>
            <img src={Edit} alt="" />
          </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
     </p>   
        </div>
      <Menu />
    </div>
  )
}
export default Single