import React, { useEffect, useState } from 'react';
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from 'react-icons/ai'
import profilePic from '../assets/profile.jpeg';
import '../styles/App.css'

function App() {
  const [iconSize, setIconSize] = useState(45)

  useEffect(() => {
    if (window.innerWidth <= 400) {
      setIconSize(30)
    }
  }, [])
  
  return (
    <div className='container'>
      <img src={profilePic} className='profilPicture' alt="Vitor's profile" />
      <h1><b>Vitor Risso </b></h1>

      <div className='contactMe'>
        <div className='linkedin contact'>
          <a href='https://linkedin.com/in/vitor-risso' target='_blank' rel='noreferrer'> <AiFillLinkedin size={iconSize} className='icon' /> LinkedIn</a>
        </div>

        <div className='github contact'>
          <a href='https://github.com/vitor-risso' target='_blank' rel='noreferrer'> <AiFillGithub size={iconSize} className='icon' /> Github </a>
        </div>

        <div className='maiil contact'>
          <a href='mailto:contato.vitorrisso@gmail.com' target='_blank' rel='noreferrer'> <AiOutlineMail size={iconSize} className='icon' /> Email </a>
        </div>
      </div>
    </div>
  );
}

export default App;
