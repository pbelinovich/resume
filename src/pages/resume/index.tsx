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
  Button,
} from '@chakra-ui/react'
import { CLink, Layout } from '../../components'
import { useColorMode } from '../../components/color-mode'
import { useT } from '../../i18n'
import LinkLightIcon from '../../static-resources/icons/link-light.svg'
import LinkDarkIcon from '../../static-resources/icons/link-dark.svg'
import GithubIconExternal from '../../static-resources/icons/github.svg'
import TelegramIconExternal from '../../static-resources/icons/telegram.svg'
import EmailIconExternal from '../../static-resources/icons/email.svg'
import RightIconExternal from '../../static-resources/icons/right.svg'

const GithubIcon = chakra(GithubIconExternal)
const TelegramIcon = chakra(TelegramIconExternal)
const EmailIcon = chakra(EmailIconExternal)
const RightIcon = chakra(RightIconExternal)

const LinkComponent = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <Link href={href} color="fg.link" fontSize="sm" fontWeight="medium" target="_blank">
      {children}
    </Link>
  )
}

const ResumeContent = ({ pdf }: { pdf?: boolean }) => {
  const { colorMode } = useColorMode()
  const t = useT()

  const LinkIcon = colorMode === 'dark' ? LinkDarkIcon : LinkLightIcon
  const pageBreak: SystemStyleObject | undefined = pdf
    ? {
        pageBreakBefore: 'always',
        breakBefore: 'page',
      }
    : undefined

  return (
    <Stack gap={8}>
      {/* Header Section */}
      <Box textAlign="center" pt={4}>
        <Heading size={{ base: '2xl', sm: '3xl', md: '4xl' }} mb={2} fontWeight="bold" color="fg">
          {t.resume.name}
        </Heading>
        <Text fontSize={{ base: 'sm', sm: 'lg', md: 'xl' }} color="fg.subtle" lineHeight={1.4} mb={4}>
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
        <Text fontSize={{ base: 'sm', md: 'md' }} lineHeight={1.7} color="fg.subtle">
          {t.resume.professionalSummary.description}
        </Text>
      </Box>

      <Separator />

      {/* Key skills */}
      <Box>
        <Heading size="lg" mb={6} color="fg">
          {t.resume.keySkills.title}
        </Heading>
        <Grid templateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap={6}>
          <Card.Root p={{ base: 0, md: 6 }} justifyContent={{ base: 'center', md: 'flex-start' }} bg="bg.card">
            <Card.Body>
              <Heading size="md" mb={4} color="fg.blue">
                {t.resume.keySkills.frontend}
              </Heading>
              <Flex wrap="wrap" gap={2}>
                {['React', 'TypeScript', 'Redux', 'Web Workers', 'WebSocket', 'SCSS/CSS', 'React Native'].map(skill => (
                  <Badge key={skill} colorPalette="gray" variant="solid" bg="bg.badge.blue">
                    {skill}
                  </Badge>
                ))}
              </Flex>
            </Card.Body>
          </Card.Root>

          <Card.Root p={{ base: 0, md: 6 }} justifyContent={{ base: 'center', md: 'flex-start' }} bg="bg.card">
            <Card.Body>
              <Heading size="md" mb={4} color="fg.green">
                {t.resume.keySkills.backendDatabases}
              </Heading>
              <Flex wrap="wrap" gap={2}>
                {['Node.js', 'Express', 'RavenDB', 'REST API', 'SSE'].map(skill => (
                  <Badge key={skill} colorPalette="gray" variant="solid" bg="bg.badge.green">
                    {skill}
                  </Badge>
                ))}
              </Flex>
            </Card.Body>
          </Card.Root>

          <Card.Root p={{ base: 0, md: 6 }} justifyContent={{ base: 'center', md: 'flex-start' }} bg="bg.card">
            <Card.Body>
              <Heading size="md" mb={4} color="fg.purple">
                {t.resume.keySkills.aiMachineLearning}
              </Heading>
              <Flex wrap="wrap" gap={2}>
                {['Fine-tuning', 'LoRA', 'Ollama', 'Mistral 7B', 'Model Optimization', 'Quantization'].map(skill => (
                  <Badge key={skill} colorPalette="gray" variant="solid" bg="bg.badge.purple">
                    {skill}
                  </Badge>
                ))}
              </Flex>
            </Card.Body>
          </Card.Root>

          <Card.Root p={{ base: 0, md: 6 }} justifyContent={{ base: 'center', md: 'flex-start' }} bg="bg.card">
            <Card.Body>
              <Heading size="md" mb={4} color="fg.orange">
                {t.resume.keySkills.tools}
              </Heading>
              <Flex wrap="wrap" gap={2}>
                {['Webpack', 'Git', 'Docker', 'CI/CD', 'NPM CLI', 'Cursor'].map(skill => (
                  <Badge key={skill} colorPalette="gray" variant="solid" bg="bg.badge.orange">
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
                <Flex align="start" justify="space-between" mb={1} gap={4}>
                  <Box>
                    <Heading display={{ base: 'none', md: 'block' }} size="sm" color="fg.subtle" mb={1}>
                      {t.resume.workExperience.jtcSenior.period}
                    </Heading>
                    <Heading display={{ base: 'block', md: 'none' }} size="sm" color="fg.subtle" mb={1}>
                      {t.resume.workExperience.jtcSenior.periodShort}
                    </Heading>
                    <CLink to="/jtc" pdf={pdf} color="fg.blue" fontSize={{ base: 'md', md: 'lg' }} fontWeight="semibold">
                      {t.resume.workExperience.jtcSenior.position}
                    </CLink>
                  </Box>
                  <CLink to="/jtc" pdf={pdf} _hover={{ textDecoration: 'none' }}>
                    <Button
                      variant="outline"
                      colorPalette="blue"
                      fontSize="xs"
                      fontWeight="medium"
                      color="fg.blue"
                      gap={1}
                      size="xs"
                      mb={1}
                    >
                      <Box display={{ base: 'none', md: 'block' }}>{t.system.more}</Box>
                      <RightIcon w={3} h={3} fill="fg.blue" />
                    </Button>
                  </CLink>
                </Flex>

                <Wrap display={{ base: 'block', md: 'flex' }}>
                  <WrapItem>
                    <Link href="https://jtc.ooo/" color="fg.subtle" fontSize={{ base: 'xs', md: 'sm' }} target="_blank">
                      <Box display={{ base: 'none', md: 'block' }}>
                        <LinkIcon width={16} height={16} />
                      </Box>
                      {t.resume.workExperience.jtcSenior.company}
                    </Link>
                  </WrapItem>
                  <WrapItem display={{ base: 'none', md: 'flex' }}>
                    <Text color="fg.subtle" fontSize={{ base: 'xs', md: 'sm' }}>
                      •
                    </Text>
                  </WrapItem>
                  <WrapItem>
                    <Text color="fg.subtle" fontSize={{ base: 'xs', md: 'sm' }} fontStyle="italic">
                      {t.resume.workExperience.jtcSenior.location}
                    </Text>
                  </WrapItem>
                </Wrap>
              </Box>

              <Box>
                <Heading size="sm" mb={3} color="fg">
                  {t.resume.workExperience.jtcSenior.migration.title}
                </Heading>
                <List.Root pl={4} gap={1}>
                  {t.resume.workExperience.jtcSenior.migration.description.map((item, index) => (
                    <List.Item key={index}>
                      <Text fontSize="sm">{item}</Text>
                    </List.Item>
                  ))}
                </List.Root>
              </Box>

              <Box>
                <Heading size="sm" mb={3} color="fg">
                  {t.resume.workExperience.jtcSenior.frontend.title}
                </Heading>
                <List.Root pl={4} gap={1}>
                  {t.resume.workExperience.jtcSenior.frontend.description.map((item, index) => (
                    <List.Item key={index}>
                      <Text fontSize="sm">{item}</Text>
                    </List.Item>
                  ))}
                </List.Root>
              </Box>

              <Box>
                <Heading size="sm" mb={3} color="fg">
                  {t.resume.workExperience.jtcSenior.integration.title}
                </Heading>
                <List.Root pl={4} gap={1}>
                  {t.resume.workExperience.jtcSenior.integration.description.map((item, index) => (
                    <List.Item key={index}>
                      <Text fontSize="sm">{item}</Text>
                    </List.Item>
                  ))}
                </List.Root>
              </Box>

              <Box>
                <Flex wrap="wrap" gap={2}>
                  {['React', 'TypeScript', 'Node.js', 'RavenDB', 'Web Workers', 'SSE', 'Express', 'React Native'].map(skill => (
                    <Badge key={skill} colorPalette="gray" variant="outline" fontSize="xs">
                      {skill}
                    </Badge>
                  ))}
                </Flex>
              </Box>
            </VStack>
          </Card.Body>
        </Card.Root>

        {/* JTC Middle */}
        <Card.Root mb={8} bg="bg.card" css={pageBreak}>
          <Card.Body p={6}>
            <VStack align="stretch" gap={4}>
              <Box>
                <Flex align="start" justify="space-between" gap={4}>
                  <Box>
                    <Heading display={{ base: 'none', md: 'block' }} size="sm" color="fg.subtle" mb={1}>
                      {t.resume.workExperience.jtcMiddle.period}
                    </Heading>
                    <Heading display={{ base: 'block', md: 'none' }} size="sm" color="fg.subtle" mb={1}>
                      {t.resume.workExperience.jtcMiddle.periodShort}
                    </Heading>

                    <CLink to="/jtc" pdf={pdf} color="fg.blue" fontSize={{ base: 'md', md: 'lg' }} fontWeight="semibold" mb={1}>
                      {t.resume.workExperience.jtcMiddle.position}
                    </CLink>
                  </Box>
                  <CLink to="/jtc" pdf={pdf} _hover={{ textDecoration: 'none' }}>
                    <Button variant="outline" colorPalette="blue" fontSize="xs" fontWeight="medium" color="fg.blue" gap={1} size="xs">
                      <Box display={{ base: 'none', md: 'block' }}>{t.system.more}</Box>
                      <RightIcon w={3} h={3} fill="fg.blue" />
                    </Button>
                  </CLink>
                </Flex>

                <Wrap display={{ base: 'block', md: 'flex' }}>
                  <WrapItem>
                    <Link href="https://jtc.ooo/" color="fg.subtle" fontSize={{ base: 'xs', md: 'sm' }} target="_blank">
                      <Box display={{ base: 'none', md: 'block' }}>
                        <LinkIcon width={16} height={16} />
                      </Box>
                      {t.resume.workExperience.jtcMiddle.company}
                    </Link>
                  </WrapItem>
                  <WrapItem display={{ base: 'none', md: 'flex' }}>
                    <Text color="fg.subtle" fontSize={{ base: 'xs', md: 'sm' }}>
                      •
                    </Text>
                  </WrapItem>
                  <WrapItem>
                    <Text color="fg.subtle" fontSize={{ base: 'xs', md: 'sm' }} fontStyle="italic">
                      {t.resume.workExperience.jtcMiddle.location}
                    </Text>
                  </WrapItem>
                </Wrap>
              </Box>

              <Box>
                <Heading size="sm" mb={3} color="fg">
                  {t.resume.workExperience.jtcMiddle.dbo.title}
                </Heading>
                <List.Root pl={4} gap={1}>
                  {t.resume.workExperience.jtcMiddle.dbo.description.map((item, index) => (
                    <List.Item key={index}>
                      <Text fontSize="sm">{item}</Text>
                    </List.Item>
                  ))}
                </List.Root>
              </Box>

              <Box>
                <Flex wrap="wrap" gap={2}>
                  {['React', 'Redux', 'Redux Form', 'TypeScript', t.common.cryptoPro].map(skill => (
                    <Badge key={skill} colorPalette="gray" variant="outline" fontSize="xs">
                      {skill}
                    </Badge>
                  ))}
                </Flex>
              </Box>
            </VStack>
          </Card.Body>
        </Card.Root>

        {/* Recifra */}
        <Card.Root bg="bg.card">
          <Card.Body p={6}>
            <VStack align="stretch" gap={4}>
              <Box>
                <Flex align="start" justify="space-between" gap={2}>
                  <Box>
                    <Heading display={{ base: 'none', md: 'block' }} size="sm" color="fg.subtle" mb={1}>
                      {t.resume.workExperience.recifra.period}
                    </Heading>
                    <Heading display={{ base: 'block', md: 'none' }} size="sm" color="fg.subtle" mb={1}>
                      {t.resume.workExperience.recifra.periodShort}
                    </Heading>

                    <CLink to="/recifra" pdf={pdf} color="fg.blue" fontSize={{ base: 'md', md: 'lg' }} fontWeight="semibold" mb={1}>
                      {t.resume.workExperience.recifra.position}
                    </CLink>
                  </Box>
                  <CLink to="/recifra" pdf={pdf} _hover={{ textDecoration: 'none' }}>
                    <Button variant="outline" colorPalette="blue" fontSize="xs" fontWeight="medium" color="fg.blue" gap={1} size="xs">
                      <Box display={{ base: 'none', md: 'block' }}>{t.system.more}</Box>
                      <RightIcon w={3} h={3} fill="fg.blue" />
                    </Button>
                  </CLink>
                </Flex>

                <Wrap display={{ base: 'block', md: 'flex' }}>
                  <WrapItem>
                    <Link href="https://recifra.ru/" color="fg.subtle" fontSize={{ base: 'xs', md: 'sm' }} target="_blank">
                      <Box display={{ base: 'none', md: 'block' }}>
                        <LinkIcon width={16} height={16} />
                      </Box>
                      {t.resume.workExperience.recifra.company}
                    </Link>
                  </WrapItem>
                  <WrapItem display={{ base: 'none', md: 'flex' }}>
                    <Text color="fg.subtle" fontSize="sm">
                      •
                    </Text>
                  </WrapItem>
                  <WrapItem>
                    <Text color="fg.subtle" fontSize={{ base: 'xs', md: 'sm' }} fontStyle="italic">
                      {t.resume.workExperience.recifra.location}
                    </Text>
                  </WrapItem>
                </Wrap>
              </Box>

              <Box>
                <Heading size="sm" mb={3} color="fg">
                  {t.resume.workExperience.recifra.projects.title}
                </Heading>
                <List.Root pl={4} gap={1}>
                  {t.resume.workExperience.recifra.projects.description.map((item, index) => (
                    <List.Item key={index}>
                      <Text fontSize="sm">{item}</Text>
                    </List.Item>
                  ))}
                </List.Root>
              </Box>

              <Box>
                <Flex wrap="wrap" gap={2}>
                  {[t.common.bitrix, 'jQuery', 'Backbone', 'Underscore', 'Cordova', 'Framework 7'].map(skill => (
                    <Badge key={skill} colorPalette="gray" variant="outline" fontSize="xs">
                      {skill}
                    </Badge>
                  ))}
                </Flex>
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
                <Flex display={{ base: 'block', md: 'flex' }} alignItems="start" justifyContent="space-between" gap={2}>
                  <VStack align="start" justify="start" mb={{ base: 4, md: 0 }}>
                    <Link
                      href="https://t.me/SmartAICartBot"
                      fontSize={{ base: 'md', md: 'lg' }}
                      color="fg.blue"
                      fontWeight="600"
                      mb={1}
                      target="_blank"
                    >
                      Smart Cart Bot
                    </Link>
                    <Text color="fg.subtle" fontSize={{ base: 'xs', md: 'sm' }}>
                      {t.resume.personalProjects.smartCart.description}
                    </Text>
                  </VStack>
                  <VStack align="start" justify="start">
                    <LinkComponent href="https://t.me/SmartAICartBot">
                      <TelegramIcon w={4} h={4} fill="fg.blue" />
                      smartaicartbot
                    </LinkComponent>
                    <LinkComponent href="https://github.com/pbelinovich/smart-cart">
                      <GithubIcon w={4} h={4} fill="fg.blue" />
                      smart-cart
                    </LinkComponent>
                  </VStack>
                </Flex>
              </Box>

              <Box>
                <Heading size="sm" mb={3} color="fg">
                  {t.resume.personalProjects.smartCart.features.title}
                </Heading>
                <List.Root pl={4} gap={1}>
                  {t.resume.personalProjects.smartCart.features.items.map((item, index) => (
                    <List.Item key={index}>
                      <Text fontSize="sm">{item}</Text>
                    </List.Item>
                  ))}
                </List.Root>
              </Box>

              <Box>
                <Flex wrap="wrap" gap={2}>
                  {['Node.js', 'TypeScript', 'Express', 'RavenDB', 'Mistral 7B', 'LoRA', 'Ollama', 'Telegram API'].map(skill => (
                    <Badge key={skill} colorPalette="gray" variant="outline" fontSize="xs">
                      {skill}
                    </Badge>
                  ))}
                </Flex>
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
            <VStack align="stretch" gap={4}>
              <Box>
                <Heading display={{ base: 'none', md: 'block' }} size="sm" color="fg.subtle" mb={1}>
                  {t.resume.education.university.period}
                </Heading>
                <Heading display={{ base: 'block', md: 'none' }} size="sm" color="fg.subtle" mb={1}>
                  {t.resume.education.university.periodShort}
                </Heading>
                <Link
                  href="https://www.ugrasu.ru/"
                  fontSize={{ base: 'md', md: 'lg' }}
                  color="fg.blue"
                  fontWeight="600"
                  target="_blank"
                  mb={1}
                >
                  {t.resume.education.university.name}
                </Link>
                <Text color="fg.subtle" fontSize={{ base: 'xs', md: 'sm' }}>
                  {t.resume.education.university.degree}
                </Text>
              </Box>

              <List.Root pl={4} gap={1}>
                {t.resume.education.university.achievements.map((item, index) => (
                  <List.Item key={index}>
                    <Text fontSize="sm">{item}</Text>
                  </List.Item>
                ))}
              </List.Root>

              <Box>
                <Flex wrap="wrap" gap={2}>
                  {['Backbone.js', 'Underscore.js', 'jQuery', 'Cordova', 'Framework 7', 'HTML/CSS', 'JavaScript'].map(skill => (
                    <Badge key={skill} colorPalette="gray" variant="outline" fontSize="xs">
                      {skill}
                    </Badge>
                  ))}
                </Flex>
              </Box>
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
                <Text fontWeight="semibold" fontSize="sm" mb={2}>
                  {t.resume.additionalInfo.preferences.title}
                </Text>
                <Text fontSize="sm">{t.resume.additionalInfo.preferences.description}</Text>
              </Box>

              <Box>
                <Text fontWeight="semibold" fontSize="sm" mb={2}>
                  {t.resume.additionalInfo.interests.title}
                </Text>
                <Text fontSize="sm">{t.resume.additionalInfo.interests.description}</Text>
              </Box>

              <Box>
                <Text fontWeight="semibold" fontSize="sm" mb={2}>
                  {t.resume.additionalInfo.status.title}
                </Text>
                <Text fontSize="sm">{t.resume.additionalInfo.status.description}</Text>
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
