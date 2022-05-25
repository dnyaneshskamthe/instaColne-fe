import './LandingPage.css'
import PostView from './Postview'
import { Link } from "react-router-dom";



const LandingPage=()=>{
    return (
       
            
       <div className="landing-container">
            <div className="image-container" >
                <input type="image" img="true" src="./images/page1.png" alt='photo' />
            </div>
            <div className="text">
                <h1>InstaClone-Dnyanesh</h1>
                
                    
                <Link to='/PostView'><button className='btn'>Enter</button></Link>
                
                
            </div>
            
         
        
        </div>
       
        
    )
}

export default LandingPage;