import React from 'react'
import { Box, Stack, Heading, Text, Link, HStack, VStack, Image, Flex, chakra } from '@chakra-ui/react'
import { Layout } from '../../components/layout'
import { useT } from '../../i18n'
import GithubIconExternal from '../../static-resources/icons/github.svg'
import TelegramIconExternal from '../../static-resources/icons/telegram.svg'
import EmailIconExternal from '../../static-resources/icons/email.svg'
import ProfileImage from '../../static-resources/images/me-circle-min.png'

const GithubIcon = chakra(GithubIconExternal)
const TelegramIcon = chakra(TelegramIconExternal)
const EmailIcon = chakra(EmailIconExternal)

const LinkComponent = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <Link href={href} color="fg.link" fontWeight="medium" target="_blank">
      {children}
    </Link>
  )
}

export const AboutPage: React.FC = () => {
  const t = useT()

  return (
    <Layout>
      <Stack gap={8}>
        {/* Header */}
        <Box textAlign="center" pt={4}>
          <Heading size="4xl" fontWeight="bold" color="fg" mb={2}>
            {t.about.pageTitle}
          </Heading>
        </Box>

        {/* Main Content: Links Left, Photo Right */}
        <Flex gap={12} align="start" direction={{ base: 'column', md: 'row' }}>
          {/* Left Side: About & Links */}
          <VStack flex={1} align="start" gap={8}>
            {/* About Section */}
            <Box>
              <VStack align="start" gap={4}>
                {t.about.paragraphs.map((paragraph, pIndex) => (
                  <Box key={pIndex}>
                    {paragraph.map((line, index) => (
                      <Text
                        key={index}
                        as="span"
                        fontWeight={line.kind === 'strong' ? 'bold' : 'normal'}
                        fontSize="md"
                        lineHeight={1.7}
                        color="fg.subtle"
                      >
                        {line.text}
                      </Text>
                    ))}
                  </Box>
                ))}
              </VStack>
            </Box>
          </VStack>

          {/* Right Side: Photo */}
          <Box flex="0 0 auto">
            <Image src={ProfileImage} alt={t.resume.name} boxSize={{ base: '200px', md: '300px' }} borderRadius="100%" fit="cover" />
          </Box>
        </Flex>

        {/* Contact Links */}
        <Box>
          <Heading size="lg" mb={4} color="fg">
            {t.common.connection}
          </Heading>
          <Flex align="end" justify="space-between">
            <VStack align="start" gap={4}>
              <LinkComponent href="https://t.me/pbelinovich">
                <HStack gap={3}>
                  <TelegramIcon w={5} h={5} fill="fg.blue" />
                  <Text fontSize="lg">@pbelinovich</Text>
                </HStack>
              </LinkComponent>

              <LinkComponent href="https://github.com/pbelinovich">
                <HStack gap={3}>
                  <GithubIcon w={5} h={5} fill="fg.blue" />
                  <Text fontSize="lg">github.com/pbelinovich</Text>
                </HStack>
              </LinkComponent>

              <LinkComponent href="mailto:shallowones@yandex.ru">
                <HStack gap={3}>
                  <EmailIcon w={5} h={5} fill="fg.blue" />
                  <Text fontSize="lg">shallowones@yandex.ru</Text>
                </HStack>
              </LinkComponent>
            </VStack>
            <Text fontSize="sm" color="fg.subtle" lineHeight={1.4} style={{ opacity: 0.1 }} textAlign="right">
              {t.about.contactNote}
            </Text>
          </Flex>
        </Box>
      </Stack>
    </Layout>
  )
}
