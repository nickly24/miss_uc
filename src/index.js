import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

import { init, miniApp } from '@telegram-apps/sdk'

const initializeTelegramSDK = async () => {
  try {
    await init()

    if (miniApp.ready.isAvailable()) {
      await miniApp.ready()
      console.log('Mini App готово')
    }

  } catch (error) {
    console.error('Ошибка инициализации:', error)
  }
}

initializeTelegramSDK()

const rootElement = document.getElementById('root')
if (!rootElement) {
  throw new Error('Root element not found')
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
)
