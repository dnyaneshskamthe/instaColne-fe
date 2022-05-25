import React from 'react'
import './Postview.css';
export default function Post(props) {
  const dt=new Date();
  let day=dt.getDate();
  let mon=dt.getMonth();
  let yr=dt.getFullYear();
  const months=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
  return (
    <div className="post-wrapper">
      <div className="names">
        <span> {props.author}</span>
        <span> {props.location}</span>
      </div>
      <div className="imag">
      <input id='postimage' type='image' img src={props.image} alt='photo'/>
      </div>
      <div className='button_unit'>
      <div className="btns">
      <input class="likebtn" type='image' img src={"./images/like.png"} alt='photo'/>
      <input class="sharebtn"type='image' img src={"./images/share.png"} alt='photo' /></div>
      <div><span>{`${day}-${months[mon]}-${yr}`}</span></div>
      
      </div>
      <div className="likes">
        <span>{props.likes} likes</span>
      </div>
      <div className="description">
        <span>{props.description}</span>
      </div>
    </div>
  )
}
