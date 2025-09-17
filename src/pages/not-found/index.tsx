import React from 'react'
import { Box, Stack, Heading, Text, Button, Image } from '@chakra-ui/react'
import { useNavigate } from 'react-router'
import { Layout } from '../../components/layout'
import { useT } from '../../i18n'
import NotFoundGif from '../../static-resources/images/404.gif'

export const NotFoundPage: React.FC = () => {
  const navigate = useNavigate()
  const t = useT()

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1)
    } else {
      navigate('/')
    }
  }

  return (
    <Layout>
      <Box textAlign="center" py={20}>
        <Stack gap={6} align="center" maxW="md" mx="auto">
          <Heading size="3xl" color="fg" fontWeight="bold">
            {t.notFound.title}
          </Heading>

          <Image src={NotFoundGif} alt="404 Animation" maxW="300px" w="100%" borderRadius="lg" />

          <Text fontSize="lg" color="fg.subtle" lineHeight={1.6}>
            {t.notFound.subtitle}
          </Text>

          <Button size="lg" colorPalette="blue" px={8} py={6} fontSize="lg" onClick={handleBack}>
            {t.notFound.backButton}
          </Button>
        </Stack>
      </Box>
    </Layout>
  )
}
