import React, { useEffect, useState } from 'react'
import axios from "axios"


const baseURL = "http://127.0.0.1:8000/api/articles";

function Article() {
const [Articles, setArticles] = useState([]);

useEffect(() => {
  axios.get(baseURL).then((response) => {
    console.log(response.data);
    setArticles(response.data);
  });
}, [Articles]);

  return (
<>
<div className='container'>
<div className='row'>
{
  Articles?
  Articles.map((i)=>( <div className='col col-md-4'>
  <div className="card" style={{width: "18rem"}}>
  <img className="card-img-top" src={i.photo} alt="Card png" />
  <div className="card-body">
    <p className="card-text">{i.designation}</p>
  </div>
</div>
  </div>))
:<div>ERROR</div>
}
</div></div>  )

</>)
}

export default Article