(() => {
  'use strict'

  const getStoredTheme = () => localStorage.getItem('theme')
  const setStoredTheme = theme => localStorage.setItem('theme', theme)

  const getPreferredTheme = () => {
    const storedTheme = getStoredTheme()
    if (storedTheme) return storedTheme
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  const setTheme = theme => {
    document.documentElement.setAttribute('data-bs-theme', theme)
  }

  setTheme(getPreferredTheme())

  window.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('theme-toggle');
    if (!toggle) return;

    // Imposta lo stato iniziale della checkbox/switch
    toggle.checked = getPreferredTheme() === 'dark';

    toggle.addEventListener('change', () => {
      const theme = toggle.checked ? 'dark' : 'light'
      setStoredTheme(theme)
      setTheme(theme)
    })
  })
})()