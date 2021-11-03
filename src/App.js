import { useEffect, useRef, useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import gsap from 'gsap'
import './App.scss'
import Home from './pages/Home'

function App() {
  return (
    <>
      <Home />
    </>
  )
}

export default App