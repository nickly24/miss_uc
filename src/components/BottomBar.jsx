import React from 'react'
import { useNavigate } from 'react-router-dom'
import './BottomBar.css'

const BottomBar = () => {
  const navigate = useNavigate()

  const handleOpenChat = (url) => {
    if (window.Telegram?.WebApp) {
      window.Telegram.WebApp.openTelegramLink(url)
    } else {
      window.open(url, '_blank')
    }
  }

  return (
    <div className="bottom-bar">
      <button 
        className="bottom-bar-item"
        onClick={() => navigate('/order-history')}
      >
        <span className="bottom-bar-item-icon">📋</span>
        <span className="bottom-bar-item-text">История</span>
      </button>
      
      <button 
        className="bottom-bar-item"
        onClick={() => handleOpenChat('https://t.me/+3AF4dzSsNXU0YzFi')}
      >
        <span className="bottom-bar-item-icon">⭐</span>
        <span className="bottom-bar-item-text">Отзывы</span>
      </button>
      
      <button 
        className="bottom-bar-item"
        onClick={() => handleOpenChat('https://t.me/MISS_uc_manager')}
      >
        <span className="bottom-bar-item-icon">💬</span>
        <span className="bottom-bar-item-text">Поддержка</span>
      </button>
    </div>
  )
}

export default BottomBar
