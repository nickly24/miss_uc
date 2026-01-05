import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

import { init, miniApp } from '@telegram-apps/sdk'

const initializeTelegramSDK = async () => {
  try {
    await init()
    console.log('SDK инициализирован')

    if (miniApp.ready.isAvailable()) {
      await miniApp.ready()
      console.log('Mini App готово')
    } else {
      console.log('miniApp.ready не доступен')
    }

  } catch (error) {
    console.error('Ошибка инициализации:', error)
  }
}

// Инициализируем ДО рендера
initializeTelegramSDK().then(() => {
  const rootElement = document.getElementById('root')
  if (!rootElement) {
    throw new Error('Root element not found')
  }

  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  )
}).catch((error) => {
  console.error('Критическая ошибка:', error)
  // Рендерим даже при ошибке
  const rootElement = document.getElementById('root')
  if (rootElement) {
    createRoot(rootElement).render(
      <StrictMode>
        <App />
      </StrictMode>
    )
  }
})
