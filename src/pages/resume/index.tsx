import React from 'react'
import {
  Box,
  Container,
  Stack,
  Heading,
  Text,
  Badge,
  Card,
  Flex,
  Link,
  Separator,
  HStack,
  VStack,
  Grid,
  List,
  Wrap,
  WrapItem,
  chakra,
  SystemStyleObject,
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { useColorMode } from '../../components/color-mode'
import { Layout } from '../../components/layout'
import { useT } from '../../i18n'
import LinkLightIcon from '../../static-resources/icons/link-light.svg'
import LinkDarkIcon from '../../static-resources/icons/link-dark.svg'
import GithubIconExternal from '../../static-resources/icons/github.svg'
import TelegramIconExternal from '../../static-resources/icons/telegram.svg'
import EmailIconExternal from '../../static-resources/icons/email.svg'

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

const ResumeContent = ({ pdf }: { pdf?: boolean }) => {
  const { colorMode } = useColorMode()
  const LinkIcon = colorMode === 'dark' ? LinkDarkIcon : LinkLightIcon

  const pageBreak: SystemStyleObject | undefined = pdf
    ? {
        pageBreakBefore: 'always',
        breakBefore: 'page',
      }
    : undefined

  const t = useT()

  return (
    <Stack gap={8}>
      {/* Header Section */}
      <Box textAlign="center" pt={4}>
        <Heading size="4xl" mb={2} fontWeight="bold" color="fg">
          {t.resume.name}
        </Heading>
        <Text fontSize="xl" color="fg.subtle" lineHeight={1.4} mb={4}>
          {t.resume.jobTitle}
        </Text>
        <HStack justify="center" gapX={6} flexWrap="wrap">
          <LinkComponent href="https://t.me/pbelinovich">
            <TelegramIcon w={4} h={4} fill="fg.blue" />
            pbelinovich
          </LinkComponent>
          <LinkComponent href="https://github.com/pbelinovich">
            <GithubIcon w={4} h={4} fill="fg.blue" />
            pbelinovich
          </LinkComponent>
          <LinkComponent href="mailto:shallowones@yandex.ru">
            <EmailIcon w={4} h={4} fill="fg.blue" />
            shallowones@yandex.ru
          </LinkComponent>
        </HStack>
      </Box>

      <Separator />

      {/* Professional Summary */}
      <Box>
        <Heading size="lg" mb={4} color="fg">
          {t.resume.professionalSummary.title}
        </Heading>
        <Text fontSize="md" lineHeight={1.7} color="fg.subtle">
          {t.resume.professionalSummary.description}
        </Text>
      </Box>

      <Separator />

      {/* Skills Section */}
      <Box>
        <Heading size="lg" mb={6} color="fg">
          {t.resume.keySkills.title}
        </Heading>
        <Grid templateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap={6}>
          <Card.Root p={6} bg="bg.card">
            <Card.Body>
              <Heading size="md" mb={4} color="fg.blue">
                {t.resume.keySkills.frontend}
              </Heading>
              <Flex wrap="wrap" gap={2}>
                {['React', 'TypeScript', 'Redux', 'Web Workers', 'WebSocket', 'SCSS/CSS', 'React Native'].map(skill => (
                  <Badge key={skill} colorPalette="blue" variant="solid" color="gray.50">
                    {skill}
                  </Badge>
                ))}
              </Flex>
            </Card.Body>
          </Card.Root>

          <Card.Root p={6} bg="bg.card">
            <Card.Body>
              <Heading size="md" mb={4} color="fg.green">
                {t.resume.keySkills.backendDatabases}
              </Heading>
              <Flex wrap="wrap" gap={2}>
                {['Node.js', 'Express', 'RavenDB', 'REST API', 'SSE'].map(skill => (
                  <Badge key={skill} colorPalette="green" variant="solid" color="gray.50">
                    {skill}
                  </Badge>
                ))}
              </Flex>
            </Card.Body>
          </Card.Root>

          <Card.Root p={6} bg="bg.card">
            <Card.Body>
              <Heading size="md" mb={4} color="fg.purple">
                {t.resume.keySkills.aiMachineLearning}
              </Heading>
              <Flex wrap="wrap" gap={2}>
                {['Fine-tuning', 'LoRA', 'Ollama', 'Mistral 7B', 'Model Optimization', 'Quantization'].map(skill => (
                  <Badge key={skill} colorPalette="purple" variant="solid" color="gray.50">
                    {skill}
                  </Badge>
                ))}
              </Flex>
            </Card.Body>
          </Card.Root>

          <Card.Root p={6} bg="bg.card">
            <Card.Body>
              <Heading size="md" mb={4} color="fg.orange">
                {t.resume.keySkills.tools}
              </Heading>
              <Flex wrap="wrap" gap={2}>
                {['Webpack', 'Git', 'Docker', 'CI/CD', 'NPM CLI', 'Cursor'].map(skill => (
                  <Badge key={skill} colorPalette="orange" variant="solid" color="gray.50">
                    {skill}
                  </Badge>
                ))}
              </Flex>
            </Card.Body>
          </Card.Root>
        </Grid>
      </Box>

      {/* Experience Section */}
      <Box css={pageBreak}>
        <Heading size="lg" mb={6} color="fg">
          {t.resume.workExperience.title}
        </Heading>

        {/* JTC Senior */}
        <Card.Root mb={8} bg="bg.card">
          <Card.Body p={6}>
            <VStack align="stretch" gap={4}>
              <Box>
                <Heading size="sm" color="fg.subtle" mb={1}>
                  {t.resume.workExperience.jtcSenior.period}
                </Heading>
                <RouterLink to="/jtc">
                  <Link color="fg.blue" fontSize="lg" fontWeight="semibold" mb={1}>
                    {t.resume.workExperience.jtcSenior.position}
                  </Link>
                </RouterLink>
                <Wrap>
                  <WrapItem>
                    <Link href="https://jtc.ooo/" color="fg.subtle" target="_blank">
                      <LinkIcon width={16} height={16} />
                      {t.resume.workExperience.jtcSenior.company}
                    </Link>
                  </WrapItem>
                  <WrapItem>
                    <Text color="fg.subtle">•</Text>
                  </WrapItem>
                  <WrapItem>
                    <Text color="fg.subtle">{t.resume.workExperience.jtcSenior.location}</Text>
                  </WrapItem>
                </Wrap>
              </Box>

              <Box>
                <Heading size="sm" mb={3} color="fg">
                  {t.resume.workExperience.jtcSenior.migration.title}
                </Heading>
                <List.Root pl={4} gap={2}>
                  {t.resume.workExperience.jtcSenior.migration.description.map((item, index) => (
                    <List.Item key={index}>{item}</List.Item>
                  ))}
                </List.Root>
              </Box>

              <Box>
                <Heading size="sm" mb={3} color="fg">
                  {t.resume.workExperience.jtcSenior.frontend.title}
                </Heading>
                <List.Root pl={4} gap={2}>
                  {t.resume.workExperience.jtcSenior.frontend.description.map((item, index) => (
                    <List.Item key={index}>{item}</List.Item>
                  ))}
                </List.Root>
              </Box>

              <Box>
                <Heading size="sm" mb={3} color="fg">
                  {t.resume.workExperience.jtcSenior.integration.title}
                </Heading>
                <List.Root pl={4} gap={2}>
                  {t.resume.workExperience.jtcSenior.integration.description.map((item, index) => (
                    <List.Item key={index}>{item}</List.Item>
                  ))}
                </List.Root>
              </Box>

              <Box>
                <Text fontWeight="semibold" color="fg.subtle">
                  {t.common.techStack}: React, TypeScript, Node.js, RavenDB, Web Workers, SSE, Express, React Native
                </Text>
              </Box>
            </VStack>
          </Card.Body>
        </Card.Root>

        {/* JTC Middle */}
        <Card.Root mb={8} bg="bg.card" css={pageBreak}>
          <Card.Body p={6}>
            <VStack align="stretch" gap={4}>
              <Box>
                <Heading size="sm" color="fg.subtle" mb={1}>
                  {t.resume.workExperience.jtcMiddle.period}
                </Heading>
                <RouterLink to="/jtc">
                  <Link color="fg.blue" fontSize="lg" fontWeight="semibold" mb={1}>
                    {t.resume.workExperience.jtcMiddle.position}
                  </Link>
                </RouterLink>
                <Wrap>
                  <WrapItem>
                    <Link href="https://jtc.ooo/" color="fg.subtle" target="_blank">
                      <LinkIcon width={16} height={16} />
                      {t.resume.workExperience.jtcMiddle.company}
                    </Link>
                  </WrapItem>
                  <WrapItem>
                    <Text color="fg.subtle">•</Text>
                  </WrapItem>
                  <WrapItem>
                    <Text color="fg.subtle">{t.resume.workExperience.jtcMiddle.location}</Text>
                  </WrapItem>
                </Wrap>
              </Box>

              <Box>
                <Heading size="sm" mb={3} color="fg">
                  {t.resume.workExperience.jtcMiddle.dbo.title}
                </Heading>
                <List.Root pl={4} gap={2}>
                  {t.resume.workExperience.jtcMiddle.dbo.description.map((item, index) => (
                    <List.Item key={index}>{item}</List.Item>
                  ))}
                </List.Root>
              </Box>

              <Box>
                <Text fontWeight="semibold" color="fg.subtle">
                  {t.common.techStack}: React, Redux, Redux Form, TypeScript, Crypto-Pro
                </Text>
              </Box>
            </VStack>
          </Card.Body>
        </Card.Root>

        {/* Recifra */}
        <Card.Root bg="bg.card">
          <Card.Body p={6}>
            <VStack align="stretch" gap={4}>
              <Box>
                <Heading size="sm" color="fg.subtle" mb={1}>
                  {t.resume.workExperience.recifra.period}
                </Heading>
                <RouterLink to="/recifra">
                  <Link color="fg.blue" fontSize="lg" fontWeight="semibold" mb={1}>
                    {t.resume.workExperience.recifra.position}
                  </Link>
                </RouterLink>
                <Wrap>
                  <WrapItem>
                    <Link href="https://recifra.ru/" color="fg.subtle" target="_blank">
                      <LinkIcon width={16} height={16} />
                      {t.resume.workExperience.recifra.company}
                    </Link>
                  </WrapItem>
                  <WrapItem>
                    <Text color="fg.subtle">•</Text>
                  </WrapItem>
                  <WrapItem>
                    <Text color="fg.subtle">{t.resume.workExperience.recifra.location}</Text>
                  </WrapItem>
                </Wrap>
              </Box>

              <Box>
                <Heading size="sm" mb={3} color="fg">
                  {t.resume.workExperience.recifra.projects.title}
                </Heading>
                <List.Root pl={4} gap={2}>
                  {t.resume.workExperience.recifra.projects.description.map((item, index) => (
                    <List.Item key={index}>{item}</List.Item>
                  ))}
                </List.Root>
              </Box>

              <Box>
                <Text fontWeight="semibold" color="fg.subtle">
                  {t.common.techStack}: 1С-Битрикс, jQuery, Backbone, Underscore, Cordova, Framework 7
                </Text>
              </Box>
            </VStack>
          </Card.Body>
        </Card.Root>
      </Box>

      {/* Personal Projects */}
      <Box css={pageBreak}>
        <Heading size="lg" mb={6} color="fg">
          {t.resume.personalProjects.title}
        </Heading>

        <Card.Root bg="bg.card">
          <Card.Body p={6}>
            <VStack align="stretch" gap={4}>
              <Box>
                <Flex align="center" justify="space-between" gap={2} mb={3}>
                  <Link href="https://t.me/SmartAICartBot" fontSize="lg" color="fg.blue" fontWeight="600" mb={1} target="_blank">
                    Smart Cart Bot
                  </Link>
                  <Link href="https://github.com/pbelinovich/smart-cart" color="blue.500" fontWeight="medium" target="_blank">
                    <GithubIcon w={4} h={4} fill="fg.blue" />
                    smart-cart
                  </Link>
                </Flex>
                <Text color="fg.subtle" mb={2}>
                  {t.resume.personalProjects.smartCart.description}
                </Text>
              </Box>

              <Box>
                <Heading size="sm" mb={3} color="fg">
                  {t.resume.personalProjects.smartCart.features.title}
                </Heading>
                <List.Root pl={4} gap={2}>
                  {t.resume.personalProjects.smartCart.features.items.map((item, index) => (
                    <List.Item key={index}>{item}</List.Item>
                  ))}
                </List.Root>
              </Box>

              <Box>
                <Text fontWeight="semibold" color="fg.subtle">
                  {t.common.techStack}: Node.js, TypeScript, Express, RavenDB, Mistral 7B, LoRA, Ollama, Telegram API
                </Text>
              </Box>
            </VStack>
          </Card.Body>
        </Card.Root>
      </Box>

      {/* Education */}
      <Box>
        <Heading size="lg" mb={6} color="fg">
          {t.resume.education.title}
        </Heading>

        <Card.Root bg="bg.card">
          <Card.Body p={6}>
            <VStack align="stretch" gap={3}>
              <Box>
                <Heading size="sm" color="fg.subtle" mb={1}>
                  {t.resume.education.university.period}
                </Heading>
                <Link href="https://www.ugrasu.ru/" fontSize="lg" color="fg.blue" fontWeight="600" target="_blank" mb={1}>
                  {t.resume.education.university.name}
                </Link>
                <Text color="fg.subtle" mb={2}>
                  {t.resume.education.university.degree}
                </Text>
              </Box>

              <List.Root pl={4} gap={2}>
                {t.resume.education.university.achievements.map((item, index) => (
                  <List.Item key={index}>{item}</List.Item>
                ))}
              </List.Root>
            </VStack>
          </Card.Body>
        </Card.Root>
      </Box>

      {/* Additional Information */}
      <Box css={pageBreak}>
        <Heading size="lg" mb={6} color="fg">
          {t.resume.additionalInfo.title}
        </Heading>

        <Card.Root bg="bg.card">
          <Card.Body p={6}>
            <VStack align="stretch" gap={4}>
              <Box>
                <Text fontWeight="semibold" mb={2}>
                  {t.resume.additionalInfo.preferences.title}
                </Text>
                <Text>{t.resume.additionalInfo.preferences.description}</Text>
              </Box>

              <Box>
                <Text fontWeight="semibold" mb={2}>
                  {t.resume.additionalInfo.interests.title}
                </Text>
                <Text>{t.resume.additionalInfo.interests.description}</Text>
              </Box>

              <Box>
                <Text fontWeight="semibold" mb={2}>
                  {t.resume.additionalInfo.status.title}
                </Text>
                <Text>{t.resume.additionalInfo.status.description}</Text>
              </Box>
            </VStack>
          </Card.Body>
        </Card.Root>
      </Box>
    </Stack>
  )
}

export const ResumePage = () => {
  return (
    <Layout>
      <ResumeContent />
    </Layout>
  )
}

export const ResumePDF = () => {
  return (
    <Box bg="bg">
      <Container>
        <ResumeContent pdf />
      </Container>
    </Box>
  )
}
