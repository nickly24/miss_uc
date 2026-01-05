import { useState, useEffect } from 'react'

export const useTelegram = () => {
  const [tg, setTg] = useState(null)

  const initTelegram = () => {
    if (window.Telegram?.WebApp) {
      const telegram = window.Telegram.WebApp
      telegram.ready()
      telegram.expand()
      setTg(telegram)
      
      // Применяем тему Telegram
      document.documentElement.style.setProperty('--tg-theme-bg-color', telegram.themeParams.bg_color || '#ffffff')
      document.documentElement.style.setProperty('--tg-theme-text-color', telegram.themeParams.text_color || '#000000')
      document.documentElement.style.setProperty('--tg-theme-hint-color', telegram.themeParams.hint_color || '#999999')
      document.documentElement.style.setProperty('--tg-theme-link-color', telegram.themeParams.link_color || '#2481cc')
      document.documentElement.style.setProperty('--tg-theme-button-color', telegram.themeParams.button_color || '#2481cc')
      document.documentElement.style.setProperty('--tg-theme-button-text-color', telegram.themeParams.button_text_color || '#ffffff')
      document.documentElement.style.setProperty('--tg-theme-secondary-bg-color', telegram.themeParams.secondary_bg_color || '#f1f1f1')
    }
  }

  return {
    tg,
    initTelegram
  }
}
