import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getFamille } from "../../Redux/Slices/FamillesSlice";
import { getSousfamille } from "../../Redux/Slices/SousFamilleSlice";



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
    <div>Familles</div>
  )
}

export default Familles