import React from 'react'
import { Box, Stack, Heading, Text, Badge, Card, Flex, Separator, VStack, Grid, List, Link } from '@chakra-ui/react'
import { ClLogo, Layout, VideoButton, VideoLink, useColorMode } from '../../components'
import { useT } from '../../i18n'
import LinkLightIcon from '../../static-resources/icons/link-light.svg'
import LinkDarkIcon from '../../static-resources/icons/link-dark.svg'

// Видео-ссылки не зависят от языка
const expEditorVideos: Record<string, string> = {
  'smart-suggestions': 'https://vkvideo.ru/video_ext.php?oid=-232713815&id=456239017&hd=2&hash=4d676d31debfbe18&autoplay=1',
  'real-time-validation': 'https://vkvideo.ru/video_ext.php?oid=-232713815&id=456239018&hd=2&hash=b9018feb07685f2c&autoplay=1',
  'dom-elements': 'https://vkvideo.ru/video_ext.php?oid=-232713815&id=456239019&hd=2&hash=3c94c3779e3e03b3&autoplay=1',
  performance: 'https://vkvideo.ru/video_ext.php?oid=-232713815&id=456239020&hd=2&hash=5674ab716ffc8c02&autoplay=1',
  'typing-context': 'https://vkvideo.ru/video_ext.php?oid=-232713815&id=456239021&hd=2&hash=eafad5dc5f0c29d0&autoplay=1',
  responsive: 'https://vkvideo.ru/video_ext.php?oid=-232713815&id=456239022&hd=2&hash=d34445da5019be7f&autoplay=1',
  'font-scaling': 'https://vkvideo.ru/video_ext.php?oid=-232713815&id=456239023&hd=2&hash=ec806904d79df976&autoplay=1',
  'copy-paste': 'https://vkvideo.ru/video_ext.php?oid=-232713815&id=456239024&hd=2&hash=b991ebda7ffc35ee&autoplay=1',
}

export const JTCPage = () => {
  const { colorMode } = useColorMode()
  const LinkIcon = colorMode === 'light' ? LinkLightIcon : LinkDarkIcon
  const t = useT()

  return (
    <Layout>
      <Stack gap={8}>
        {/* Header Section */}
        <Box textAlign="center" pt={4}>
          <Heading size={{ base: '2xl', md: '4xl' }} mb={2} fontWeight="bold" color="fg">
            {t.jtc.pageTitle}
          </Heading>
          <Text fontSize={{ base: 'sm', md: 'md' }} color="fg.subtle" mb={4}>
            {t.jtc.company}
          </Text>
          <Link href="https://jtc.ooo/" color="fg.link" fontWeight="medium" target="_blank">
            <LinkIcon width={16} height={16} />
            jtc.ooo
          </Link>
        </Box>

        <Separator />

        {/* Work Periods */}
        <Box>
          <Heading size="lg" mb={6} color="fg">
            {t.common.workPeriods}
          </Heading>
          <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={4}>
            <Card.Root bg="bg">
              <Card.Body p={4} gap={{ base: 1, md: 3 }}>
                <Heading size="sm" color="fg.subtle" display={{ base: 'none', md: 'block' }}>
                  {t.jtc.workPeriods.senior.period}
                </Heading>
                <Heading size="sm" color="fg.subtle" display={{ base: 'block', md: 'none' }}>
                  {t.jtc.workPeriods.senior.periodShort}
                </Heading>
                <Text fontSize={{ base: 'sm', md: 'lg' }} fontWeight="semibold" color="fg">
                  {t.jtc.workPeriods.senior.position}
                </Text>
              </Card.Body>
            </Card.Root>
            <Card.Root bg="bg">
              <Card.Body p={4} gap={{ base: 1, md: 3 }}>
                <Heading size="sm" color="fg.subtle" display={{ base: 'none', md: 'block' }}>
                  {t.jtc.workPeriods.middle.period}
                </Heading>
                <Heading size="sm" color="fg.subtle" display={{ base: 'block', md: 'none' }}>
                  {t.jtc.workPeriods.middle.periodShort}
                </Heading>
                <Text fontSize={{ base: 'sm', md: 'lg' }} fontWeight="semibold" color="fg">
                  {t.jtc.workPeriods.middle.position}
                </Text>
              </Card.Body>
            </Card.Root>
          </Grid>
        </Box>

        <Separator />

        {/* CMS CODELESS */}
        <Box>
          <Box display="flex" alignItems="center" gap={1.5} mb={6}>
            <ClLogo />
            <Heading size="lg" color="fg">
              {t.jtc.codeless.title}
            </Heading>
          </Box>

          {/* Expression Editor */}
          <Card.Root mb={4} bg="bg">
            <Card.Body p={4}>
              <VStack align="stretch" gap={4}>
                <Box>
                  <Heading size="md" color="fg" lineHeight={1.4} mb={3}>
                    {t.jtc.codeless.expressionEditor.title}
                  </Heading>

                  <Text color="fg.subtle" lineHeight={1.4} mb={3}>
                    {t.jtc.codeless.expressionEditor.description}
                  </Text>

                  <Box>
                    <Badge colorPalette="gray" variant="outline" size="xs" mb={2} bg="bg.badge">
                      {t.system.goal}
                    </Badge>
                    <Text color="fg" lineHeight={1.4} fontSize="sm">
                      {t.jtc.codeless.expressionEditor.goal}
                    </Text>
                  </Box>
                </Box>

                <Box>
                  <Badge colorPalette="gray" variant="outline" size="xs" mb={3} bg="bg.badge">
                    {t.system.features}
                  </Badge>
                  <VStack align="left">
                    {t.jtc.codeless.expressionEditor.features.map(feature => (
                      <VideoLink key={feature.id} embedUrl={expEditorVideos[feature.id]}>
                        {feature.title}
                      </VideoLink>
                    ))}
                  </VStack>
                </Box>

                <Separator />

                <Box>
                  <Grid templateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap={4}>
                    <Box>
                      <Badge colorPalette="gray" variant="outline" size="xs" mb={2} bg="bg.badge">
                        {t.jtc.codeless.expressionEditor.validation.title}
                      </Badge>
                      <List.Root pl={4} gap={1} fontSize="sm">
                        {t.jtc.codeless.expressionEditor.validation.items.map((item, index) => (
                          <List.Item key={index}>{item}</List.Item>
                        ))}
                      </List.Root>
                    </Box>
                    <Box>
                      <Badge colorPalette="gray" variant="outline" size="xs" mb={2} bg="bg.badge">
                        {t.jtc.codeless.expressionEditor.domArchitecture.title}
                      </Badge>
                      <List.Root pl={4} gap={1} fontSize="sm">
                        {t.jtc.codeless.expressionEditor.domArchitecture.items.map((item, index) => (
                          <List.Item key={index}>{item}</List.Item>
                        ))}
                      </List.Root>
                    </Box>
                    <Box>
                      <Badge colorPalette="gray" variant="outline" size="xs" mb={2} bg="bg.badge">
                        {t.jtc.codeless.expressionEditor.typing.title}
                      </Badge>
                      <List.Root pl={4} gap={1} fontSize="sm">
                        {t.jtc.codeless.expressionEditor.typing.items.map((item, index) => (
                          <List.Item key={index}>{item}</List.Item>
                        ))}
                      </List.Root>
                    </Box>
                    <Box>
                      <Badge colorPalette="gray" variant="outline" size="xs" mb={2} bg="bg.badge">
                        {t.jtc.codeless.expressionEditor.optimization.title}
                      </Badge>
                      <List.Root pl={4} gap={1} fontSize="sm">
                        {t.jtc.codeless.expressionEditor.optimization.items.map((item, index) => (
                          <List.Item key={index}>{item}</List.Item>
                        ))}
                      </List.Root>
                    </Box>
                  </Grid>
                </Box>

                <Separator />

                <Box>
                  <Flex wrap="wrap" gap={2}>
                    {['React', 'TypeScript'].map(tech => (
                      <Badge key={tech} colorPalette="gray" variant="outline" fontSize="xs">
                        {tech}
                      </Badge>
                    ))}
                  </Flex>
                </Box>
              </VStack>
            </Card.Body>
          </Card.Root>

          {/* Other Systems */}
          <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={4} mb={4}>
            {/* Config Comparison */}
            <Card.Root bg="bg" height="100%">
              <Card.Body p={4} display="flex" flexDirection="column" height="100%">
                <VStack align="stretch" gap={4} flex="1">
                  <Box>
                    <Heading size="sm" color="fg.blue" mb={4}>
                      {t.jtc.codeless.configComparison.title}
                    </Heading>
                    <Text color="fg.subtle" lineHeight={1.4} fontSize="sm" mb={4}>
                      {t.jtc.codeless.configComparison.description}
                    </Text>
                    <List.Root pl={4} gap={1} fontSize="sm">
                      {t.jtc.codeless.configComparison.items.map((item, index) => (
                        <List.Item key={index}>{item}</List.Item>
                      ))}
                    </List.Root>
                  </Box>
                  <Box marginTop="auto">
                    <Flex wrap="wrap" gap={2}>
                      {['TypeScript', 'Web Workers'].map(tech => (
                        <Badge key={tech} colorPalette="gray" variant="outline" fontSize="xs">
                          {tech}
                        </Badge>
                      ))}
                    </Flex>
                  </Box>
                  <Box>
                    <VideoButton
                      width="100%"
                      embedUrl="https://vkvideo.ru/video_ext.php?oid=-232713815&id=456239025&hd=2&hash=8b2b7f927c189873&autoplay=1"
                    >
                      {t.common.demo}
                    </VideoButton>
                  </Box>
                </VStack>
              </Card.Body>
            </Card.Root>

            {/* Usages System */}
            <Card.Root bg="bg" height="100%">
              <Card.Body p={4} display="flex" flexDirection="column" height="100%">
                <VStack align="stretch" gap={4} flex="1">
                  <Box>
                    <Heading size="sm" color="fg.green" mb={4}>
                      {t.jtc.codeless.usagesSystem.title}
                    </Heading>
                    <Text color="fg.subtle" lineHeight={1.4} fontSize="sm" mb={4}>
                      {t.jtc.codeless.usagesSystem.description}
                    </Text>
                    <List.Root pl={4} gap={1} fontSize="sm">
                      {t.jtc.codeless.usagesSystem.items.map((item, index) => (
                        <List.Item key={index}>{item}</List.Item>
                      ))}
                    </List.Root>
                  </Box>
                  <Box marginTop="auto">
                    <Flex wrap="wrap" gap={2}>
                      {['TypeScript', 'Web Workers', 'Fast Diff'].map(tech => (
                        <Badge key={tech} colorPalette="gray" variant="outline" fontSize="xs">
                          {tech}
                        </Badge>
                      ))}
                    </Flex>
                  </Box>
                  <Box>
                    <VideoButton
                      width="100%"
                      embedUrl="https://vkvideo.ru/video_ext.php?oid=-232713815&id=456239026&hd=2&hash=706adecc7db619d7&autoplay=1"
                      buttonColorPalette="green"
                    >
                      {t.common.demo}
                    </VideoButton>
                  </Box>
                </VStack>
              </Card.Body>
            </Card.Root>

            {/* Integration System */}
            <Card.Root bg="bg" height="100%">
              <Card.Body p={4} display="flex" flexDirection="column" height="100%">
                <VStack align="stretch" gap={4} flex="1">
                  <Box>
                    <Heading size="sm" color="fg.purple" mb={4}>
                      {t.jtc.codeless.integrationSystem.title}
                    </Heading>
                    <Text color="fg.subtle" mb={4} fontSize="sm">
                      {t.jtc.codeless.integrationSystem.description}
                    </Text>
                    <List.Root pl={4} gap={1} fontSize="sm">
                      {t.jtc.codeless.integrationSystem.items.map((item, index) => (
                        <List.Item key={index}>{item}</List.Item>
                      ))}
                    </List.Root>
                  </Box>
                  <Box marginTop="auto">
                    <Flex wrap="wrap" gap={2}>
                      {['Node.js', 'TypeScript'].map(tech => (
                        <Badge key={tech} colorPalette="gray" variant="outline" fontSize="xs">
                          {tech}
                        </Badge>
                      ))}
                    </Flex>
                  </Box>
                  <Box>
                    <VideoButton
                      width="100%"
                      embedUrl="https://vkvideo.ru/video_ext.php?oid=-232713815&id=456239027&hd=2&hash=77a172a90336eeac&autoplay=1"
                      buttonColorPalette="purple"
                    >
                      {t.common.demo}
                    </VideoButton>
                  </Box>
                </VStack>
              </Card.Body>
            </Card.Root>

            {/* Module System */}
            <Card.Root bg="bg" height="100%">
              <Card.Body p={4} display="flex" flexDirection="column" height="100%">
                <VStack align="stretch" gap={4} flex="1">
                  <Box>
                    <Heading size="sm" color="fg.orange" mb={4}>
                      {t.jtc.codeless.moduleSystem.title}
                    </Heading>
                    <Text color="fg.subtle" mb={4} fontSize="sm">
                      {t.jtc.codeless.moduleSystem.description}
                    </Text>
                    <List.Root pl={4} gap={1} fontSize="sm">
                      {t.jtc.codeless.moduleSystem.items.map((item, index) => (
                        <List.Item key={index}>{item}</List.Item>
                      ))}
                    </List.Root>
                  </Box>
                  <Box marginTop="auto">
                    <Flex wrap="wrap" gap={2}>
                      {['Node.js', 'TypeScript', 'NPM/Nexus'].map(tech => (
                        <Badge key={tech} colorPalette="gray" variant="outline" fontSize="xs">
                          {tech}
                        </Badge>
                      ))}
                    </Flex>
                  </Box>
                  <Box>
                    <VideoButton
                      width="100%"
                      embedUrl="https://vkvideo.ru/video_ext.php?oid=-232713815&id=456239028&hd=2&hash=c551971178a9a64c&autoplay=1"
                      buttonColorPalette="orange"
                    >
                      {t.common.demo}
                    </VideoButton>
                  </Box>
                </VStack>
              </Card.Body>
            </Card.Root>
          </Grid>

          {/* Architecture Migration */}
          <Card.Root mb={4} bg="bg">
            <Card.Body p={4}>
              <VStack align="stretch" gap={4}>
                <Box>
                  <Heading size="md" color="fg" lineHeight={1.4} mb={3}>
                    {t.jtc.codeless.migration.title}
                  </Heading>

                  <Text color="fg.subtle" lineHeight={1.4} mb={3}>
                    {t.jtc.codeless.migration.description}
                  </Text>

                  <Box mb={3}>
                    <Badge colorPalette="gray" variant="solid" size="xs" bg="bg.badge.red" mb={2}>
                      {t.system.problem}
                    </Badge>
                    <Text color="fg" lineHeight={1.4} fontSize="sm">
                      {t.jtc.codeless.migration.problem}
                    </Text>
                  </Box>

                  <Box mb={3}>
                    <Badge colorPalette="gray" variant="solid" size="xs" bg="bg.badge.green" mb={2}>
                      {t.system.solution}
                    </Badge>
                    <Text color="fg" lineHeight={1.4} fontSize="sm">
                      {t.jtc.codeless.migration.solution}
                    </Text>
                  </Box>

                  <Box>
                    <Badge colorPalette="gray" variant="solid" size="xs" bg="bg.badge.blue" mb={2}>
                      {t.system.completed}
                    </Badge>
                    <List.Root pl={4} gap={1} fontSize="sm">
                      {t.jtc.codeless.migration.completed.map((item, index) => (
                        <List.Item key={index}>{item}</List.Item>
                      ))}
                    </List.Root>
                  </Box>
                </Box>

                <Box>
                  <Flex wrap="wrap" gap={2}>
                    {['Node.js', 'RavenDB', 'Express', 'TypeScript'].map(tech => (
                      <Badge key={tech} colorPalette="gray" variant="outline" fontSize="xs">
                        {tech}
                      </Badge>
                    ))}
                  </Flex>
                </Box>
              </VStack>
            </Card.Body>
          </Card.Root>

          {/* Pod System */}
          <Card.Root mb={4} bg="bg">
            <Card.Body p={4}>
              <VStack align="stretch" gap={4}>
                <Box>
                  <Heading size="md" color="fg" lineHeight={1.4} mb={3}>
                    {t.jtc.codeless.podSystem.title}
                  </Heading>

                  <Text color="fg.subtle" lineHeight={1.4} mb={3}>
                    {t.jtc.codeless.podSystem.description}
                  </Text>

                  <Box mb={3}>
                    <Badge colorPalette="gray" variant="solid" size="xs" bg="bg.badge.red" mb={2}>
                      {t.system.problem}
                    </Badge>
                    <Text color="fg" lineHeight={1.4} fontSize="sm">
                      {t.jtc.codeless.podSystem.problem}
                    </Text>
                  </Box>

                  <Box mb={3}>
                    <Badge colorPalette="gray" variant="solid" size="xs" bg="bg.badge.green" mb={2}>
                      {t.system.solution}
                    </Badge>
                    <Text color="fg" lineHeight={1.4} fontSize="sm">
                      {t.jtc.codeless.podSystem.solution}
                    </Text>
                  </Box>

                  <Box>
                    <Badge colorPalette="gray" variant="solid" size="xs" bg="bg.badge.blue" mb={2}>
                      {t.system.completed}
                    </Badge>
                    <List.Root pl={4} gap={1} fontSize="sm">
                      {t.jtc.codeless.podSystem.completed.map((item, index) => (
                        <List.Item key={index}>{item}</List.Item>
                      ))}
                    </List.Root>
                  </Box>
                </Box>

                <Box>
                  <Flex wrap="wrap" gap={2}>
                    {['Node.js', 'Child Processes', 'Express', 'Proxy', 'TypeScript'].map(tech => (
                      <Badge key={tech} colorPalette="gray" variant="outline" fontSize="xs">
                        {tech}
                      </Badge>
                    ))}
                  </Flex>
                </Box>
              </VStack>
            </Card.Body>
          </Card.Root>

          {/* SSE Communicator */}
          <Card.Root bg="bg">
            <Card.Body p={4}>
              <VStack align="stretch" gap={4}>
                <Box>
                  <Heading size="md" color="fg" lineHeight={1.4} mb={3}>
                    {t.jtc.codeless.sseSystem.title}
                  </Heading>

                  <Text color="fg.subtle" lineHeight={1.4} mb={3}>
                    {t.jtc.codeless.sseSystem.description}
                  </Text>

                  <Box mb={3}>
                    <Badge colorPalette="gray" variant="solid" size="xs" bg="bg.badge.red" mb={2}>
                      {t.system.problem}
                    </Badge>
                    <Text color="fg" lineHeight={1.4} fontSize="sm">
                      {t.jtc.codeless.sseSystem.problem}
                    </Text>
                  </Box>

                  <Box mb={3}>
                    <Badge colorPalette="gray" variant="solid" size="xs" bg="bg.badge.green" mb={2}>
                      {t.system.solution}
                    </Badge>
                    <Text color="fg" lineHeight={1.4} fontSize="sm">
                      {t.jtc.codeless.sseSystem.solution}
                    </Text>
                  </Box>

                  <Box>
                    <Badge colorPalette="gray" variant="solid" size="xs" bg="bg.badge.blue" mb={2}>
                      {t.system.completed}
                    </Badge>
                    <List.Root pl={4} gap={1} fontSize="sm">
                      {t.jtc.codeless.sseSystem.completed.map((item, index) => (
                        <List.Item key={index}>{item}</List.Item>
                      ))}
                    </List.Root>
                  </Box>
                </Box>

                <Box>
                  <Flex wrap="wrap" gap={2}>
                    {['TypeScript', 'Server-Sent Events', 'Node.js', 'Proxy API'].map(tech => (
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

        {/* Other Projects */}
        <Box>
          <Heading size="lg" mb={6} color="fg">
            {t.jtc.otherProjects.title}
          </Heading>

          <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={4}>
            {/* React Native PayControl */}
            <Card.Root bg="bg" height="100%">
              <Card.Body p={4} display="flex" flexDirection="column" height="100%">
                <VStack align="stretch" justify="space-between" gap={4} flex="1">
                  <Box>
                    <Heading size="sm" color="fg.blue" mb={3}>
                      {t.jtc.otherProjects.reactNative.title}
                    </Heading>
                    <Text color="fg" mb={3} fontSize="sm">
                      {t.jtc.otherProjects.reactNative.description}
                    </Text>
                  </Box>
                  <Box>
                    <Flex wrap="wrap" gap={2}>
                      {['React Native', 'TypeScript', 'PayControl SDK'].map(tech => (
                        <Badge key={tech} colorPalette="gray" variant="outline" fontSize="xs">
                          {tech}
                        </Badge>
                      ))}
                    </Flex>
                  </Box>
                </VStack>
              </Card.Body>
            </Card.Root>

            {/* UI-KIT */}
            <Card.Root bg="bg" height="100%">
              <Card.Body p={4} display="flex" flexDirection="column" height="100%">
                <VStack align="stretch" justify="space-between" gap={4} flex="1">
                  <Box>
                    <Heading size="sm" color="fg.green" mb={3}>
                      {t.jtc.otherProjects.uiKit.title}
                    </Heading>
                    <List.Root pl={4} gap={1} fontSize="sm" mb={3}>
                      {t.jtc.otherProjects.uiKit.items.map((item, index) => (
                        <List.Item key={index}>{item}</List.Item>
                      ))}
                    </List.Root>
                  </Box>
                  <Box>
                    <Flex wrap="wrap" gap={2}>
                      {['React', 'TypeScript'].map(tech => (
                        <Badge key={tech} colorPalette="gray" variant="outline" fontSize="xs">
                          {tech}
                        </Badge>
                      ))}
                    </Flex>
                  </Box>
                </VStack>
              </Card.Body>
            </Card.Root>

            {/* Documentation Tool */}
            <Card.Root bg="bg" height="100%">
              <Card.Body p={4} display="flex" flexDirection="column" height="100%">
                <VStack align="stretch" justify="space-between" gap={4} flex="1">
                  <Box>
                    <Heading size="sm" color="fg.purple" mb={3}>
                      {t.jtc.otherProjects.documentation.title}
                    </Heading>
                    <Text color="fg.subtle" mb={3} fontSize="sm">
                      {t.jtc.otherProjects.documentation.description}
                    </Text>
                    <Box mb={3}>
                      <Text fontWeight="semibold" fontSize="sm" mb={2}>
                        {t.jtc.otherProjects.documentation.howItWorks.title}
                      </Text>
                      <List.Root pl={4} gap={1} fontSize="sm">
                        {t.jtc.otherProjects.documentation.howItWorks.items.map((item, index) => (
                          <List.Item key={index}>{item}</List.Item>
                        ))}
                      </List.Root>
                    </Box>
                  </Box>
                  <Box>
                    <Flex wrap="wrap" gap={2}>
                      {['React', 'TypeScript', 'TypeDoc'].map(tech => (
                        <Badge key={tech} colorPalette="gray" variant="outline" fontSize="xs">
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

        {/* DBO Systems */}
        <Box>
          <Heading size="lg" mb={6} color="fg">
            {t.jtc.dboExperience.title}
          </Heading>

          <Card.Root mb={4} bg="bg">
            <Card.Body p={4}>
              <VStack align="stretch" gap={4}>
                <Box>
                  <Heading size="md" color="fg" lineHeight={1.4} mb={3}>
                    {t.jtc.dboExperience.banking.title}
                  </Heading>

                  <Text color="fg.subtle" lineHeight={1.4} mb={3}>
                    {t.jtc.dboExperience.banking.description}
                  </Text>

                  <Text color="fg.subtle" mb={3} fontSize="xs" fontStyle="italic">
                    {t.jtc.dboExperience.banking.clients}
                  </Text>

                  <Box mb={3}>
                    <Badge colorPalette="gray" variant="solid" size="xs" bg="bg.badge.blue" mb={3}>
                      {t.jtc.dboExperience.banking.modules.title}
                    </Badge>
                    <Flex wrap="wrap" gap={2} mb={2}>
                      {t.jtc.dboExperience.banking.modules.items.map(module => (
                        <Badge key={module} colorPalette="blue" variant="outline" fontSize="xs">
                          {module}
                        </Badge>
                      ))}
                    </Flex>
                  </Box>

                  <Box>
                    <Badge colorPalette="gray" variant="solid" size="xs" bg="bg.badge.orange" mb={2}>
                      {t.jtc.dboExperience.banking.features.title}
                    </Badge>
                    <List.Root pl={4} gap={1} fontSize="sm">
                      {t.jtc.dboExperience.banking.features.items.map((item, index) => (
                        <List.Item key={index}>{item}</List.Item>
                      ))}
                    </List.Root>
                  </Box>
                </Box>

                <Box>
                  <Flex wrap="wrap" gap={2}>
                    {['React', 'Redux', 'Redux Form', 'TypeScript', t.common.cryptoPro].map(tech => (
                      <Badge key={tech} colorPalette="gray" variant="outline" fontSize="xs">
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
              <VStack align="stretch" gap={4}>
                <Box>
                  <Heading size="md" color="fg" lineHeight={1.4} mb={3}>
                    {t.jtc.dboExperience.helper.title}
                  </Heading>

                  <Text color="fg.subtle" lineHeight={1.4} mb={3}>
                    {t.jtc.dboExperience.helper.description}
                  </Text>

                  <Box mb={3}>
                    <Badge colorPalette="gray" variant="solid" size="xs" bg="bg.badge.red" mb={2}>
                      {t.system.problem}
                    </Badge>
                    <Text color="fg" lineHeight={1.4} fontSize="sm">
                      {t.jtc.dboExperience.helper.problem}
                    </Text>
                  </Box>

                  <Box mb={3}>
                    <Badge colorPalette="gray" variant="solid" size="xs" bg="bg.badge.green" mb={2}>
                      {t.system.solution}
                    </Badge>
                    <Text color="fg" lineHeight={1.4} fontSize="sm">
                      {t.jtc.dboExperience.helper.solution}
                    </Text>
                  </Box>

                  <Box>
                    <Badge colorPalette="gray" variant="solid" size="xs" bg="bg.badge.blue" mb={2}>
                      {t.system.completed}
                    </Badge>
                    <List.Root pl={4} gap={1} fontSize="sm">
                      {t.jtc.dboExperience.helper.completed.map((item, index) => (
                        <List.Item key={index}>{item}</List.Item>
                      ))}
                    </List.Root>
                  </Box>
                </Box>

                <Box>
                  <Flex wrap="wrap" gap={2}>
                    {['React', 'TypeScript'].map(tech => (
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

        {/* Technology Stack */}
        <Box>
          <Heading size="lg" mb={6} color="fg">
            {t.jtc.techExpertise.title}
          </Heading>

          <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={4}>
            <Card.Root bg="bg">
              <Card.Body p={4}>
                <Heading size="sm" color="fg.blue" mb={3}>
                  {t.jtc.techExpertise.mainTech.title}
                </Heading>
                <VStack align="stretch" gap={3}>
                  <Box>
                    <Text fontWeight="semibold" fontSize="sm" mb={2}>
                      {t.jtc.techExpertise.mainTech.frontend}
                    </Text>
                    <Flex wrap="wrap" gap={1}>
                      {['React', 'Redux', 'TypeScript'].map(tech => (
                        <Badge key={tech} colorPalette="gray" variant="solid" fontSize="xs" bg="bg.badge.blue">
                          {tech}
                        </Badge>
                      ))}
                    </Flex>
                  </Box>
                  <Box>
                    <Text fontWeight="semibold" fontSize="sm" mb={2}>
                      {t.jtc.techExpertise.mainTech.backend}
                    </Text>
                    <Flex wrap="wrap" gap={1}>
                      {['Node.js', 'Express'].map(tech => (
                        <Badge key={tech} colorPalette="gray" variant="solid" fontSize="xs" bg="bg.badge.green">
                          {tech}
                        </Badge>
                      ))}
                    </Flex>
                  </Box>
                  <Box>
                    <Text fontWeight="semibold" fontSize="sm" mb={2}>
                      {t.jtc.techExpertise.mainTech.mobile}
                    </Text>
                    <Flex wrap="wrap" gap={1}>
                      {['React Native'].map(tech => (
                        <Badge key={tech} colorPalette="gray" variant="solid" fontSize="xs" bg="bg.badge.red">
                          {tech}
                        </Badge>
                      ))}
                    </Flex>
                  </Box>
                  <Box>
                    <Text fontWeight="semibold" fontSize="sm" mb={2}>
                      {t.jtc.techExpertise.mainTech.databases}
                    </Text>
                    <Flex wrap="wrap" gap={1}>
                      {['RavenDB'].map(tech => (
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
                <Heading size="sm" color="fg.green" mb={3}>
                  {t.jtc.techExpertise.expertise.title}
                </Heading>
                <List.Root pl={4} gap={1} fontSize="sm">
                  {t.jtc.techExpertise.expertise.items.map((item, index) => (
                    <List.Item key={index}>{item}</List.Item>
                  ))}
                </List.Root>
              </Card.Body>
            </Card.Root>

            <Card.Root bg="bg">
              <Card.Body p={4}>
                <Heading size="sm" color="fg.purple" mb={3}>
                  {t.jtc.techExpertise.aiMl.title}
                </Heading>
                <List.Root pl={4} gap={1} fontSize="sm">
                  {t.jtc.techExpertise.aiMl.items.map((item, index) => (
                    <List.Item key={index}>{item}</List.Item>
                  ))}
                </List.Root>
              </Card.Body>
            </Card.Root>

            <Card.Root bg="bg">
              <Card.Body p={4}>
                <Heading size="sm" color="fg.orange" mb={3}>
                  {t.jtc.techExpertise.apis.title}
                </Heading>
                <List.Root pl={4} gap={1} fontSize="sm">
                  {t.jtc.techExpertise.apis.items.map((item, index) => (
                    <List.Item key={index}>{item}</List.Item>
                  ))}
                </List.Root>
              </Card.Body>
            </Card.Root>
          </Grid>
        </Box>
      </Stack>
    </Layout>
  )
}
