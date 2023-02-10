import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom';

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
  Articles.map((i)=>( 
<div className='col col-md-4'>
 <Link to={`/articles/${i.id}`}> <div className="card mb-3" style={{width: "18rem"}}>
  <img className="card-img-top" src={i.photo} alt="Card png" />
  <div className="card-body">
  <h4 class="card-title">{i.designation}</h4>
  </div>
</div>
</Link>
  </div>))
:<div>ERROR</div>
}
</div></div>  )

</>)
}

export default Article