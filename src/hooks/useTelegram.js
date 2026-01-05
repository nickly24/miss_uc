import { useState, useEffect } from 'react'

export const useTelegram = () => {
  const [tg, setTg] = useState(null)

  const initTelegram = () => {
    if (window.Telegram?.WebApp) {
      const telegram = window.Telegram.WebApp
      telegram.ready()
      telegram.expand()
      setTg(telegram)
      
      // Функция для применения темы (всегда темная)
      const applyTheme = () => {
        // Принудительно используем темную тему
        document.documentElement.style.setProperty('--tg-theme-bg-color', '#1a1a1a')
        document.documentElement.style.setProperty('--tg-theme-text-color', '#ffffff')
        document.documentElement.style.setProperty('--tg-theme-hint-color', '#999999')
        document.documentElement.style.setProperty('--tg-theme-link-color', '#FF69B4')
        document.documentElement.style.setProperty('--tg-theme-button-color', '#FF69B4')
        document.documentElement.style.setProperty('--tg-theme-button-text-color', '#ffffff')
        document.documentElement.style.setProperty('--tg-theme-secondary-bg-color', '#2a2a2a')
        
        // Применяем фон к body
        document.body.style.backgroundColor = '#1a1a1a'
        document.body.style.color = '#ffffff'
      }
      
      // Применяем тему сразу
      applyTheme()
      
      // Слушаем изменения темы (но все равно применяем темную)
      telegram.onEvent('themeChanged', applyTheme)
    } else {
      // Для тестирования вне Telegram - используем темную тему
      document.documentElement.style.setProperty('--tg-theme-bg-color', '#1a1a1a')
      document.documentElement.style.setProperty('--tg-theme-text-color', '#ffffff')
      document.documentElement.style.setProperty('--tg-theme-hint-color', '#999999')
      document.documentElement.style.setProperty('--tg-theme-link-color', '#FF69B4')
      document.documentElement.style.setProperty('--tg-theme-button-color', '#FF69B4')
      document.documentElement.style.setProperty('--tg-theme-button-text-color', '#ffffff')
      document.documentElement.style.setProperty('--tg-theme-secondary-bg-color', '#2a2a2a')
      document.body.style.backgroundColor = '#1a1a1a'
      document.body.style.color = '#ffffff'
    }
  }

  return {
    tg,
    initTelegram
  }
}
