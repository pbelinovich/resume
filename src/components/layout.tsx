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
      <ScrollArea.Root h="calc(100vh - 72px)" w="100vw" type="always">
        <ScrollArea.Viewport>
          <ScrollArea.Content textStyle="sm">
            <Container maxW="4xl" py={8}>
              <Box as="main" bg="bg.subtle" borderRadius="lg" p={8}>
                <Container>{children}</Container>
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
