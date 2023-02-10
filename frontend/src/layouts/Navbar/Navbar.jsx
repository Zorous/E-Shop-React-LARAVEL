import React from 'react'
import {Link, Outlet} from "react-router-dom";
import Banner from '../banner/Banner';

function Navbar() {
  return (
   <>
         <div className="banner_bg_main">
         <div className="container">
            <div className="header_section_top">
               <div className="row">
                  <div className="col-sm-12">
                     <div className="custom_menu">
                        <ul>
                           <li><a href="www.google.com">Best Sellers</a></li>
                           <li><a href="www.google.com"></a></li>
                           <li><a href="www.google.com">Nouveautés</a></li>
                           <li><a href="www.google.com">Today's Deals</a></li>
                           <li><a href="www.google.com">Customer Service</a></li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="logo_section">
            <div className="container">
               <div className="row">
                  <div className="col-sm-12">
                     <div className="logo"><a href="index.html"><img  alt="png" src="/assets/images/logo.png" /></a></div>
                  </div>
               </div>
            </div>
         </div>
         <div className="header_section">
            <div className="container">
               <div className="containt_main">
                  <div id="mySidenav" className="sidenav">
                     <button className="closebtn" onclick="closeNav()">&times;</button>
                     <a href="index.html">Home</a>
                     <a href="fashion.html">Fashion</a>
                     <a href="electronic.html">Electronic</a>
                     <a href="jewellery.html">Jewellery</a>
                  </div>
                  <span className="toggle_icon" onclick="openNav()"><img  alt="png" src="/assets/images/toggle-icon.png" /></span>
                  <div className="dropdown">
                     <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">All Category 
                     </button>
                     <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="www.google.com">Action</a>
                        <a className="dropdown-item" href="www.google.com">Another action</a>
                        <a className="dropdown-item" href="www.google.com">Something else here</a>
                     </div>
                  </div>
                  <div className="main">
                     <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search this blog" />
                        <div className="input-group-append">
                           <button className="btn btn-secondary" type="button" style={{backgroundColor: "#f26522", borderColor:"#f26522"}}>
                           <i className="fa fa-search"></i>
                           </button>
                        </div>
                     </div>
                  </div>
                  <div className="header_box">
                     <div className="lang_box ">
                        <a href="www.google.com" title="Language" className="nav-link" data-toggle="dropdown" aria-expanded="true">
                        <img  alt="png" src="/assets/images/flag-uk.png"  className="mr-2 " title="United Kingdom" /> English <i className="fa fa-angle-down ml-2" aria-hidden="true"></i>
                        </a>
                        <div className="dropdown-menu ">
                           <a href="www.google.com" className="dropdown-item">
                           <img  src="/assets/images/flag-france.png" className="mr-2" alt="png"  />
                           French
                           </a>
                        </div>
                     </div>
                     <div className="login_menu">
                        <ul>
                           <li><a href="www.google.com">
                              <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                              <span className="padding_10">Cart</span></a>
                           </li>
                           <li><a href="www.google.com">
                              <i className="fa fa-user" aria-hidden="true"></i>
                              <span className="padding_10">Cart</span></a>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="banner_section layout_padding">
            <div className="container">
               <div id="my_slider" className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner">
                     <div className="carousel-item active">
                        <div className="row">
                           <div className="col-sm-12">
                              <h1 className="banner_taital">Get Start <br/>Your favriot shoping</h1>
                              <div className="buynow_bt"><a href="www.google.com">Buy Now</a></div>
                           </div>
                        </div>
                     </div>
                     <div className="carousel-item">
                        <div className="row">
                           <div className="col-sm-12">
                              <h1 className="banner_taital">Get Start <br/>Your favriot shoping</h1>
                              <div className="buynow_bt"><a href="www.google.com">Buy Now</a></div>
                           </div>
                        </div>
                     </div>
                     <div className="carousel-item">
                        <div className="row">
                           <div className="col-sm-12">
                              <h1 className="banner_taital">Get Start <br/>Your favriot shoping</h1>
                              <div className="buynow_bt"><a href="www.google.com">Buy Now</a></div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <a className="carousel-control-prev" href="#my_slider" role="button" data-slide="prev">
                  <i className="fa fa-angle-left"></i>
                  </a>
                  <a className="carousel-control-next" href="#my_slider" role="button" data-slide="next">
                  <i className="fa fa-angle-right"></i>
                  </a>
               </div>
            </div>
         </div>
         </div>
<Outlet />
</> 
  )
}

export default Navbar