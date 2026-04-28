import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div></div>}/>
      </Routes>
    </Router>
  )
}



export default App