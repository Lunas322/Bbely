import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './Pages/Home'
import Detail from './Pages/Detail'
import Search from './Pages/Search'
import { useState } from 'react'
import { Item } from './types/items'
import Cart from './Pages/Cart'
import User from './Pages/User'


function App() {
  const [cartData,setCartData]= useState<Item[]>([])
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/detail/:id" element={<Detail cartData={cartData} setCartData={setCartData}/>}/>
        <Route path='/cart' element={<Cart cartData={cartData} setCartData={setCartData}/>}/>
        <Route path='/my' element={<User cartData={cartData} userName='토마토'/>}/>
      </Routes>
    </Router>
  )
}



export default App