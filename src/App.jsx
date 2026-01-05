import React, { useEffect } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
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
    console.log('App component mounted')
    initTelegram()
    // Устанавливаем фон для псевдоэлемента
    const appElement = document.querySelector('.app')
    if (appElement) {
      appElement.style.setProperty('--bg-image', `url(${bgImage})`)
      console.log('Background image set')
    } else {
      console.error('App element not found')
    }
  }, [initTelegram])

  return (
    <div className="app" style={{ '--bg-image': `url(${bgImage})` }}>
      {/* Простой тест - должен быть виден */}
      <div style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        background: 'red',
        color: 'white',
        padding: '30px',
        fontSize: '24px',
        fontWeight: 'bold',
        zIndex: 999999,
        borderRadius: '10px',
        textAlign: 'center'
      }}>
        ТЕСТ РЕНДЕРА
        <br />
        Если видите это - React работает
      </div>
      
      <Router basename={process.env.PUBLIC_URL || ''}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/code-purchase" element={<CodePurchase />} />
          <Route path="/code-cart" element={<CodeCart />} />
          <Route path="/order-history" element={<OrderHistory />} />
          <Route path="/my-codes" element={<MyCodes />} />
          <Route path="/instructions" element={<Instructions />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
