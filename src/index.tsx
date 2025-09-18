import React from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider, createSystem, defaultConfig } from '@chakra-ui/react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { AboutPage } from './pages/about'
import { ResumePage, ResumePDF } from './pages/resume'
import { JTCPage } from './pages/jtc'
import { RecifraPage } from './pages/recifra'
import { NotFoundPage } from './pages/not-found'
import { ColorModeProvider } from './components/color-mode'
import { I18nProvider } from './i18n'
import './styles.css'
import './static-resources/inter/inter.css'

const system = createSystem(defaultConfig, {
  conditions: {
    pdf: '&:is([data-theme=pdf], [data-theme=pdf] *)',
  },
  theme: {
    semanticTokens: {
      colors: {
        bg: {
          DEFAULT: {
            value: { _light: '{colors.gray.100}', _dark: '{colors.gray.950}', _pdf: 'white' }, // фон
          },
          subtle: {
            value: { _light: '{colors.gray.50}', _dark: '{colors.gray.900}', _pdf: 'white' },
          },
          card: {
            value: { _light: '{colors.gray.100}', _dark: '{colors.gray.900}', _pdf: '{colors.gray.50}' },
          },
          badge: {
            DEFAULT: {
              value: { _light: 'white', _dark: 'black', _pdf: 'white' },
            },
            blue: {
              value: { _light: '{colors.blue.400}', _dark: '{colors.blue.400}', _pdf: '{colors.blue.400}' },
            },
            red: {
              value: { _light: '{colors.red.400}', _dark: '{colors.red.400}', _pdf: '{colors.red.400}' },
            },
            green: {
              value: { _light: '{colors.green.400}', _dark: '{colors.green.400}', _pdf: '{colors.green.400}' },
            },
            orange: {
              value: { _light: '{colors.orange.400}', _dark: '{colors.orange.400}', _pdf: '{colors.orange.400}' },
            },
            purple: {
              value: { _light: '{colors.purple.400}', _dark: '{colors.purple.400}', _pdf: '{colors.purple.400}' },
            },
          },

          blue: {
            value: { _light: '{colors.blue.200}', _dark: '{colors.blue.800}', _pdf: '{colors.blue.200}' },
          },
          green: {
            value: { _light: '{colors.green.200}', _dark: '{colors.green.800}', _pdf: '{colors.green.200}' },
          },
          purple: {
            value: { _light: '{colors.purple.200}', _dark: '{colors.purple.800}', _pdf: '{colors.purple.200}' },
          },
          orange: {
            value: { _light: '{colors.orange.200}', _dark: '{colors.orange.800}', _pdf: '{colors.orange.200}' },
          },
        },
        fg: {
          DEFAULT: {
            value: { _light: '{colors.gray.900}', _dark: '{colors.gray.100}', _pdf: '{colors.gray.900}' }, // текст
          },
          subtle: {
            value: { _light: '{colors.gray.600}', _dark: '{colors.gray.400}', _pdf: '{colors.gray.600}' },
          },

          link: {
            value: { _light: '{colors.blue.500}', _dark: '{colors.blue.400}', _pdf: '{colors.blue.500}' },
          },
          linkHovered: {
            value: { _light: '{colors.blue.600}', _dark: '{colors.blue.300}', _pdf: '{colors.blue.600}' },
          },
          linkActive: {
            value: { _light: '{colors.blue.600}', _dark: '{colors.blue.300}', _pdf: '{colors.blue.600}' },
          },

          blue: {
            value: { _light: '{colors.blue.500}', _dark: '{colors.blue.400}', _pdf: '{colors.blue.400}' },
          },
          green: {
            value: { _light: '{colors.green.500}', _dark: '{colors.green.400}', _pdf: '{colors.green.500}' },
          },
          purple: {
            value: { _light: '{colors.purple.500}', _dark: '{colors.purple.400}', _pdf: '{colors.purple.500}' },
          },
          orange: {
            value: { _light: '{colors.orange.500}', _dark: '{colors.orange.400}', _pdf: '{colors.orange.500}' },
          },
        },
        border: {
          DEFAULT: {
            value: { _light: '{colors.gray.200}', _dark: '{colors.gray.800}', _pdf: '{colors.gray.200}' }, // граница
          },

          blue: {
            value: { _light: '{colors.blue.400}', _dark: '{colors.blue.600}', _pdf: '{colors.blue.400}' },
          },
          green: {
            value: { _light: '{colors.green.400}', _dark: '{colors.green.600}', _pdf: '{colors.green.400}' },
          },
          purple: {
            value: { _light: '{colors.purple.400}', _dark: '{colors.purple.600}', _pdf: '{colors.purple.400}' },
          },
          orange: {
            value: { _light: '{colors.orange.400}', _dark: '{colors.orange.600}', _pdf: '{colors.orange.400}' },
          },
        },
      },
    },
  },
})

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
    return (
      <I18nProvider>
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
