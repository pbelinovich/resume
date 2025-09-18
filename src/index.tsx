import React from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { AboutPage } from './pages/about'
import { ResumePage, ResumePDF } from './pages/resume'
import { JTCPage } from './pages/jtc'
import { RecifraPage } from './pages/recifra'
import { NotFoundPage } from './pages/not-found'
import { ColorModeProvider } from './components/color-mode'
import { I18nProvider, Language } from './i18n'
import { system } from './system'
import './styles.css'
import './static-resources/inter/inter.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <ResumePage />,
  },
  {
    path: '/resume-pdf',
    element: <ResumePDF />,
  },
  {
    path: '/jtc',
    element: <JTCPage />,
  },
  {
    path: '/recifra',
    element: <RecifraPage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
])

const AppContent = () => {
  return (
    <ChakraProvider value={system}>
      <RouterProvider router={router} />
    </ChakraProvider>
  )
}

export const initializeWebApp = () => {
  if (typeof window === 'undefined') {
    throw new Error('The "initializeWebApp" function was not started in a main thread!')
  }

  const App = () => {
    const urlParams = new URLSearchParams(window.location.search)
    const langParam = urlParams.get('lang') as Language | null

    const getInitialLanguage = (): Language => {
      if (langParam && (langParam === 'ru' || langParam === 'en')) {
        return langParam
      }

      const savedLanguage = localStorage.getItem('resume-language') as Language | null

      if (savedLanguage && (savedLanguage === 'ru' || savedLanguage === 'en')) {
        return savedLanguage
      }

      return 'ru'
    }

    return (
      <I18nProvider defaultLanguage={getInitialLanguage()}>
        <ColorModeProvider>
          <AppContent />
        </ColorModeProvider>
      </I18nProvider>
    )
  }

  const renderApp = () => {
    const root = createRoot(document.getElementById('app')!)
    root.render(<App />)
  }

  if (document.readyState === 'complete') {
    renderApp()
  } else {
    window.onload = () => renderApp()
  }
}

initializeWebApp()
