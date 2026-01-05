import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Инициализация Telegram Web App SDK
const initTelegramWebApp = () => {
  if (typeof window !== 'undefined' && window.Telegram?.WebApp) {
    try {
      const tg = window.Telegram.WebApp
      tg.ready()
      tg.expand()
      console.log('Telegram WebApp initialized')
    } catch (error) {
      console.error('Error initializing Telegram WebApp:', error)
    }
  } else {
    console.warn('Telegram WebApp not available - running in browser mode')
  }
}

// Инициализируем перед рендером
initTelegramWebApp()

const rootElement = document.getElementById('root')
if (!rootElement) {
  throw new Error('Root element not found')
}

const root = ReactDOM.createRoot(rootElement)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
