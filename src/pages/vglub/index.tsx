import React from 'react'
import { Box, Stack, Heading, Text, Badge, Button, Card, Flex, Separator, VStack, Grid, Image, List, Link, HStack } from '@chakra-ui/react'
import { Layout } from '../../components'
import { useColorMode } from '../../components/color-mode'
import { useT } from '../../i18n'
import LinkLightIcon from '../../static-resources/icons/link-light.svg'
import LinkDarkIcon from '../../static-resources/icons/link-dark.svg'
import LightHome from '../../static-resources/images/vglub/light/home.jpg'
import LightSchedule from '../../static-resources/images/vglub/light/schedule.jpg'
import LightPatients from '../../static-resources/images/vglub/light/patients.jpg'
import LightPatientCard from '../../static-resources/images/vglub/light/patient-card.jpg'
import LightSession from '../../static-resources/images/vglub/light/session.jpg'
import LightSettings from '../../static-resources/images/vglub/light/settings.jpg'
import LightHomePreview from '../../static-resources/images/vglub/light/preview/home.jpg'
import LightSchedulePreview from '../../static-resources/images/vglub/light/preview/schedule.jpg'
import LightPatientsPreview from '../../static-resources/images/vglub/light/preview/patients.jpg'
import LightPatientCardPreview from '../../static-resources/images/vglub/light/preview/patient-card.jpg'
import LightSessionPreview from '../../static-resources/images/vglub/light/preview/session.jpg'
import LightSettingsPreview from '../../static-resources/images/vglub/light/preview/settings.jpg'
import DarkHome from '../../static-resources/images/vglub/dark/home.jpg'
import DarkSchedule from '../../static-resources/images/vglub/dark/schedule.jpg'
import DarkPatients from '../../static-resources/images/vglub/dark/patients.jpg'
import DarkPatientCard from '../../static-resources/images/vglub/dark/patient-card.jpg'
import DarkSession from '../../static-resources/images/vglub/dark/session.jpg'
import DarkSettings from '../../static-resources/images/vglub/dark/settings.jpg'
import DarkHomePreview from '../../static-resources/images/vglub/dark/preview/home.jpg'
import DarkSchedulePreview from '../../static-resources/images/vglub/dark/preview/schedule.jpg'
import DarkPatientsPreview from '../../static-resources/images/vglub/dark/preview/patients.jpg'
import DarkPatientCardPreview from '../../static-resources/images/vglub/dark/preview/patient-card.jpg'
import DarkSessionPreview from '../../static-resources/images/vglub/dark/preview/session.jpg'
import DarkSettingsPreview from '../../static-resources/images/vglub/dark/preview/settings.jpg'

interface IScreenshotSources {
  full: string
  preview: string
}

const screenshotsByTheme: Record<'light' | 'dark', Record<string, IScreenshotSources>> = {
  light: {
    home: { full: LightHome, preview: LightHomePreview },
    schedule: { full: LightSchedule, preview: LightSchedulePreview },
    patients: { full: LightPatients, preview: LightPatientsPreview },
    'patient-card': { full: LightPatientCard, preview: LightPatientCardPreview },
    session: { full: LightSession, preview: LightSessionPreview },
    settings: { full: LightSettings, preview: LightSettingsPreview },
  },
  dark: {
    home: { full: DarkHome, preview: DarkHomePreview },
    schedule: { full: DarkSchedule, preview: DarkSchedulePreview },
    patients: { full: DarkPatients, preview: DarkPatientsPreview },
    'patient-card': { full: DarkPatientCard, preview: DarkPatientCardPreview },
    session: { full: DarkSession, preview: DarkSessionPreview },
    settings: { full: DarkSettings, preview: DarkSettingsPreview },
  },
}

export const VglubPage = () => {
  const t = useT()
  const { colorMode } = useColorMode()
  const LinkIcon = colorMode === 'dark' ? LinkDarkIcon : LinkLightIcon
  const screenshots = screenshotsByTheme[colorMode === 'dark' ? 'dark' : 'light']
  const [openedScreenshotId, setOpenedScreenshotId] = React.useState<string | null>(null)
  const [zoom, setZoom] = React.useState(1)
  const openedScreenshot = openedScreenshotId ? t.vglub.screenshots.items.find(item => item.id === openedScreenshotId) : undefined

  const MIN_ZOOM = 1
  const MAX_ZOOM = 4
  const ZOOM_STEP = 1.5

  const openScreenshot = (id: string) => {
    setZoom(1)
    setOpenedScreenshotId(id)
  }

  const zoomIn = () => setZoom(value => Math.min(MAX_ZOOM, value * ZOOM_STEP))
  const zoomOut = () => setZoom(value => Math.max(MIN_ZOOM, value / ZOOM_STEP))
  const stepZoom = () => setZoom(value => (value >= MAX_ZOOM ? MIN_ZOOM : Math.min(MAX_ZOOM, value * ZOOM_STEP)))

  const scrollAreaRef = React.useRef<HTMLDivElement | null>(null)
  const dragStateRef = React.useRef<{ startX: number; startY: number; scrollLeft: number; scrollTop: number } | null>(null)
  const [isDragging, setIsDragging] = React.useState(false)

  const onPanStart = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== 'mouse' || zoom <= 1 || !scrollAreaRef.current) return

    dragStateRef.current = {
      startX: event.clientX,
      startY: event.clientY,
      scrollLeft: scrollAreaRef.current.scrollLeft,
      scrollTop: scrollAreaRef.current.scrollTop,
    }
    setIsDragging(true)
    event.currentTarget.setPointerCapture(event.pointerId)
  }

  const onPanMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!dragStateRef.current || !scrollAreaRef.current) return

    scrollAreaRef.current.scrollLeft = dragStateRef.current.scrollLeft - (event.clientX - dragStateRef.current.startX)
    scrollAreaRef.current.scrollTop = dragStateRef.current.scrollTop - (event.clientY - dragStateRef.current.startY)
  }

  const onPanEnd = () => {
    dragStateRef.current = null
    setIsDragging(false)
  }

  React.useEffect(() => {
    if (!openedScreenshotId) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpenedScreenshotId(null)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [openedScreenshotId])

  return (
    <Layout>
      <Stack gap={8}>
        {/* Header Section */}
        <Box textAlign="center" pt={4}>
          <Heading size={{ base: '2xl', md: '4xl' }} mb={2} fontWeight="bold" color="fg">
            {t.vglub.pageTitle}
          </Heading>
          <Text fontSize={{ base: 'sm', md: 'md' }} color="fg.subtle" mb={4}>
            {t.vglub.subtitle}
          </Text>
          <HStack justify="center" gapX={6} flexWrap="wrap">
            <Link href="https://vglub.space/" color="fg.link" fontWeight="medium" target="_blank">
              <LinkIcon width={16} height={16} />
              vglub.space
            </Link>
          </HStack>
        </Box>

        <Separator />

        {/* Project Overview */}
        <Box>
          <Heading size="lg" mb={6} color="fg">
            {t.vglub.overview.title}
          </Heading>

          <Card.Root mb={4} bg="bg">
            <Card.Body p={4}>
              <VStack align="stretch" gap={4}>
                <Box>
                  <Text color="fg.subtle" lineHeight={1.4}>
                    {t.vglub.overview.description}
                  </Text>
                </Box>

                <Box>
                  <Badge colorPalette="gray" variant="outline" size="xs" mb={2} bg="bg.badge">
                    {t.system.goal}
                  </Badge>
                  <Text color="fg" lineHeight={1.4} fontSize="sm">
                    {t.vglub.overview.goal}
                  </Text>
                </Box>

                <Box>
                  <Badge colorPalette="gray" variant="outline" size="xs" mb={3} bg="bg.badge">
                    {t.system.features}
                  </Badge>
                  <VStack align="left">
                    {t.vglub.overview.features.map(feature => (
                      <Text key={feature.id} fontSize="sm" color="fg">
                        • {feature.title}
                      </Text>
                    ))}
                  </VStack>
                </Box>
              </VStack>
            </Card.Body>
          </Card.Root>
        </Box>

        <Separator />

        {/* Role & AI-Driven Development */}
        <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={4}>
          <Card.Root bg="bg" height="100%">
            <Card.Body p={4}>
              <VStack align="stretch" gap={4}>
                <Box>
                  <Heading size="sm" color="fg.blue" mb={3}>
                    {t.vglub.role.title}
                  </Heading>
                  <Text color="fg.subtle" lineHeight={1.4} fontSize="sm" mb={4}>
                    {t.vglub.role.description}
                  </Text>
                  <List.Root pl={4} gap={1} fontSize="sm">
                    {t.vglub.role.items.map((item, index) => (
                      <List.Item key={index}>{item}</List.Item>
                    ))}
                  </List.Root>
                </Box>
              </VStack>
            </Card.Body>
          </Card.Root>

          <Card.Root bg="bg" height="100%">
            <Card.Body p={4}>
              <VStack align="stretch" gap={4}>
                <Box>
                  <Heading size="sm" color="fg.purple" mb={3}>
                    {t.vglub.aiDrivenDev.title}
                  </Heading>
                  <Text color="fg.subtle" lineHeight={1.4} fontSize="sm" mb={4}>
                    {t.vglub.aiDrivenDev.description}
                  </Text>
                  <List.Root pl={4} gap={1} fontSize="sm">
                    {t.vglub.aiDrivenDev.items.map((item, index) => (
                      <List.Item key={index}>{item}</List.Item>
                    ))}
                  </List.Root>
                </Box>
              </VStack>
            </Card.Body>
          </Card.Root>
        </Grid>

        <Separator />

        {/* Architecture */}
        <Box>
          <Heading size="lg" mb={6} color="fg">
            {t.vglub.architecture.title}
          </Heading>

          <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={4}>
            {(
              [
                { data: t.vglub.architecture.encryption, color: 'fg.blue' },
                { data: t.vglub.architecture.realtime, color: 'fg.green' },
                { data: t.vglub.architecture.backend, color: 'fg.purple' },
                { data: t.vglub.architecture.infra, color: 'fg.orange' },
              ] as const
            ).map(({ data, color }) => (
              <Card.Root key={data.title} bg="bg" height="100%">
                <Card.Body p={4}>
                  <VStack align="stretch" gap={4}>
                    <Box>
                      <Heading size="sm" color={color} mb={3}>
                        {data.title}
                      </Heading>
                      <Text color="fg.subtle" lineHeight={1.4} fontSize="sm" mb={4}>
                        {data.description}
                      </Text>
                      <List.Root pl={4} gap={1} fontSize="sm">
                        {data.features.map((item, index) => (
                          <List.Item key={index}>{item}</List.Item>
                        ))}
                      </List.Root>
                    </Box>
                  </VStack>
                </Card.Body>
              </Card.Root>
            ))}
          </Grid>
        </Box>

        <Separator />

        {/* AI Features */}
        <Box>
          <Heading size="lg" mb={6} color="fg">
            {t.vglub.aiFeatures.title}
          </Heading>

          <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={4}>
            {(
              [
                { data: t.vglub.aiFeatures.analysis, color: 'fg.blue' },
                { data: t.vglub.aiFeatures.chat, color: 'fg.green' },
                { data: t.vglub.aiFeatures.voice, color: 'fg.purple' },
              ] as const
            ).map(({ data, color }) => (
              <Card.Root key={data.title} bg="bg" height="100%">
                <Card.Body p={4}>
                  <VStack align="stretch" gap={4}>
                    <Box>
                      <Heading size="sm" color={color} mb={3}>
                        {data.title}
                      </Heading>
                      <Text color="fg.subtle" lineHeight={1.4} fontSize="sm" mb={4}>
                        {data.description}
                      </Text>
                      <List.Root pl={4} gap={1} fontSize="sm">
                        {data.features.map((item, index) => (
                          <List.Item key={index}>{item}</List.Item>
                        ))}
                      </List.Root>
                    </Box>
                  </VStack>
                </Card.Body>
              </Card.Root>
            ))}
          </Grid>
        </Box>

        <Separator />

        {/* Screenshots */}
        <Box>
          <Heading size="lg" mb={6} color="fg">
            {t.vglub.screenshots.title}
          </Heading>

          <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={4}>
            {t.vglub.screenshots.items.map(item => (
              <Card.Root
                key={item.id}
                bg="bg"
                overflow="hidden"
                cursor="pointer"
                transition="transform 0.15s ease"
                _hover={{ transform: 'scale(1.01)' }}
                onClick={() => openScreenshot(item.id)}
              >
                <img src={screenshots[item.id].preview} alt={item.title} loading="lazy" style={{ width: '100%', display: 'block' }} />
                <Card.Body p={4}>
                  <Text color="fg.subtle" fontSize="sm">
                    {item.title}
                  </Text>
                </Card.Body>
              </Card.Root>
            ))}
          </Grid>

          {openedScreenshot && (
            <Box
              position="fixed"
              inset={0}
              zIndex={1000}
              bg="blackAlpha.800"
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              gap={3}
              p={3}
              cursor="zoom-out"
              onClick={() => setOpenedScreenshotId(null)}
            >
              <Flex w="100%" justify="flex-end">
                <Button
                  aria-label="Close"
                  size="sm"
                  variant="solid"
                  colorPalette="gray"
                  onClick={event => {
                    event.stopPropagation()
                    setOpenedScreenshotId(null)
                  }}
                >
                  ✕
                </Button>
              </Flex>
              <Box
                ref={scrollAreaRef}
                maxW="100%"
                maxH="75vh"
                overflow="auto"
                css={{
                  scrollbarWidth: 'thin',
                  scrollbarColor: 'rgba(120, 120, 120, 0.6) transparent',
                  '&::-webkit-scrollbar': { width: '8px', height: '8px' },
                  '&::-webkit-scrollbar-track': { background: 'transparent' },
                  '&::-webkit-scrollbar-thumb': { background: 'rgba(120, 120, 120, 0.6)', borderRadius: '4px' },
                  '&::-webkit-scrollbar-thumb:hover': { background: 'rgba(120, 120, 120, 0.85)' },
                  '&::-webkit-scrollbar-corner': { background: 'transparent' },
                }}
                borderRadius={8}
                boxShadow="0 8px 40px rgba(0, 0, 0, 0.6)"
                cursor={zoom > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default'}
                onClick={event => event.stopPropagation()}
                onDoubleClick={stepZoom}
                onPointerDown={onPanStart}
                onPointerMove={onPanMove}
                onPointerUp={onPanEnd}
                onPointerCancel={onPanEnd}
              >
                <Image
                  src={screenshots[openedScreenshot.id].full}
                  alt={openedScreenshot.title}
                  display="block"
                  draggable={false}
                  userSelect="none"
                  {...(zoom > 1 ? { w: `${zoom * 100}%`, maxW: 'none' } : { maxW: '100%', maxH: '75vh' })}
                />
              </Box>
              <HStack gap={3} onClick={event => event.stopPropagation()}>
                <Button size="sm" variant="solid" colorPalette="gray" onClick={zoomOut} disabled={zoom <= MIN_ZOOM} aria-label="Zoom out">
                  −
                </Button>
                <Text color="whiteAlpha.900" fontSize="sm" minW="48px" textAlign="center">
                  {Math.round(zoom * 100)}%
                </Text>
                <Button size="sm" variant="solid" colorPalette="gray" onClick={zoomIn} disabled={zoom >= MAX_ZOOM} aria-label="Zoom in">
                  +
                </Button>
              </HStack>
              <Text color="whiteAlpha.900" fontSize="sm" px={2} textAlign="center">
                {openedScreenshot.title}
              </Text>
            </Box>
          )}
        </Box>

        <Separator />

        {/* Technical Stack */}
        <Box>
          <Heading size="lg" mb={6} color="fg">
            {t.vglub.techStack.title}
          </Heading>

          <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={4}>
            {(
              [
                { data: t.vglub.techStack.frontend, color: 'fg.blue', badgeBg: 'bg.badge.blue' },
                { data: t.vglub.techStack.backend, color: 'fg.green', badgeBg: 'bg.badge.green' },
                { data: t.vglub.techStack.infra, color: 'fg.purple', badgeBg: 'bg.badge.purple' },
              ] as const
            ).map(({ data, color, badgeBg }) => (
              <Card.Root key={data.title} bg="bg">
                <Card.Body p={4}>
                  <Heading size="sm" color={color} mb={3}>
                    {data.title}
                  </Heading>
                  <Flex wrap="wrap" gap={2}>
                    {data.items.map(tech => (
                      <Badge key={tech} colorPalette="gray" variant="solid" fontSize="xs" bg={badgeBg}>
                        {tech}
                      </Badge>
                    ))}
                  </Flex>
                </Card.Body>
              </Card.Root>
            ))}
          </Grid>
        </Box>
      </Stack>
    </Layout>
  )
}
