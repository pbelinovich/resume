import React from 'react'
import { Box, Flex, HStack, VStack, Link as ChakraLink, Button, Drawer, Portal, CloseButton } from '@chakra-ui/react'
import { useLocation } from 'react-router-dom'
import { CLink } from './clink'
import { ThemeToggle } from './theme-toggle'
import { LanguageToggle } from './language-toggle'
import { PdfDownloadButton } from './pdf-download-button'
import { useT } from '../i18n'
import { useColorMode } from './color-mode'
import LogoLight from '../static-resources/icons/logo-light.svg'
import LogoDark from '../static-resources/icons/logo-dark.svg'
import styles from './styles.scss'

export const TopLine: React.FC = () => {
  const location = useLocation()
  const { colorMode } = useColorMode()
  const Logo = colorMode === 'light' ? LogoLight : LogoDark
  const t = useT()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  const navItems: { path: string; label: string }[] = [
    { path: '/', label: t.nav.resume },
    { path: '/jtc', label: t.nav.jtc },
    { path: '/recifra', label: t.nav.recifra },
    { path: '/about', label: t.nav.about },
  ]

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleNavClick = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <Box as="header" w="full" px={{ base: 4, md: 6, lg: 8 }} boxShadow="md" className={styles.topLine}>
      <Flex align="center" justify="space-between" minH={{ base: '60px', md: '72px' }} style={{ width: '100%' }}>
        {/* Left Side - Mobile Logo */}
        <Box display={{ base: 'block', lg: 'none' }}>
          <CLink to="/">
            <Logo width={80} height={60} />
          </CLink>
        </Box>

        {/* Center - Desktop Logo and Navigation */}
        <Flex flex="1" justify={{ base: 'center', lg: 'flex-start' }} align="center" px={4} display={{ base: 'none', lg: 'flex' }}>
          {/* Desktop Logo */}
          <Box mr={8}>
            <CLink to="/">
              <Logo width={120} height={72} />
            </CLink>
          </Box>

          {/* Desktop Navigation */}
          <HStack gap={6}>
            {navItems.map(item => (
              <CLink key={item.path} to={item.path}>
                <ChakraLink
                  fontWeight="semibold"
                  color={location.pathname === item.path ? 'fg' : 'fg.link'}
                  fontSize={{ lg: 'md' }}
                  _hover={{ color: 'fg' }}
                  transition="color 0.2s"
                >
                  {item.label}
                </ChakraLink>
              </CLink>
            ))}
          </HStack>
        </Flex>

        {/* Right Side - Mobile Hamburger */}
        <Box
          as="button"
          aria-label="Open menu"
          display={{ base: 'flex', lg: 'none' }}
          onClick={toggleMobileMenu}
          bg="transparent"
          border="none"
          cursor="pointer"
          p={2}
          _hover={{ opacity: 0.7 }}
          position="relative"
          w="24px"
          h="24px"
        >
          <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" w="20px" h="14px" transition="all 0.3s ease">
            <Box
              position="absolute"
              top="0"
              left="0"
              w="20px"
              h="2px"
              bg="currentColor"
              transition="all 0.3s ease"
              transform={isMobileMenuOpen ? 'rotate(45deg) translate(3px, 6px)' : 'rotate(0deg)'}
            />
            <Box
              position="absolute"
              top="6px"
              left="0"
              w="20px"
              h="2px"
              bg="currentColor"
              transition="all 0.3s ease"
              opacity={isMobileMenuOpen ? '0' : '1'}
              transform={isMobileMenuOpen ? 'translateX(20px)' : 'translateX(0)'}
            />
            <Box
              position="absolute"
              top="12px"
              left="0"
              w="20px"
              h="2px"
              bg="currentColor"
              transition="all 0.3s ease"
              transform={isMobileMenuOpen ? 'rotate(-45deg) translate(3px, -6px)' : 'rotate(0deg)'}
            />
          </Box>
        </Box>

        {/* Right Side - Desktop Controls */}
        <HStack gap={2} display={{ base: 'none', lg: 'flex' }} flexShrink={0}>
          <PdfDownloadButton />
          <LanguageToggle />
          <ThemeToggle />
        </HStack>
      </Flex>

      {/* Mobile Navigation Drawer */}
      <Drawer.Root open={isMobileMenuOpen} onOpenChange={(e: { open: boolean }) => setIsMobileMenuOpen(e.open)}>
        <Portal>
          <Drawer.Backdrop />
          <Drawer.Positioner>
            <Drawer.Content placement="start" size="sm">
              <Drawer.Header>
                <Drawer.CloseTrigger asChild>
                  <CloseButton size="sm" />
                </Drawer.CloseTrigger>
              </Drawer.Header>

              <Drawer.Body>
                <VStack gap={4} align="stretch" py={4}>
                  {navItems.map(item => (
                    <CLink key={item.path} to={item.path} onClick={handleNavClick}>
                      <Button
                        width="100%"
                        justifyContent="flex-start"
                        fontWeight="semibold"
                        fontSize="lg"
                        variant={location.pathname === item.path ? 'solid' : 'ghost'}
                        colorPalette={location.pathname === item.path ? 'blue' : 'gray'}
                        py={4}
                        px={6}
                        borderRadius="lg"
                        _hover={{
                          bg: location.pathname === item.path ? 'blue.600' : 'gray.100',
                          color: location.pathname === item.path ? 'white' : 'gray.900',
                          transform: 'translateX(4px)',
                        }}
                        transition="all 0.2s ease"
                      >
                        {item.label}
                      </Button>
                    </CLink>
                  ))}
                </VStack>
              </Drawer.Body>

              <Drawer.Footer>
                <HStack justify="space-between" align="center" w="full">
                  <PdfDownloadButton />
                  <LanguageToggle />
                  <ThemeToggle />
                </HStack>
              </Drawer.Footer>
            </Drawer.Content>
          </Drawer.Positioner>
        </Portal>
      </Drawer.Root>
    </Box>
  )
}
