import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom'; // For redirection
// import {useHistory} from 'react-router-dom'
// import {useNavigate} from 'react-router-dom';
import Header from "./Header";
import "../components/basic/CreatePosts.css";
const  CreatePosts =()=> {
  const authorRef = useRef(null);
  const locationRef = useRef(null);
  const descriptionRef = useRef(null);
  const fileRef = useRef(null);
  const navigate = useNavigate(); // Used for redirection

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Get the values from the refs
    const author = authorRef.current.value;
    const location = locationRef.current.value;
    const description = descriptionRef.current.value;
    const file = fileRef.current.files[0]; 
    const formData = new FormData();
    formData.append('author', author);
    formData.append('location', location);
    formData.append('description', description);
    if (file) {
      formData.append('image', file);
    }

    try {
      // Make the API call to submit the form data
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/posts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
         body: formData,
      });

      if (response.ok) {
        // Redirect to the PostView page upon successful submission
        navigate('/PostView'); // Update '/PostView' with the correct route
      } else {
        // Handle submission error here, if needed
      }
    } catch (error) {
      // Handle any network or other errors here
    }
  };

  
  //   window.location.href.substring(0, window.location.href.length - 6) +
  //   "PostView";
  // console.log(redirectURL);
  // // const history=useHistory();
  // // const navigate = useNavigate();
  // const [user, setUser] = useState({
  //   image: "",
  //   author: "",
  //   location: "",
  //   description: "",
  // });
  // let uname, value;
  // const handleInputs = (e) => {
  //   console.log(e);
  //   uname = e.target.name;
  //   value = e.target.value;

  //   setUser({ ...user, [uname]: value });
  // };
  // // const handleSubmit=async (e)=>{
  // //     e.preventDefault();
  // //     const {image,author,location,description}=user;
  // //     const res=await fetch('/api/v1/posts',{
  // //         method:"POST",
  // //         headers:{
  // //             "Content-Type":"applicaion/json"
  // //         },
  // //         body:JSON.stringify({
  // //             image,author,location,description
  // //         })
  // //     });
  // //     const data=await res.json();
  // //     if(!data){
  // //         window.alert('Failed to post');
  // //     }
  // //     else{
  // //         window.alert('Post successfully');
  // //         navigate("/LandingPage");
  // //     }

  return (
    <div className="wrapper">
      <Header />
      <div className="createpost">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="author"
            ref={authorRef}
            placeholder="Author"
          />
          <input
            type="text"
            name="location"
            ref={locationRef}
            placeholder="Location"
          />
          <br />
          <br />
          <input
            type="text"
            name="description"
            ref={descriptionRef}
            placeholder="Description"
          />
          <br />
          <br />
          <input
            type="file"
            name="image"
            ref={fileRef}
            accept="image/*"
          />
          <br />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default CreatePosts;
