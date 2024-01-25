import { AccountBalanceRounded, Chat, Favorite, HomeRounded, Settings, SummarizeRounded } from '@mui/icons-material';
import './App.css';
import Header from './components/Header';
import MenuContainer from './components/MenuContainer';
import { useEffect } from 'react';
import { useState } from 'react';
import BannerName from './components/BannerName';
import SubMenuContainer from './components/SubMenuContainer';
import MenuCard from './components/MenuCard';
import {MenuItems,Items} from './components/Data';
import ItemCard from './components/ItemCard';
import DebitCard from './components/DebitCard';
import CartItem from './components/CartItem';
import { useStateValue } from './components/StateProvider';
 
function App() {

  // Main Dish State
  const [isMainData,setMainData]= useState(Items.filter(element=>element.itemId==="burger01"))
  const [{cart},dispatch]=useStateValue();
  useEffect(()=>{
    const menuLi=document.querySelectorAll('#menu li');
    function setMenuActive(){
      // intially we are removing all active classes from li and then if we are clicking a particulare icon,it is making that li active
      menuLi.forEach(n => n.classList.remove("active"));
      this.classList.add("active");
    }
    menuLi.forEach(n =>n.addEventListener('click',setMenuActive));

    // MenuCard Active toggle
    const menuCards = document.querySelector('.rowContainer').querySelectorAll('.rowMenuCard');
    function setMenuCardActive(){
      menuCards.forEach(n => n.classList.remove("active"));
      this.classList.add("active");
    }
    menuCards.forEach((n)=> n.addEventListener('click',setMenuCardActive));
  },[isMainData]);

  // set main dish items on filter
  const setData=(itemId)=>{
    setMainData(Items.filter((element)=>element.itemId === itemId))
  }
  return (
    <div className="App">
  {/*header section*/}
  <Header/>
  {/*main container*/}
  <main>

  {/* 1. maincontainer */}
    
    <div className="mainContainer">
      {/* Banner */}
      <div className="banner">
        <BannerName name={"Shalini"} discount={"30%"} link={"#"}/>
        <img 
        src='https://firebasestorage.googleapis.com/v0/b/restaurantapp-d490b.appspot.com/o/Images%2Fdelivery.jpg?alt=media&token=a05e9471-085e-4c0a-917a-82d735b39dbc&_gl=1*j35s55*_ga*MTgzODU2MDg1LjE2OTY2NjE5OTk.*_ga_CW55HF8NVT*MTY5ODI1OTA4Mi42LjEuMTY5ODI1OTE3NC4yOS4wLjA.'
        alt=" "
        className="deliveryPic"/>
      </div> 
    </div>

    {/* dishContainer i.e main item component*/}
    <div className="dishContainer"> 
      
      {/* a) menu card */}
      <div className="menuCard">
      <SubMenuContainer name={"Menu Category"}/>
      </div>

      {/* b) row container */}
      <div className="rowContainer">
        {MenuItems && MenuItems.map((data)=>(
        <div key={data.id} onClick={()=> setData(data.itemId)}>
          <MenuCard imgSrc={data.imgSrc}
           name={data.name} 
           isActive ={data.id === 1 ? true : false}
           />
        </div>
        ))}
      </div>
      
      {/* c) dish item container */}
      <div className="dishItemContainer">
        {
          isMainData && isMainData.map(data =>(
            <ItemCard
            key={data.id}
            itemId={data.id}
            imgSrc={data.imgSrc}
            name={data.name} 
            ratings={data.ratings} 
            price={data.price}/>
            ))
          }
      </div>
    </div>

  {/* 2.rightMenu */}
  
    <div className="rightMenu">
      <div className="debitCardContainer">
        <div className="debitCard"><DebitCard/></div>
      </div>

    {!cart ? (<div>
        <img 
        src='https://firebasestorage.googleapis.com/v0/b/restaurantapp-d490b.appspot.com/o/Images%2Fyour-cart-is-empty-2161427-1815069.webp?alt=media&token=69e4c740-829f-4dd3-b6e2-cb02f821f650'/>
        </div>) : (
      <div className="cartCheckOutContainer">
          <SubMenuContainer name={"Cart Items"}/>
        <div className="cartContainer">
          <div className="cartItems">
            {
              cart && cart.map((data)=>(

                <CartItem
                key={data.id}
                itemId ={data.id}
                name={data.name}
                imgSrc={data.imgSrc}
                //  qty={'5'}
                price={data.price} />
              ))
            }
          </div>
        </div>
        <div className="totalSection">
          <h3>Total</h3>
          <p><span>Rs. </span>50</p>
        </div>
        <button className="checkOut">Check Out</button>
      </div>
    )}
    </div>
  </main>

  {/*bottom menu*/}

  <div className="bottomMenu">
    <ul id='menu'>
      {/* adding properties to our menu container */}
      {/* prettier ignore */}
      <MenuContainer link={'#'} icon={<HomeRounded/>} isHome/>
      {/* prettier ignore */}
      <MenuContainer link={'#'} icon={<Chat/>} />
      {/* prettier ignore */}
      <MenuContainer link={'#'} icon={<AccountBalanceRounded/>} />
      {/* prettier ignore */}
      <MenuContainer link={'#'} icon={<Favorite/>} />
      {/* prettier ignore */}
      <MenuContainer link={'#'} icon={<SummarizeRounded/>} />
      {/* prettier ignore */}
      <MenuContainer link={'#'} icon={<Settings/>} />
      {/* indicator is the round shape around the bottomMenu items */}
      <div className="indicator"></div>
    </ul>
  </div>
  </div>
  );
}

export default App;
