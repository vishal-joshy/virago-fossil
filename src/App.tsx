import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Checkout from "./pages/Checkout/Checkout";
import Login from "./pages/Login/Login";
import { auth } from "./firebase/firebaseConfig";
import { useAppDispatch } from "./store/hooks";
import { setUser } from "./store/user/userSlice";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(setUser(authUser.email));
      } else {
        dispatch(setUser(null));
      }
    });
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
