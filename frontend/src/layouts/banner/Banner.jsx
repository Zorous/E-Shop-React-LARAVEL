import React from 'react'

function Banner() {
  return (
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
  )
}

export default Banner