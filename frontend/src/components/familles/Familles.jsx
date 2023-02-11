import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFamille } from "../../Redux/Slices/FamillesSlice";

function Familles() {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.familles);
  const familles = useSelector((state) => state.familles);

  const [famillesS,setFamillesS] = useState([]);


  useEffect(() => {
    dispatch(getFamille());
    setFamillesS(familles.familles)
  }, [dispatch]);
  console.log(familles);
  return (
    <div>
      {error ? (
        <div class="alert alert-danger" role="alert">
          {error}
        </div>
      ) : (
        ""
      )}

      <div className="fashion_section">
        <div id="main_slider" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
            {loading ? (
                      <h1>Loading... </h1>
                    ) : (
            <div>
            {famillesS && famillesS.map((famille)=>(
            <div className="container">
                <h1 className="fashion_taital">{famille.famille}</h1>
                <div className="fashion_section_2">
                  <div className="row">
                    <div className="col-lg-4 col-sm-4">
                      <div className="box_main">
                        <h4 className="shirt_text">Man T -shirt</h4>
                        <p className="price_text">
                          Price <span style={{ color: " #262626" }}>$ 30</span>
                        </p>
                        <div className="tshirt_img">
                          <img alt="png" src={famille.photo} />
                        </div>
                        <div className="btn_main">
                          <div className="buy_bt">
                            <a href="www.google.com">Buy Now</a>
                          </div>
                          <div className="seemore_bt">
                            <a href="www.google.com">See More</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-4">
                      <div className="box_main">
                        <h4 className="shirt_text">Man -shirt</h4>
                        <p className="price_text">
                          Price <span style={{ color: " #262626" }}>$ 30</span>
                        </p>
                        <div className="tshirt_img">
                          <img
                            alt="png"
                            src="/assets/images/dress-shirt-img.png"
                          />
                        </div>
                        <div className="btn_main">
                          <div className="buy_bt">
                            <a href="www.google.com">Buy Now</a>
                          </div>
                          <div className="seemore_bt">
                            <a href="www.google.com">See More</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-4">
                      <div className="box_main">
                        <h4 className="shirt_text">Woman Scart</h4>
                        <p className="price_text">
                          Price <span style={{ color: " #262626" }}>$ 30</span>
                        </p>
                        <div className="tshirt_img">
                          <img
                            alt="png"
                            src="/assets/images/women-clothes-img.png"
                          />
                        </div>
                        <div className="btn_main">
                          <div className="buy_bt">
                            <a href="www.google.com">Buy Now</a>
                          </div>
                          <div className="seemore_bt">
                            <a href="www.google.com">See More</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>  
                     ))}
                       
                  </div>
                    )}
        
            </div>
          </div>

          <a
            className="carousel-control-prev"
            href="#electronic_main_slider"
            role="button"
            data-slide="prev"
          >
            <i className="fa fa-angle-left"></i>
          </a>
          <a
            className="carousel-control-next"
            href="#electronic_main_slider"
            role="button"
            data-slide="next"
          >
            <i className="fa fa-angle-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Familles;
