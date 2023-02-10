import React, { useEffect, useState } from 'react'
import {useDispatch , useSelector} from "react-redux";

function Familles() {
    // const dispatch = useDispatch();
    const familles = useSelector((state)=>state.familles);

    // const [famillesC,setFamillesC] = useState();

useEffect(() => {
    // setFamillesC(familles);
    console.log(familles)
    }, [familles]);

  return (
    <div>
    <div className="fashion_section">
         <div id="main_slider" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
               <div className="carousel-item active">
                  <div className="container">
                     <h1 className="fashion_taital">Man & Woman Fashion</h1>
                     <div className="fashion_section_2">
                        <div className="row">
                           <div className="col-lg-4 col-sm-4">
                              <div className="box_main">
                                 <h4 className="shirt_text">Man T -shirt</h4>
                                 <p className="price_text">Price  <span style={{color: "#262626"}}>$ 30</span></p>
                                 <div className="tshirt_img"><img  alt="png" src="/assets/images/tshirt-img.png" /></div>
                                 <div className="btn_main">
                                    <div className="buy_bt"><a href="www.google.com">Buy Now</a></div>
                                    <div className="seemore_bt"><a href="www.google.com">See More</a></div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-lg-4 col-sm-4">
                              <div className="box_main">
                                 <h4 className="shirt_text">Man -shirt</h4>
                                 <p className="price_text">Price  <span style={{color: "#262626"}}>$ 30</span></p>
                                 <div className="tshirt_img"><img  alt="png" src="/assets/images/dress-shirt-img.png" /></div>
                                 <div className="btn_main">
                                    <div className="buy_bt"><a href="www.google.com">Buy Now</a></div>
                                    <div className="seemore_bt"><a href="www.google.com">See More</a></div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-lg-4 col-sm-4">
                              <div className="box_main">
                                 <h4 className="shirt_text">Woman Scart</h4>
                                 <p className="price_text">Price  <span style={{color: "#262626"}}>$ 30</span></p>
                                 <div className="tshirt_img"><img  alt="png" src="/assets/images/women-clothes-img.png" /></div>
                                 <div className="btn_main">
                                    <div className="buy_bt"><a href="www.google.com">Buy Now</a></div>
                                    <div className="seemore_bt"><a href="www.google.com">See More</a></div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="carousel-item">
                  <div className="container">
                     <h1 className="fashion_taital">Man & Woman Fashion</h1>
                     <div className="fashion_section_2">
                        <div className="row">
                           <div className="col-lg-4 col-sm-4">
                              <div className="box_main">
                                 <h4 className="shirt_text">Man T -shirt</h4>
                                 <p className="price_text">Price  <span style={{color: "#262626"}}>$ 30</span></p>
                                 <div className="tshirt_img"><img  alt="png" src="/assets/images/tshirt-img.png" /></div>
                                 <div className="btn_main">
                                    <div className="buy_bt"><a href="www.google.com">Buy Now</a></div>
                                    <div className="seemore_bt"><a href="www.google.com">See More</a></div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-lg-4 col-sm-4">
                              <div className="box_main">
                                 <h4 className="shirt_text">Man -shirt</h4>
                                 <p className="price_text">Price  <span style={{color: "#262626"}}>$ 30</span></p>
                                 <div className="tshirt_img"><img  alt="png" src="/assets/images/dress-shirt-img.png" /></div>
                                 <div className="btn_main">
                                    <div className="buy_bt"><a href="www.google.com">Buy Now</a></div>
                                    <div className="seemore_bt"><a href="www.google.com">See More</a></div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-lg-4 col-sm-4">
                              <div className="box_main">
                                 <h4 className="shirt_text">Woman Scart</h4>
                                 <p className="price_text">Price  <span style={{color: "#262626"}}>$ 30</span></p>
                                 <div className="tshirt_img"><img  alt="png" src="/assets/images/women-clothes-img.png" /></div>
                                 <div className="btn_main">
                                    <div className="buy_bt"><a href="www.google.com">Buy Now</a></div>
                                    <div className="seemore_bt"><a href="www.google.com">See More</a></div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="carousel-item">
                  <div className="container">
                     <h1 className="fashion_taital">Man & Woman Fashion</h1>
                     <div className="fashion_section_2">
                        <div className="row">
                           <div className="col-lg-4 col-sm-4">
                              <div className="box_main">
                                 <h4 className="shirt_text">Man T -shirt</h4>
                                 <p className="price_text">Price  <span style={{color: "#262626"}}>$ 30</span></p>
                                 <div className="tshirt_img"><img  alt="png" src="/assets/images/tshirt-img.png" /></div>
                                 <div className="btn_main">
                                    <div className="buy_bt"><a href="www.google.com">Buy Now</a></div>
                                    <div className="seemore_bt"><a href="www.google.com">See More</a></div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-lg-4 col-sm-4">
                              <div className="box_main">
                                 <h4 className="shirt_text">Man -shirt</h4>
                                 <p className="price_text">Price  <span style={{color: "#262626"}}>$ 30</span></p>
                                 <div className="tshirt_img"><img  alt="png" src="/assets/images/dress-shirt-img.png" /></div>
                                 <div className="btn_main">
                                    <div className="buy_bt"><a href="www.google.com">Buy Now</a></div>
                                    <div className="seemore_bt"><a href="www.google.com">See More</a></div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-lg-4 col-sm-4">
                              <div className="box_main">
                                 <h4 className="shirt_text">Woman Scart</h4>
                                 <p className="price_text">Price  <span style={{color: "#262626"}}>$ 30</span></p>
                                 <div className="tshirt_img"><img  alt="png" src="/assets/images/women-clothes-img.png" /></div>
                                 <div className="btn_main">
                                    <div className="buy_bt"><a href="www.google.com">Buy Now</a></div>
                                    <div className="seemore_bt"><a href="www.google.com">See More</a></div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <a className="carousel-control-prev" href="#main_slider" role="button" data-slide="prev">
            <i className="fa fa-angle-left"></i>
            </a>
            <a className="carousel-control-next" href="#main_slider" role="button" data-slide="next">
            <i className="fa fa-angle-right"></i>
            </a>
         </div>
      </div>
      <div className="fashion_section">
         <div id="electronic_main_slider" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
               <div className="carousel-item active">
                  <div className="container">
                     <h1 className="fashion_taital">Electronic</h1>
                     <div className="fashion_section_2">
                        <div className="row">
                           <div className="col-lg-4 col-sm-4">
                              <div className="box_main">
                                 <h4 className="shirt_text">Laptop</h4>
                                 <p className="price_text">Start Price  <span style={{color: "#262626"}}>$ 100</span></p>
                                 <div className="electronic_img"><img  alt="png" src="/assets/images/laptop-img.png" /></div>
                                 <div className="btn_main">
                                    <div className="buy_bt"><a href="www.google.com">Buy Now</a></div>
                                    <div className="seemore_bt"><a href="www.google.com">See More</a></div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-lg-4 col-sm-4">
                              <div className="box_main">
                                 <h4 className="shirt_text">Mobile</h4>
                                 <p className="price_text">Start Price  <span style={{color: "#262626"}}>$ 100</span></p>
                                 <div className="electronic_img"><img  alt="png" src="/assets/images/mobile-img.png" /></div>
                                 <div className="btn_main">
                                    <div className="buy_bt"><a href="www.google.com">Buy Now</a></div>
                                    <div className="seemore_bt"><a href="www.google.com">See More</a></div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-lg-4 col-sm-4">
                              <div className="box_main">
                                 <h4 className="shirt_text">Computers</h4>
                                 <p className="price_text">Start Price  <span style={{color: "#262626"}}>$ 100</span></p>
                                 <div className="electronic_img"><img  alt="png" src="/assets/images/computer-img.png" /></div>
                                 <div className="btn_main">
                                    <div className="buy_bt"><a href="www.google.com">Buy Now</a></div>
                                    <div className="seemore_bt"><a href="www.google.com">See More</a></div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="carousel-item">
                  <div className="container">
                     <h1 className="fashion_taital">Electronic</h1>
                     <div className="fashion_section_2">
                        <div className="row">
                           <div className="col-lg-4 col-sm-4">
                              <div className="box_main">
                                 <h4 className="shirt_text">Laptop</h4>
                                 <p className="price_text">Start Price  <span style={{color: "#262626"}}>$ 100</span></p>
                                 <div className="electronic_img"><img  alt="png" src="/assets/images/laptop-img.png" /></div>
                                 <div className="btn_main">
                                    <div className="buy_bt"><a href="www.google.com">Buy Now</a></div>
                                    <div className="seemore_bt"><a href="www.google.com">See More</a></div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-lg-4 col-sm-4">
                              <div className="box_main">
                                 <h4 className="shirt_text">Mobile</h4>
                                 <p className="price_text">Start Price  <span style={{color: "#262626"}}>$ 100</span></p>
                                 <div className="electronic_img"><img  alt="png" src="/assets/images/mobile-img.png" /></div>
                                 <div className="btn_main">
                                    <div className="buy_bt"><a href="www.google.com">Buy Now</a></div>
                                    <div className="seemore_bt"><a href="www.google.com">See More</a></div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-lg-4 col-sm-4">
                              <div className="box_main">
                                 <h4 className="shirt_text">Computers</h4>
                                 <p className="price_text">Start Price  <span style={{color: "#262626"}}>$ 100</span></p>
                                 <div className="electronic_img"><img  alt="png" src="/assets/images/computer-img.png" /></div>
                                 <div className="btn_main">
                                    <div className="buy_bt"><a href="www.google.com">Buy Now</a></div>
                                    <div className="seemore_bt"><a href="www.google.com">See More</a></div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="carousel-item">
                  <div className="container">
                     <h1 className="fashion_taital">Electronic</h1>
                     <div className="fashion_section_2">
                        <div className="row">
                           <div className="col-lg-4 col-sm-4">
                              <div className="box_main">
                                 <h4 className="shirt_text">Laptop</h4>
                                 <p className="price_text">Start Price  <span style={{color: "#262626"}}>$ 100</span></p>
                                 <div className="electronic_img"><img  alt="png" src="/assets/images/laptop-img.png" /></div>
                                 <div className="btn_main">
                                    <div className="buy_bt"><a href="www.google.com">Buy Now</a></div>
                                    <div className="seemore_bt"><a href="www.google.com">See More</a></div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-lg-4 col-sm-4">
                              <div className="box_main">
                                 <h4 className="shirt_text">Mobile</h4>
                                 <p className="price_text">Start Price  <span style={{color: "#262626"}}>$ 100</span></p>
                                 <div className="electronic_img"><img  alt="png" src="/assets/images/mobile-img.png" /></div>
                                 <div className="btn_main">
                                    <div className="buy_bt"><a href="www.google.com">Buy Now</a></div>
                                    <div className="seemore_bt"><a href="www.google.com">See More</a></div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-lg-4 col-sm-4">
                              <div className="box_main">
                                 <h4 className="shirt_text">Computers</h4>
                                 <p className="price_text">Start Price  <span style={{color: "#262626"}}>$ 100</span></p>
                                 <div className="electronic_img"><img  alt="png" src="/assets/images/computer-img.png" /></div>
                                 <div className="btn_main">
                                    <div className="buy_bt"><a href="www.google.com">Buy Now</a></div>
                                    <div className="seemore_bt"><a href="www.google.com">See More</a></div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <a className="carousel-control-prev" href="#electronic_main_slider" role="button" data-slide="prev">
            <i className="fa fa-angle-left"></i>
            </a>
            <a className="carousel-control-next" href="#electronic_main_slider" role="button" data-slide="next">
            <i className="fa fa-angle-right"></i>
            </a>
         </div>
      </div>

      <div className="jewellery_section">
         <div id="jewellery_main_slider" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
               <div className="carousel-item active">
                  <div className="container">
                     <h1 className="fashion_taital">Jewellery Accessories</h1>
                     <div className="fashion_section_2">
                        <div className="row">
                           <div className="col-lg-4 col-sm-4">
                              <div className="box_main">
                                 <h4 className="shirt_text">Jumkas</h4>
                                 <p className="price_text">Start Price  <span style={{color: "#262626"}}>$ 100</span></p>
                                 <div className="jewellery_img"><img  alt="png" src="/assets/images/jhumka-img.png" /></div>
                                 <div className="btn_main">
                                    <div className="buy_bt"><a href="www.google.com">Buy Now</a></div>
                                    <div className="seemore_bt"><a href="www.google.com">See More</a></div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-lg-4 col-sm-4">
                              <div className="box_main">
                                 <h4 className="shirt_text">Necklaces</h4>
                                 <p className="price_text">Start Price  <span style={{color: "#262626"}}>$ 100</span></p>
                                 <div className="jewellery_img"><img  alt="png" src="/assets/images/neklesh-img.png" /></div>
                                 <div className="btn_main">
                                    <div className="buy_bt"><a href="www.google.com">Buy Now</a></div>
                                    <div className="seemore_bt"><a href="www.google.com">See More</a></div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-lg-4 col-sm-4">
                              <div className="box_main">
                                 <h4 className="shirt_text">Kangans</h4>
                                 <p className="price_text">Start Price  <span style={{color: "#262626"}}>$ 100</span></p>
                                 <div className="jewellery_img"><img  alt="png" src="/assets/images/kangan-img.png" /></div>
                                 <div className="btn_main">
                                    <div className="buy_bt"><a href="www.google.com">Buy Now</a></div>
                                    <div className="seemore_bt"><a href="www.google.com">See More</a></div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="carousel-item">
                  <div className="container">
                     <h1 className="fashion_taital">Jewellery Accessories</h1>
                     <div className="fashion_section_2">
                        <div className="row">
                           <div className="col-lg-4 col-sm-4">
                              <div className="box_main">
                                 <h4 className="shirt_text">Jumkas</h4>
                                 <p className="price_text">Start Price  <span style={{color: "#262626"}}>$ 100</span></p>
                                 <div className="jewellery_img"><img  alt="png" src="/assets/images/jhumka-img.png" /></div>
                                 <div className="btn_main">
                                    <div className="buy_bt"><a href="www.google.com">Buy Now</a></div>
                                    <div className="seemore_bt"><a href="www.google.com">See More</a></div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-lg-4 col-sm-4">
                              <div className="box_main">
                                 <h4 className="shirt_text">Necklaces</h4>
                                 <p className="price_text">Start Price  <span style={{color: "#262626"}}>$ 100</span></p>
                                 <div className="jewellery_img"><img  alt="png" src="/assets/images/neklesh-img.png" /></div>
                                 <div className="btn_main">
                                    <div className="buy_bt"><a href="www.google.com">Buy Now</a></div>
                                    <div className="seemore_bt"><a href="www.google.com">See More</a></div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-lg-4 col-sm-4">
                              <div className="box_main">
                                 <h4 className="shirt_text">Kangans</h4>
                                 <p className="price_text">Start Price  <span style={{color: "#262626"}}>$ 100</span></p>
                                 <div className="jewellery_img"><img  alt="png" src="/assets/images/kangan-img.png" /></div>
                                 <div className="btn_main">
                                    <div className="buy_bt"><a href="www.google.com">Buy Now</a></div>
                                    <div className="seemore_bt"><a href="www.google.com">See More</a></div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="carousel-item">
                  <div className="container">
                     <h1 className="fashion_taital">Jewellery Accessories</h1>
                     <div className="fashion_section_2">
                        <div className="row">
                           <div className="col-lg-4 col-sm-4">
                              <div className="box_main">
                                 <h4 className="shirt_text">Jumkas</h4>
                                 <p className="price_text">Start Price  <span style={{color: "#262626"}}>$ 100</span></p>
                                 <div className="jewellery_img"><img  alt="png" src="/assets/images/jhumka-img.png" /></div>
                                 <div className="btn_main">
                                    <div className="buy_bt"><a href="www.google.com">Buy Now</a></div>
                                    <div className="seemore_bt"><a href="www.google.com">See More</a></div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-lg-4 col-sm-4">
                              <div className="box_main">
                                 <h4 className="shirt_text">Necklaces</h4>
                                 <p className="price_text">Start Price  <span style={{color: "#262626"}}>$ 100</span></p>
                                 <div className="jewellery_img"><img  alt="png" src="/assets/images/neklesh-img.png" /></div>
                                 <div className="btn_main">
                                    <div className="buy_bt"><a href="www.google.com">Buy Now</a></div>
                                    <div className="seemore_bt"><a href="www.google.com">See More</a></div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-lg-4 col-sm-4">
                              <div className="box_main">
                                 <h4 className="shirt_text">Kangans</h4>
                                 <p className="price_text">Start Price  <span style={{color: "#262626"}}>$ 100</span></p>
                                 <div className="jewellery_img"><img  alt="png" src="/assets/images/kangan-img.png" /></div>
                                 <div className="btn_main">
                                    <div className="buy_bt"><a href="www.google.com">Buy Now</a></div>
                                    <div className="seemore_bt"><a href="www.google.com">See More</a></div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <a className="carousel-control-prev" href="#jewellery_main_slider" role="button" data-slide="prev">
            <i className="fa fa-angle-left"></i>
            </a>
            <a className="carousel-control-next" href="#jewellery_main_slider" role="button" data-slide="next">
            <i className="fa fa-angle-right"></i>
            </a>
    
         </div>
      </div>
      </div> 
  )
}

export default Familles