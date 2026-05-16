import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import Header from './components/Header'
import Home from './Pages/Home'
import Detail from './Pages/Detail'
import Search from './Pages/Search'
import { useState } from 'react'
import { Item } from './types/items'


function App() {
  const [cartData,setCartData]= useState<Item[]>([])
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/detail/:id" element={<Detail cartData={cartData} setCartData={setCartData}/>}/>

      </Routes>
    </Router>
  )
}



export default App