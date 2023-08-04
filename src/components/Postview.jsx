import React from 'react';
import '../components/basic/Postview.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Postlist from './Postlist';
import Header from './Header';
// import axios from 'axios';
const Postview=()=> {
  const [data,useData] = useState([])
  

  useEffect(() => {const GetData = async() => {
    let response = await fetch(`http://localhost:5000/api/v1/posts`,{
      // let response = await fetch(`https://insta-clone-be-dnyanesh.herokuapp.com/api/v1/posts`,{
      method:'GET',
      mode:'cors',
      headers:{
        'Access-Control-Allow-Origin':'*',
        "Access-Control-Allow-Credentials" : true 
      }
    });
    let acutalData = await response.json();
    console.log(acutalData);
    useData(acutalData);
  }
  GetData()}, []);
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5000/api/v1/posts")
  //     .then((res) => {
  //       usedata(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
  
  console.log(data);
  
  return (
    <div className="site-container">
    <Header/>
      
        
    {data.map((element , id) => {
        return (
          <Postlist
            key={id}
            author = {element.author}
            location = {element.location}
            likes = {element.likes}
            description = {element.description}
            image= {element.image}
            date = {element.date}
          />
        )
      })}
    </div>
  );
}
export default Postview;