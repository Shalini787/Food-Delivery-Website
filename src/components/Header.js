import React, { useEffect } from 'react'
import {} from "@mui/material"
import { BarChart, SearchRounded, ShoppingCartRounded } from '@mui/icons-material'

function Header() {
  useEffect(()=>{
    const toggleMenuu=document.querySelector(".toggleMenu");
    toggleMenuu.addEventListener('click',()=>{
      document.querySelector('.rightMenu').classList.toggle("active");
    })
  },[]);
  return (
    <header>
        <img src="https://firebasestorage.googleapis.com/v0/b/restaurantapp-d490b.appspot.com/o/Images%2Flogo2.jpg?alt=media&token=e8cbbcb2-b90a-4d28-8235-5aecc6f8f5de&_gl=1*16ycpyi*_ga*MTgzODU2MDg1LjE2OTY2NjE5OTk.*_ga_CW55HF8NVT*MTY5NzQzODM5Mi40LjEuMTY5NzQzODg4OC4zNi4wLjA." alt="" className='logo'/>
        <div className="inputBox">
        <SearchRounded className="searchIcon"/>
        <input type="text" placeholder="Search" />  
        </div>

        <div className="shoppingCart">
          <ShoppingCartRounded className='cart'/>
          <div className="cart_content">
            <p>3</p>
          </div>
        </div>

        <div className="profileContainer">
          <div className="imgBox">
            <img src="https://firebasestorage.googleapis.com/v0/b/restaurantapp-d490b.appspot.com/o/Images%2Fprofile.jpg?alt=media&token=69d0383c-2bec-4db8-b65e-efa28e558fe6&_gl=1*13wsuk8*_ga*MTgzODU2MDg1LjE2OTY2NjE5OTk.*_ga_CW55HF8NVT*MTY5NzQ0MjYwOC41LjEuMTY5NzQ0MjYyOS4zOS4wLjA." alt="" className='profilePic'/>
          </div>
          <h2 className="userName">Shalini</h2>
        </div>

        <div className="toggleMenu">
          <BarChart className='toggleIcon'/>
        </div>
    </header>
  );
}

export default Header;