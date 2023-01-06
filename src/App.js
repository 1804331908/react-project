import Login from './components/login/Login'
import Header from './components/header/Header';
import Orders from './components/order/Orders';
import Product from './components/products/Product';
import Users from './components/users/Users';
import {Routes, Route, Navigate} from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
const [isLogin, setIsLogin]  = useState(false)

useEffect(() => {
  axios
    .get(`https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products`)
    .then((Response) => {

      localStorage.setItem("data", JSON.stringify(Response.data))
     
    });
}, []);


useEffect(() => {
  axios
      .get(`https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders`)
      .then((Response) => {
          
        localStorage.setItem("orderData", JSON.stringify(Response.data))
      });
}, []);

  return (
    <div className="App">
      <Header onLogout={() => setIsLogin(false)} login={isLogin}/>
      <Routes>
      <Route path='/react-project' element={<Login onLogin={() =>  setIsLogin(true)}/>}></Route>
      <Route path='/Orders' element={isLogin ? <Orders/> : <Navigate to="/react-project"/>}></Route>
      <Route path='/Product' element={isLogin ? <Product/> : <Navigate to="/react-project"/>}></Route>
      <Route path='/Users' element={isLogin ? <Users/> : <Navigate to="/react-project"/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
