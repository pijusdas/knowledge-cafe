import React from 'react';
import './App.css'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BlogTwo from './components/blogTwo/BlogTwo';

function App() {

  return (
    <div className="App">
      <Navbar></Navbar>
      <Home></Home>
      <BlogTwo></BlogTwo>
      <ToastContainer></ToastContainer>
    </div>
  )
}

export default App
