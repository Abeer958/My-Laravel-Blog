import React from 'react'
import Logo from '../img/logo.png'
import './footer.scss'

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="" />
      <span>©2023 AbeersBlog.com | A Vortex of Insight</span>
    </footer>
  )
}

export default Footer