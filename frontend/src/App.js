import './App.css';
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Article from './components/articles/Article';
import Layout from './layouts/Layout';

function App() {
  return (
    <Routes>
      <Route  element={<Layout/>} >
      <Route path="/" element={<Home />} />
      <Route path="/articles" element={<Article />} />
      </Route> 
  </Routes>
  );
}

export default App;
