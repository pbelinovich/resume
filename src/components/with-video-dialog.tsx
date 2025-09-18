import React from 'react'
import { Dialog, Button, AspectRatio, IconButton, Box, HStack, Portal, chakra, Link, Text } from '@chakra-ui/react'
import PlayIconExternal from '../static-resources/icons/play.svg'

const PlayIcon = chakra(PlayIconExternal)

type ColorPalette = 'blue' | 'green' | 'red' | 'orange' | 'purple' | 'gray'

export interface IWithVideoDialogProps {
  embedUrl: string
  maxWidth?: string
  children?: React.ReactNode
}

export interface IVideoButtonProps extends IWithVideoDialogProps {
  width?: string
  buttonSize?: 'xs' | 'sm' | 'md' | 'lg'
  buttonVariant?: 'solid' | 'outline' | 'ghost' | 'subtle'
  buttonColorPalette?: ColorPalette
}

export interface IVideoLinkProps extends IWithVideoDialogProps {
  linkColorPalette?: ColorPalette
}

const getColorByPalette = (colorPalette: ColorPalette) => {
  if (colorPalette === 'blue') {
    return 'fg.blue'
  }

  if (colorPalette === 'green') {
    return 'fg.green'
  }

  if (colorPalette === 'red') {
    return 'fg.red'
  }

  if (colorPalette === 'orange') {
    return 'fg.orange'
  }

  if (colorPalette === 'purple') {
    return 'fg.purple'
  }

  return 'fg.gray'
}

export const WithVideoDialog = ({ embedUrl, maxWidth = '900px', children = null }: IWithVideoDialogProps) => {
  return (
    <Dialog.Root placement="center">
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>

      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content maxWidth={maxWidth} width="90vw" p={0} borderRadius="lg" overflow="hidden">
            <Box position="relative">
              <AspectRatio ratio={16 / 9}>
                <iframe
                  src={embedUrl}
                  width="100%"
                  height="100%"
                  style={{
                    backgroundColor: '#000',
                    border: 'none',
                    borderRadius: '8px',
                  }}
                  allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
                  allowFullScreen
                />
              </AspectRatio>

              <Dialog.CloseTrigger asChild>
                <IconButton
                  position="absolute"
                  top={3}
                  right={3}
                  aria-label="Закрыть видео"
                  variant="solid"
                  size="sm"
                  colorPalette="gray"
                  bg="blackAlpha.700"
                  color="white"
                  borderRadius="sm"
                  _hover={{ bg: 'blackAlpha.800' }}
                >
                  ✕
                </IconButton>
              </Dialog.CloseTrigger>
            </Box>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  )
}

export const VideoButton = ({
  embedUrl,
  width = '100%',
  buttonSize = 'xs',
  buttonVariant = 'subtle',
  buttonColorPalette = 'blue',
  maxWidth,
  children,
}: IVideoButtonProps) => {
  const color = getColorByPalette(buttonColorPalette)

  return (
    <WithVideoDialog embedUrl={embedUrl} maxWidth={maxWidth}>
      <Button size={buttonSize} variant={buttonVariant} colorPalette={buttonColorPalette} width={width}>
        <HStack gap={1}>
          <PlayIcon w={6} h={6} fill={color} />
          {children && <Text color={color}>{children}</Text>}
        </HStack>
      </Button>
    </WithVideoDialog>
  )
}

export const VideoLink = ({ embedUrl, maxWidth, children, linkColorPalette = 'blue' }: IVideoLinkProps) => {
  const color = getColorByPalette(linkColorPalette)

  return (
    <WithVideoDialog embedUrl={embedUrl} maxWidth={maxWidth}>
      <Link color={color}>
        <PlayIcon w={4} h={4} fill={color} />
        {children}
      </Link>
    </WithVideoDialog>
  )
}
