import React, { useEffect, useState } from 'react'
import Navbar from '../layouts/Navbar/Navbar';
import axios from "axios"

function Home() {
    const [Articles,setArticles] = useState();
    const data = axios.get('http://127.0.0.1:8000/api/articles');
    useEffect(()=>{
        setArticles(data)
        console.log(Articles);
    },[data])
  return (

<Navbar />


  )
}

export default Home