import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';
export default function() {
  return (
    <div className='header-wrapper'>
      <img src={"./images/insta.jpg"} alt='insta'></img>
      <Link to='/create'><img src={"./images/camera.png"} alt='camera'></img></Link>
    </div>
  )
}
