import React, { createContext, useContext, useEffect, useState } from 'react'
import { Button, chakra } from '@chakra-ui/react'
import { useT } from '../i18n'
import MoonIconExternal from '../static-resources/icons/moon.svg'
import SunIconExternal from '../static-resources/icons/sun.svg'

const MoonIcon = chakra(MoonIconExternal)
const SunIcon = chakra(SunIconExternal)

type ColorMode = 'light' | 'dark'

interface IColorModeContext {
  colorMode: ColorMode
  toggleColorMode: () => void
}

const ColorModeContext = createContext<IColorModeContext | undefined>(undefined)

export interface ColorModeProviderProps {
  children: React.ReactNode
  forcedTheme?: ColorMode
}

export const ColorModeProvider = ({ children, forcedTheme }: ColorModeProviderProps) => {
  const [colorMode, setColorMode] = useState<ColorMode>('dark') // По умолчанию темная тема

  useEffect(() => {
    if (forcedTheme) {
      setColorMode(forcedTheme)
      return
    }

    // Загружаем тему из localStorage при инициализации
    const savedTheme = localStorage.getItem('chakra-ui-color-mode') as ColorMode | null
    if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
      setColorMode(savedTheme)
    }
  }, [forcedTheme])

  useEffect(() => {
    if (forcedTheme) return

    // Сохраняем тему в localStorage при изменении
    localStorage.setItem('chakra-ui-color-mode', colorMode)

    // Устанавливаем class на body для применения темы
    document.documentElement.classList.remove('light', 'dark')
    document.documentElement.classList.add(colorMode)

    // Также добавляем data-theme атрибут
    document.documentElement.setAttribute('data-theme', colorMode)
  }, [colorMode, forcedTheme])

  const toggleColorMode = () => {
    if (forcedTheme) return
    setColorMode(prev => (prev === 'light' ? 'dark' : 'light'))
  }

  const value: IColorModeContext = {
    colorMode,
    toggleColorMode,
  }

  return <ColorModeContext.Provider value={value}>{children}</ColorModeContext.Provider>
}

export const useColorMode = (): IColorModeContext => {
  const context = useContext(ColorModeContext)
  if (context === undefined) {
    throw new Error('useColorMode must be used within ColorModeProvider')
  }
  return context
}

export function useColorModeValue<T>(light: T, dark: T): T {
  const { colorMode } = useColorMode()
  return colorMode === 'light' ? light : dark
}

export const ColorModeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const t = useT()

  return (
    <Button
      onClick={toggleColorMode}
      variant="ghost"
      size="md"
      colorPalette="blue"
      aria-label={colorMode === 'light' ? t.system.toggleTheme.dark : t.system.toggleTheme.light}
    >
      {colorMode === 'light' ? <MoonIcon w={5} h={5} fill="fg.blue" /> : <SunIcon w={5} h={5} fill="fg.blue" />}
    </Button>
  )
}
