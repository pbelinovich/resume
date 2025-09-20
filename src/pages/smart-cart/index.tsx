import React from 'react'
import { Box, Stack, Heading, Text, Badge, Card, Flex, Separator, VStack, Grid, List, Link, chakra, HStack } from '@chakra-ui/react'
import { Layout, VideoButton } from '../../components'
import { useT } from '../../i18n'
import TelegramIconExternal from '../../static-resources/icons/telegram.svg'
import GithubIconExternal from '../../static-resources/icons/github.svg'

const TelegramIcon = chakra(TelegramIconExternal)
const GithubIcon = chakra(GithubIconExternal)

// Видео-ссылки для демонстрации функционала
const smartCartVideos: Record<string, string> = {
  'simple-flow': 'https://vkvideo.ru/video_ext.php?oid=-232713815&id=456239029&hd=2&hash=96d9564288977d43&autoplay=1',
  'category-filtering': 'https://vkvideo.ru/video_ext.php?oid=-232713815&id=456239030&hd=2&hash=3c95cb0b3825fc06&autoplay=1',
  'city-change': 'https://vkvideo.ru/video_ext.php?oid=-232713815&id=456239031&hd=2&hash=763897d3064d23ce&autoplay=1',
  'product-replacement': 'https://vkvideo.ru/video_ext.php?oid=-232713815&id=456239032&hd=2&hash=6bbaa1150e6fe518&autoplay=1',
}

export const SmartCartPage = () => {
  const t = useT()

  return (
    <Layout>
      <Stack gap={8}>
        {/* Header Section */}
        <Box textAlign="center" pt={4}>
          <Heading size={{ base: '2xl', md: '4xl' }} mb={2} fontWeight="bold" color="fg">
            {t.smartCart.pageTitle}
          </Heading>
          <Text fontSize={{ base: 'sm', md: 'md' }} color="fg.subtle" mb={4}>
            {t.smartCart.subtitle}
          </Text>
          <HStack justify="center" gapX={6} flexWrap="wrap">
            <Link href="https://t.me/smartaicartbot" color="fg.link" fontWeight="medium" target="_blank">
              <TelegramIcon w={4} h={4} fill="fg.blue" />
              smartaicartbot
            </Link>
            <Link href="https://github.com/pbelinovich/smart-cart" color="fg.link" fontWeight="medium" target="_blank">
              <GithubIcon w={4} h={4} fill="fg.blue" />
              pbelinovich/smart-cart
            </Link>
          </HStack>
        </Box>

        <Separator />

        {/* Project Overview */}
        <Box>
          <Heading size="lg" mb={6} color="fg">
            {t.smartCart.overview.title}
          </Heading>

          <Card.Root mb={4} bg="bg">
            <Card.Body p={4}>
              <VStack align="stretch" gap={4}>
                <Box>
                  <Text color="fg.subtle" lineHeight={1.4} mb={3}>
                    {t.smartCart.overview.description}
                  </Text>
                </Box>

                <Box>
                  <Badge colorPalette="gray" variant="outline" size="xs" mb={2} bg="bg.badge">
                    {t.system.goal}
                  </Badge>
                  <Text color="fg" lineHeight={1.4} fontSize="sm">
                    {t.smartCart.overview.goal}
                  </Text>
                </Box>

                <Box>
                  <Badge colorPalette="gray" variant="outline" size="xs" mb={3} bg="bg.badge">
                    {t.system.features}
                  </Badge>
                  <VStack align="left">
                    {t.smartCart.overview.features.map(feature => (
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

        {/* Functionality Demo */}
        <Box>
          <Heading size="lg" mb={6} color="fg">
            {t.smartCart.demo.title}
          </Heading>

          <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={4}>
            <Card.Root bg="bg" height="100%">
              <Card.Body p={4} display="flex" flexDirection="column" height="100%">
                <VStack align="stretch" gap={4} flex="1">
                  <Box>
                    <Heading size="sm" color="fg.blue" mb={3}>
                      {t.smartCart.demo.simpleFlow.title}
                    </Heading>
                    <Text color="fg.subtle" lineHeight={1.4} fontSize="sm" mb={4}>
                      {t.smartCart.demo.simpleFlow.description}
                    </Text>
                  </Box>
                  <Box marginTop="auto">
                    <VideoButton width="100%" embedUrl={smartCartVideos['simple-flow']} buttonColorPalette="blue">
                      {t.common.demo}
                    </VideoButton>
                  </Box>
                </VStack>
              </Card.Body>
            </Card.Root>

            <Card.Root bg="bg" height="100%">
              <Card.Body p={4} display="flex" flexDirection="column" height="100%">
                <VStack align="stretch" gap={4} flex="1">
                  <Box>
                    <Heading size="sm" color="fg.orange" mb={3}>
                      {t.smartCart.demo.categoryFiltering.title}
                    </Heading>
                    <Text color="fg.subtle" lineHeight={1.4} fontSize="sm" mb={4}>
                      {t.smartCart.demo.categoryFiltering.description}
                    </Text>
                  </Box>
                  <Box marginTop="auto">
                    <VideoButton width="100%" embedUrl={smartCartVideos['category-filtering']} buttonColorPalette="orange">
                      {t.common.demo}
                    </VideoButton>
                  </Box>
                </VStack>
              </Card.Body>
            </Card.Root>

            <Card.Root bg="bg" height="100%">
              <Card.Body p={4} display="flex" flexDirection="column" height="100%">
                <VStack align="stretch" gap={4} flex="1">
                  <Box>
                    <Heading size="sm" color="fg.green" mb={3}>
                      {t.smartCart.demo.cityChange.title}
                    </Heading>
                    <Text color="fg.subtle" lineHeight={1.4} fontSize="sm" mb={4}>
                      {t.smartCart.demo.cityChange.description}
                    </Text>
                  </Box>
                  <Box marginTop="auto">
                    <VideoButton width="100%" embedUrl={smartCartVideos['city-change']} buttonColorPalette="green">
                      {t.common.demo}
                    </VideoButton>
                  </Box>
                </VStack>
              </Card.Body>
            </Card.Root>

            <Card.Root bg="bg" height="100%">
              <Card.Body p={4} display="flex" flexDirection="column" height="100%">
                <VStack align="stretch" gap={4} flex="1">
                  <Box>
                    <Heading size="sm" color="fg.purple" mb={3}>
                      {t.smartCart.demo.productReplacement.title}
                    </Heading>
                    <Text color="fg.subtle" lineHeight={1.4} fontSize="sm" mb={4}>
                      {t.smartCart.demo.productReplacement.description}
                    </Text>
                  </Box>
                  <Box marginTop="auto">
                    <VideoButton width="100%" embedUrl={smartCartVideos['product-replacement']} buttonColorPalette="purple">
                      {t.common.demo}
                    </VideoButton>
                  </Box>
                </VStack>
              </Card.Body>
            </Card.Root>
          </Grid>
        </Box>

        <Separator />

        {/* Architecture */}
        <Box>
          <Heading size="lg" mb={6} color="fg">
            {t.smartCart.architecture.title}
          </Heading>

          <Card.Root mb={4} bg="bg">
            <Card.Body p={4}>
              <VStack align="stretch" gap={4}>
                <Box>
                  <Heading size="md" color="fg" lineHeight={1.4} mb={3}>
                    {t.smartCart.architecture.microservices.title}
                  </Heading>

                  <Text color="fg.subtle" lineHeight={1.4} mb={3}>
                    {t.smartCart.architecture.microservices.description}
                  </Text>

                  <Box mb={3}>
                    <Badge colorPalette="gray" variant="solid" size="xs" bg="bg.badge.blue" mb={2}>
                      {t.smartCart.architecture.microservices.backend.title}
                    </Badge>
                    <Text color="fg" lineHeight={1.4} fontSize="sm" mb={2}>
                      {t.smartCart.architecture.microservices.backend.description}
                    </Text>
                    <List.Root pl={4} gap={1} fontSize="sm">
                      {t.smartCart.architecture.microservices.backend.features.map((item, index) => (
                        <List.Item key={index}>{item}</List.Item>
                      ))}
                    </List.Root>
                  </Box>

                  <Box mb={3}>
                    <Badge colorPalette="gray" variant="solid" size="xs" bg="bg.badge.green" mb={2}>
                      {t.smartCart.architecture.microservices.bot.title}
                    </Badge>
                    <Text color="fg" lineHeight={1.4} fontSize="sm" mb={2}>
                      {t.smartCart.architecture.microservices.bot.description}
                    </Text>
                    <List.Root pl={4} gap={1} fontSize="sm">
                      {t.smartCart.architecture.microservices.bot.features.map((item, index) => (
                        <List.Item key={index}>{item}</List.Item>
                      ))}
                    </List.Root>
                  </Box>

                  <Box>
                    <Badge colorPalette="gray" variant="solid" size="xs" bg="bg.badge.purple" mb={2}>
                      {t.smartCart.architecture.microservices.communication.title}
                    </Badge>
                    <Text color="fg" lineHeight={1.4} fontSize="sm" mb={2}>
                      {t.smartCart.architecture.microservices.communication.description}
                    </Text>
                    <List.Root pl={4} gap={1} fontSize="sm">
                      {t.smartCart.architecture.microservices.communication.features.map((item, index) => (
                        <List.Item key={index}>{item}</List.Item>
                      ))}
                    </List.Root>
                  </Box>
                </Box>

                <Box>
                  <Flex wrap="wrap" gap={2}>
                    {['Node.js', 'TypeScript', 'Express', 'Telegraf', 'SSE', 'RavenDB'].map(tech => (
                      <Badge key={tech} colorPalette="gray" variant="outline" fontSize="xs">
                        {tech}
                      </Badge>
                    ))}
                  </Flex>
                </Box>
              </VStack>
            </Card.Body>
          </Card.Root>
        </Box>

        <Separator />

        {/* AI/ML Features */}
        <Box>
          <Heading size="lg" mb={6} color="fg">
            {t.smartCart.aiMl.title}
          </Heading>

          <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={4}>
            <Card.Root bg="bg" height="100%">
              <Card.Body p={4} display="flex" flexDirection="column" height="100%">
                <VStack align="stretch" gap={4} flex="1">
                  <Box>
                    <Heading size="sm" color="fg.blue" mb={3}>
                      {t.smartCart.aiMl.modelTraining.title}
                    </Heading>
                    <Text color="fg.subtle" lineHeight={1.4} fontSize="sm" mb={4}>
                      {t.smartCart.aiMl.modelTraining.description}
                    </Text>
                    <List.Root pl={4} gap={1} fontSize="sm">
                      {t.smartCart.aiMl.modelTraining.features.map((item, index) => (
                        <List.Item key={index}>{item}</List.Item>
                      ))}
                    </List.Root>
                  </Box>
                  <Box marginTop="auto">
                    <Flex wrap="wrap" gap={2}>
                      {['Mistral 7B', 'LoRA', 'Fine-tuning', 'Ollama'].map(tech => (
                        <Badge key={tech} colorPalette="blue" variant="outline" fontSize="xs">
                          {tech}
                        </Badge>
                      ))}
                    </Flex>
                  </Box>
                </VStack>
              </Card.Body>
            </Card.Root>

            <Card.Root bg="bg" height="100%">
              <Card.Body p={4} display="flex" flexDirection="column" height="100%">
                <VStack align="stretch" gap={4} flex="1">
                  <Box>
                    <Heading size="sm" color="fg.green" mb={3}>
                      {t.smartCart.aiMl.nlpProcessing.title}
                    </Heading>
                    <Text color="fg.subtle" lineHeight={1.4} fontSize="sm" mb={4}>
                      {t.smartCart.aiMl.nlpProcessing.description}
                    </Text>
                    <List.Root pl={4} gap={1} fontSize="sm">
                      {t.smartCart.aiMl.nlpProcessing.features.map((item, index) => (
                        <List.Item key={index}>{item}</List.Item>
                      ))}
                    </List.Root>
                  </Box>
                  <Box marginTop="auto">
                    <Flex wrap="wrap" gap={2}>
                      {['JSON Parsing', 'NLP', 'Text Processing'].map(tech => (
                        <Badge key={tech} colorPalette="green" variant="outline" fontSize="xs">
                          {tech}
                        </Badge>
                      ))}
                    </Flex>
                  </Box>
                </VStack>
              </Card.Body>
            </Card.Root>

            <Card.Root bg="bg" height="100%">
              <Card.Body p={4} display="flex" flexDirection="column" height="100%">
                <VStack align="stretch" gap={4} flex="1">
                  <Box>
                    <Heading size="sm" color="fg.purple" mb={3}>
                      {t.smartCart.aiMl.optimization.title}
                    </Heading>
                    <Text color="fg.subtle" lineHeight={1.4} fontSize="sm" mb={4}>
                      {t.smartCart.aiMl.optimization.description}
                    </Text>
                    <List.Root pl={4} gap={1} fontSize="sm">
                      {t.smartCart.aiMl.optimization.features.map((item, index) => (
                        <List.Item key={index}>{item}</List.Item>
                      ))}
                    </List.Root>
                  </Box>
                  <Box marginTop="auto">
                    <Flex wrap="wrap" gap={2}>
                      {['Quantization', 'FP16', 'Q4_K_M'].map(tech => (
                        <Badge key={tech} colorPalette="purple" variant="outline" fontSize="xs">
                          {tech}
                        </Badge>
                      ))}
                    </Flex>
                  </Box>
                </VStack>
              </Card.Body>
            </Card.Root>
          </Grid>
        </Box>

        <Separator />

        {/* Technical Stack */}
        <Box>
          <Heading size="lg" mb={6} color="fg">
            {t.smartCart.techStack.title}
          </Heading>

          <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={4}>
            <Card.Root bg="bg">
              <Card.Body p={4}>
                <Heading size="sm" color="fg.blue" mb={3}>
                  {t.smartCart.techStack.backend.title}
                </Heading>
                <VStack align="stretch" gap={3}>
                  <Box>
                    <Text fontWeight="semibold" fontSize="sm" mb={2}>
                      {t.smartCart.techStack.backend.server}
                    </Text>
                    <Flex wrap="wrap" gap={1}>
                      {['Node.js', 'TypeScript', 'Express'].map(tech => (
                        <Badge key={tech} colorPalette="gray" variant="solid" fontSize="xs" bg="bg.badge.blue">
                          {tech}
                        </Badge>
                      ))}
                    </Flex>
                  </Box>
                  <Box>
                    <Text fontWeight="semibold" fontSize="sm" mb={2}>
                      {t.smartCart.techStack.backend.database}
                    </Text>
                    <Flex wrap="wrap" gap={1}>
                      {['RavenDB'].map(tech => (
                        <Badge key={tech} colorPalette="gray" variant="solid" fontSize="xs" bg="bg.badge.green">
                          {tech}
                        </Badge>
                      ))}
                    </Flex>
                  </Box>
                  <Box>
                    <Text fontWeight="semibold" fontSize="sm" mb={2}>
                      {t.smartCart.techStack.backend.communication}
                    </Text>
                    <Flex wrap="wrap" gap={1}>
                      {['SSE', 'REST API'].map(tech => (
                        <Badge key={tech} colorPalette="gray" variant="solid" fontSize="xs" bg="bg.badge.purple">
                          {tech}
                        </Badge>
                      ))}
                    </Flex>
                  </Box>
                </VStack>
              </Card.Body>
            </Card.Root>

            <Card.Root bg="bg">
              <Card.Body p={4}>
                <Heading size="sm" color="fg.green" mb={3}>
                  {t.smartCart.techStack.bot.title}
                </Heading>
                <VStack align="stretch" gap={3}>
                  <Box>
                    <Text fontWeight="semibold" fontSize="sm" mb={2}>
                      {t.smartCart.techStack.bot.telegram}
                    </Text>
                    <Flex wrap="wrap" gap={1}>
                      {['Telegraf', 'Telegram API'].map(tech => (
                        <Badge key={tech} colorPalette="gray" variant="solid" fontSize="xs" bg="bg.badge.blue">
                          {tech}
                        </Badge>
                      ))}
                    </Flex>
                  </Box>
                  <Box>
                    <Text fontWeight="semibold" fontSize="sm" mb={2}>
                      {t.smartCart.techStack.bot.ai}
                    </Text>
                    <Flex wrap="wrap" gap={1}>
                      {['Mistral 7B', 'Ollama'].map(tech => (
                        <Badge key={tech} colorPalette="gray" variant="solid" fontSize="xs" bg="bg.badge.green">
                          {tech}
                        </Badge>
                      ))}
                    </Flex>
                  </Box>
                  <Box>
                    <Text fontWeight="semibold" fontSize="sm" mb={2}>
                      {t.smartCart.techStack.bot.integrations}
                    </Text>
                    <Flex wrap="wrap" gap={1}>
                      {['Retail APIs', 'Price Parsing'].map(tech => (
                        <Badge key={tech} colorPalette="gray" variant="solid" fontSize="xs" bg="bg.badge.orange">
                          {tech}
                        </Badge>
                      ))}
                    </Flex>
                  </Box>
                </VStack>
              </Card.Body>
            </Card.Root>

            <Card.Root bg="bg">
              <Card.Body p={4}>
                <Heading size="sm" color="fg.purple" mb={3}>
                  {t.smartCart.techStack.development.title}
                </Heading>
                <Flex wrap="wrap" gap={2}>
                  {t.smartCart.techStack.development.tools.map(tool => (
                    <Badge key={tool} colorPalette="purple" variant="outline" fontSize="xs">
                      {tool}
                    </Badge>
                  ))}
                </Flex>
              </Card.Body>
            </Card.Root>
          </Grid>
        </Box>
      </Stack>
    </Layout>
  )
}
