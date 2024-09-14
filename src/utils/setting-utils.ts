import type { LIGHT_DARK_MODE, PAGE_WIDTH } from '@/types/config'
import {
  AUTO_MODE,
  DARK_MODE,
  DEFAULT_THEME,
  LIGHT_MODE,
  SHRINK_WIDTH,
} from '@constants/constants.ts'

export function getDefaultHue(): number {
  const fallback = '250'
  const configCarrier = document.getElementById('config-carrier')
  return Number.parseInt(configCarrier?.dataset.hue || fallback)
}

export function getHue(): number {
  const stored = localStorage.getItem('hue')
  return stored ? Number.parseInt(stored) : getDefaultHue()
}

export function setHue(hue: number): void {
  localStorage.setItem('hue', String(hue))
  const r = document.querySelector(':root') as HTMLElement
  if (!r) {
    return
  }
  r.style.setProperty('--hue', String(hue))
}

export function applyThemeToDocument(theme: LIGHT_DARK_MODE) {
  switch (theme) {
    case LIGHT_MODE:
      document.documentElement.classList.remove('dark')
      break
    case DARK_MODE:
      document.documentElement.classList.add('dark')
      break
    case AUTO_MODE:
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
      break
  }
}

export function setTheme(theme: LIGHT_DARK_MODE): void {
  localStorage.setItem('theme', theme)
  applyThemeToDocument(theme)
}

export function getStoredTheme(): LIGHT_DARK_MODE {
  return (localStorage.getItem('theme') as LIGHT_DARK_MODE) || DEFAULT_THEME
}

export function applyPageWidth(width: PAGE_WIDTH) {
  if (width === SHRINK_WIDTH) {
    console.log('Changed to SHRINK width!')
  } else {
    console.log('Changed to EXPAND width!')
  }
}

// Function to save the width setting (compact or expand) to localStorage
export function setWidthSetting(width: PAGE_WIDTH): void {
  localStorage.setItem('page-width', width)
  applyPageWidth(width)
}

// Function to get the current width setting from localStorage or fallback to default
export function getStoredWidth(): PAGE_WIDTH {
  return (localStorage.getItem('page-width') as PAGE_WIDTH) || SHRINK_WIDTH
}
