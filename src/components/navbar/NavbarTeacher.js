import React, {useState} from 'react';
import { Link } from "react-router-dom";

const NavbarTeacher = () => {
  
    const [navbar,setNavbar] = useState(false);
    const [menu,setMenu] = useState(false);
  
    const scrollfunc = () => {
      if(window.scrollY > 0){
        setNavbar(true)
      }else{
        setNavbar(false)
      }
    }
  
    const Menufunc = () => {
      if(menu){
        setMenu(false)
      }else{
        setMenu(true)
      }
    }
  
    document.addEventListener('scroll', scrollfunc);
  
    return (
      <nav className= {navbar ? "active" : ""}>
          <div className='logo'>Logo</div>
          <div className='ham-menu' onClick={Menufunc}>Menu</div>
          <div className={ menu ? " links-container active" : "links-container"}>
              <Link onClick={Menufunc} className= "links" to="/">Violininsts</Link>
              <a onClick={Menufunc} className= "links" href="#me">Me</a>
              <a onClick={Menufunc} className= "links" href="#service">Services</a>
              <a onClick={Menufunc} className= "links" href="#about-mes">About Me</a>
              <a onClick={Menufunc} className= "links" href="#feedback">Feedback</a>
              <a onClick={Menufunc} className= "links" href="#contact">Contact</a>
          </div>
  
      </nav>
    )
}

export default NavbarTeacher