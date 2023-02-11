import React, { useState } from 'react';
import '../styles/Navbar.css'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBookAlt } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { BiMessageSquareDots } from 'react-icons/bi';

function Navbar() {
  const [isActive, setisActive] = useState('#');

  return (
    <nav>
      <a href= "#" onClick = {()=>setisActive("#")} className = {isActive === "#"? "active": ""}><AiOutlineHome/></a>
      <a href="#about" onClick = {()=> setisActive("#about")} className = {isActive === "#about"? 'active': ''}><AiOutlineUser/></a>
      <a href="#experience" onClick = {()=> setisActive('#experience')} className = {isActive === '#experience'? 'active': ''}><BiBookAlt/></a>
      <a href= "#projectList" onClick = {() => setisActive("#projectList")} className = {isActive === "#projectList"? "active": ""}><RiServiceLine/></a>
      <a href= "#contact" onClick = {()=> setisActive('#contact')} className = {isActive === '#contact'? 'active': ''}><BiMessageSquareDots/></a>
    </nav>
  )
}

export default Navbar