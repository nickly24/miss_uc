import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useTelegram } from './hooks/useTelegram'
import Home from './pages/Home'
import ModeSelection from './pages/ModeSelection'
import CodePurchase from './pages/CodePurchase'
import CodeCart from './pages/CodeCart'
import AutoActivation from './pages/AutoActivation'
import AutoCart from './pages/AutoCart'
import OrderHistory from './pages/OrderHistory'
import MyCodes from './pages/MyCodes'
import Instructions from './pages/Instructions'
import './App.css'

function App() {
  const { tg, initTelegram } = useTelegram()

  useEffect(() => {
    initTelegram()
  }, [])

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mode-selection" element={<ModeSelection />} />
          <Route path="/code-purchase" element={<CodePurchase />} />
          <Route path="/code-cart" element={<CodeCart />} />
          <Route path="/auto-activation" element={<AutoActivation />} />
          <Route path="/auto-cart" element={<AutoCart />} />
          <Route path="/order-history" element={<OrderHistory />} />
          <Route path="/my-codes" element={<MyCodes />} />
          <Route path="/instructions" element={<Instructions />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
