import React, { ReactNode } from 'react'
import { Box, Container, ScrollArea } from '@chakra-ui/react'
import { TopLine } from './top-line'

interface LayoutProps {
  children: ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box h="100vh" w="100vw" bg="bg">
      <TopLine />
      <ScrollArea.Root w="100%" h={{ base: 'calc(100% - 60px)', md: 'calc(100% - 72px)' }} type="always">
        <ScrollArea.Viewport>
          <ScrollArea.Content textStyle="sm">
            <Container maxW="4xl" py={8}>
              <Box as="main" bg="bg.subtle" borderRadius="lg" p={{ base: 2, md: 8 }}>
                <Container pb={{ base: 4, md: 8 }}>{children}</Container>
              </Box>
            </Container>
          </ScrollArea.Content>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar>
          <ScrollArea.Thumb />
        </ScrollArea.Scrollbar>
        <ScrollArea.Corner />
      </ScrollArea.Root>
    </Box>
  )
}
