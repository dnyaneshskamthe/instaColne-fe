import React ,{useState}from 'react'
// import {useHistory} from 'react-router-dom'
import {useNavigate} from 'react-router-dom';
import Header from './Header';
import './CreatePosts.css';
function CreatePosts() {
    const redirectURL =
    window.location.href.substring(0, window.location.href.length - 6) +"PostView";
  console.log(redirectURL);
    // const history=useHistory();
    const navigate = useNavigate();
    const [user,setUser]=useState({
        image:"", author:"",location:"",description:""
    });
    let uname,value;
    const handleInputs=(e)=>{
        console.log(e);
        uname=e.target.name;
        value=e.target.value

        setUser({...user,[uname]:value});
    }
    const handleSubmit=async (e)=>{
        e.preventDefault();
        const {image,author,location,description}=user;
        const res=await fetch('/api/v1/posts',{
            method:"POST",
            headers:{
                "Content-Type":"applicaion/json"
            },
            body:JSON.stringify({
                image,author,location,description
            })
        });
        const data=await res.json();
        if(!data){
            window.alert('Failed to post');
        }
        else{
            window.alert('Post successfully');
            navigate("/LandingPage");
        }
    }
  return (
      
    <div className="wrapper">
        <Header/>
        <div className="createpost">
        <form action="https://insta-clone-be-dnyanesh.herokuapp.com/api/v1/posts"method="post" encType='multipart/form-data'>
            <span><input type="text"name="imagefield" value={user.image}placeholder='No file chosen'/></span><span><input type="file" id="file" name="image" value={user.image} onChange={handleInputs}accept="image/*"/></span>
            <span id='ibtn'><label name='label' for='file'>Browse</label></span>
            <br/><br/>
            <input type="text" name="author" value={user.author} onChange={handleInputs}placeholder='Author'/><input type="text" name="location" value={user.location} onChange={handleInputs} placeholder='location'/>
            <br/><br/><input type='text' name='description' value={user.description} onChange={handleInputs} placeholder='description'/><br/>
            {/* <button  id='post-btn' type='submit' onClick={handleSubmit} >Post</button> */}
            <input type="text" name ="redirectURL" value={redirectURL} style={{display:"none"}} />
            <input type="submit"/>       </form></div>
    </div>
  )
}

export default CreatePosts