import './App.css';
import { Routes, Route } from "react-router-dom";
import Article from './components/articles/Article';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import Familles from './components/familles/Familles';
import { Provider } from 'react-redux';
import { store } from './Redux/Store';

function App() {
  return (
  <Provider store={store}>
    <Routes>
      <Route element={<Layout/>} >
      <Route path="/" element={<Home />} />
      <Route path="/articles" element={<Article />} />
      <Route path="/familles" element={<Familles />} />
      </Route> 
  </Routes>
  </Provider>
  );
}

export default App;
