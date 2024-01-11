import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter, Route  ,Routes } from 'react-router-dom'
import './App.css'
import Signup from './components/Signup'
import Login from './components/Login'
import Home from './components/home'

function App() {
  const [user, setuser] = useState()

  return (
   <BrowserRouter>
   <Routes>
    <Route path="" element={<Signup setuser={setuser}/>}/>
    <Route path="Login" element={<Login user={user}/>}/>
    <Route path="home" element={<Home/>}/>

   </Routes>
   </BrowserRouter>
  )
}

export default App
