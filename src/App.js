import React from 'react'
import CreatePosts from './components/CreatePosts'
import LandingPage from './components/LandingPage'
import PostView from './components/Postview'
import { Routes, Route } from "react-router-dom"
import Login from './components/logins/Login'
import Register from './components/logins/Register'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <LandingPage/> } />
        <Route path="/postview" element={ <PostView/> } />
        <Route path="/create" element={ <CreatePosts/> } />
        <Route path="/postview/CreatePosts" element={ <CreatePosts/> } />
        <Route path = "/login" element= {<Login/>} />
        <Route path = "/register" element= {<Register/>} />
      </Routes>
    </div>
   
  )
}

export default App