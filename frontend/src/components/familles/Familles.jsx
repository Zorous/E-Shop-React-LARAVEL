import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getFamille } from "../../Redux/Slices/FamillesSlice";
import { getSousfamille } from "../../Redux/Slices/SousFamille";

function Familles() {
  const dispatch = useDispatch();

  /*---------Famille-------*/
  const { loading_famille, error_famille } = useSelector(
    (state) => state.familles
  );
  const familles = useSelector((state) => state.familles);
  const [famillesS, setFamillesS] = useState([]);

  useEffect(() => {
    dispatch(getFamille());
    setFamillesS(familles.familles);
  }, [dispatch]);
  console.log(familles);

  /*---------Sous-Famille-------*/

  const { loading, error } = useSelector((state) => state.sousfamilles);
  const sousfamilles = useSelector((state) => state.sousfamilles);
  const [sousfamillesS, setsousFamillesS] = useState([]);

  useEffect(() => {
    dispatch(getSousfamille());
    setsousFamillesS(sousfamilles.Sousfamilles);
  }, [dispatch]);
  console.log(sousfamilles);

  return (
    <div>
      {error ? (
        <div class="alert alert-danger" role="alert">
          {error}
        </div>
      ) : (
        ""
      )}

      <div className="fashion_section mt-5">
        <div id="main_slider" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              {loading ? (
                <h1>Loading... </h1>
              ) : (
                <div>
                  {famillesS &&
                    famillesS.map((famille) => (
                      <div className="container">
                        <div
                          style={{
                            background: `url(${famille.photo_famille})`,
                            backgroundPosition: "center",
                            width: "100%",
                            height: "100px",
                            filter: "blur(2px)",
                          }}
                        >
                          <h1 className="fashion_taital text-white">
                            {famille.famille}
                          </h1>
                        </div>

                        <div className="fashion_section_2">
                          <div className="row"> 
                            {sousfamillesS &&
                              sousfamillesS
                                .filter((sf) => sf.famille === famille.famille)
                                .map((Sfamille) => (
                                  <div className="col-lg-4 col-sm-4">
                                  <div className="box_main">
                                      <h4 className="shirt_text">
                                        {Sfamille.sous_famille}
                                      </h4>
                                      <p className="price_text">
                                        Price{" "}
                                        <span style={{ color: " #262626" }}>
                                          {" "}
                                          30
                                        </span>
                                      </p>
                                      <div className="tshirt_img">
                                        <img
                                          alt={`${Sfamille.photo}`}
                                          src={`${Sfamille.photo}`}
                                        />
                                      </div>
                                      <div className="btn_main">
                                        <div className="buy_bt">
                                          <a href="www.google.com">Buy Now</a>
                                        </div>
                                        <div className="seemore_bt">
                                        <Link to={`/articles/${Sfamille.sous_famille}`}>
                                        See More
                                        </Link>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ))}
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
                    ))}
                </div>  
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Familles;
