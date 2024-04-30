import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from './components/Authentication/LogIn';
import SignUp from './components/Authentication/SignUp';
import Navbar from './components/NavBar/Navbar';
import HomePage from './components/HomePage/HomePage';
import Community from './components/Community/Community';
import About from './components/About/About';
import Profile from './components/Profile/Profile'
import Project from './components/Project/Project';
import UploadProject from './components/ProjectUpload/UploadProject';
import EditProfile from './components/Profile/EditProfile';


function App() {
  // const [count, setCount] = useState(0)

  return (
      <>
        <div className="super-nav-bar">
          <Navbar/>
        </div>  
        <Routes>
          <Route path='/' element={<><HomePage /></>} />
          <Route path='/community' element={<Community />} />
          <Route path='/about' element={<About/>}/>
          <Route path='/profile/:userId' element={<Profile/>}/>
          <Route path='/log_in' element={<LogIn/>}/>
          <Route path='/sign_up' element={<SignUp/>}/>
          <Route path='/project/:projectId' element={<Project/>}/>
          <Route path='/upload' element={<UploadProject/>}/> 
          <Route path='/profile/:userId/edit' element={<EditProfile/>}/> 
        </Routes>
      </>

  )
}

export default App
