import React from 'react'
import { Box, Flex, HStack, Link as ChakraLink } from '@chakra-ui/react'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import { ThemeToggle } from './theme-toggle'
import { LanguageToggle } from './language-toggle'
import { useT } from '../i18n'
import styles from './styles.scss'
import LogoLight from '../static-resources/icons/logo-light.svg'
import LogoDark from '../static-resources/icons/logo-dark.svg'
import { useColorMode } from './color-mode'

export const TopLine: React.FC = () => {
  const location = useLocation()
  const { colorMode } = useColorMode()
  const Logo = colorMode === 'light' ? LogoLight : LogoDark
  const t = useT()

  const navItems = [
    { path: '/', label: t.nav.resume },
    { path: '/jtc', label: t.nav.jtc },
    { path: '/recifra', label: t.nav.recifra },
    { path: '/about', label: t.nav.about },
  ]

  return (
    <Box as="header" w="full" px={4} boxShadow="md" className={styles.topLine}>
      <Flex justify="space-between" align="center">
        <HStack gap={8}>
          <RouterLink to="/">
            <Logo width={120} height={72} />
          </RouterLink>
          <HStack gap={6}>
            {navItems.map(item => (
              <RouterLink key={item.path} to={item.path}>
                <ChakraLink
                  fontWeight={location.pathname === item.path ? 'semibold' : 'semibold'}
                  color={location.pathname === item.path ? 'fg' : 'fg.link'}
                >
                  {item.label}
                </ChakraLink>
              </RouterLink>
            ))}
          </HStack>
        </HStack>
        <HStack gap={2}>
          <LanguageToggle />
          <ThemeToggle />
        </HStack>
      </Flex>
    </Box>
  )
}
