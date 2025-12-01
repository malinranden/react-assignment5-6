import {BrowserRouter, Routes, Route} from 'react-router-dom'
//import {BrowserRouter, Routes, Route} from "react-router-dom";
import Assignment5 from './pages/Assignment5.jsx'
import Assignment6 from './pages/Assignment6.jsx'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import API from './components/API.jsx' // right?


function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/assignment5" element={<Assignment5/>}></Route>
          <Route path="/assignment6" element={<Assignment6/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
