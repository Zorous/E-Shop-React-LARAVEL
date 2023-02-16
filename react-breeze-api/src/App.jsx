import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Login from "./components/Login-Register/Login";
import Register from "./components/Login-Register/Register";
import Home from "./pages/Home";
import Navbar from "./layouts/Navbar/Navbar";
import { Provider } from "react-redux";
import {store} from "./Redux/store";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />

      <div className="max-w-7xl mx-auto mt-6"></div>
      <Provider store={store}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
