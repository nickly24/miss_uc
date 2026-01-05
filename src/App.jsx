import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useTelegram } from './hooks/useTelegram'
import Home from './pages/Home'
import CodePurchase from './pages/CodePurchase'
import CodeCart from './pages/CodeCart'
import OrderHistory from './pages/OrderHistory'
import MyCodes from './pages/MyCodes'
import Instructions from './pages/Instructions'
import bgImage from './img/bg.jpg'
import './App.css'

function App() {
  const { tg, initTelegram } = useTelegram()

  useEffect(() => {
    initTelegram()
    // Устанавливаем фон для псевдоэлемента
    const appElement = document.querySelector('.app')
    if (appElement) {
      appElement.style.setProperty('--bg-image', `url(${bgImage})`)
    }
  }, [])

  return (
    <Router>
      <div className="app" style={{ '--bg-image': `url(${bgImage})` }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/code-purchase" element={<CodePurchase />} />
          <Route path="/code-cart" element={<CodeCart />} />
          <Route path="/order-history" element={<OrderHistory />} />
          <Route path="/my-codes" element={<MyCodes />} />
          <Route path="/instructions" element={<Instructions />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
