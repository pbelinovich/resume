import React from 'react'
import { Box, Stack, Heading, Text, Badge, Card, Flex, Separator, VStack, Grid, List, Link } from '@chakra-ui/react'
import { Layout, useColorMode } from '../../components'
import { useT } from '../../i18n'
import LinkLightIcon from '../../static-resources/icons/link-light.svg'
import LinkDarkIcon from '../../static-resources/icons/link-dark.svg'

export const RecifraPage: React.FC = () => {
  const { colorMode } = useColorMode()
  const LinkIcon = colorMode === 'light' ? LinkLightIcon : LinkDarkIcon
  const t = useT()

  return (
    <Layout>
      <Stack gap={8}>
        {/* Header Section */}
        <Box textAlign="center" pt={4}>
          <Heading size="4xl" mb={2} fontWeight="bold" color="fg">
            {t.recifra.pageTitle}
          </Heading>
          <Text fontSize="md" color="fg.subtle" mb={4}>
            {t.recifra.company}
          </Text>
          <Link href="https://recifra.ru/" color="fg.link" fontWeight="medium" target="_blank">
            <LinkIcon width={16} height={16} />
            recifra.ru
          </Link>
        </Box>

        <Separator />

        {/* Work Period */}
        <Box>
          <Heading size="lg" mb={6} color="fg">
            {t.common.workPeriod}
          </Heading>
          <Card.Root bg="bg" maxWidth="500px">
            <Card.Body p={4}>
              <VStack align="stretch" gap={3}>
                <Heading size="sm" color="fg.warning" mb={0}>
                  {t.recifra.workPeriod.period}
                </Heading>
                <Text fontSize="lg" fontWeight="semibold" color="fg">
                  {t.recifra.workPeriod.position}
                </Text>
              </VStack>
            </Card.Body>
          </Card.Root>
        </Box>

        <Separator />

        {/* Main Projects */}
        <Box>
          <Heading size="lg" mb={6} color="fg">
            {t.recifra.mainProjects.title}
          </Heading>

          {/* HANS Pizza System */}
          <Card.Root mb={4} bg="bg">
            <Card.Body p={4}>
              <VStack align="stretch" gap={4}>
                <Box>
                  <Heading size="md" color="fg" lineHeight={1.4} mb={3}>
                    {t.recifra.mainProjects.hans.title}
                  </Heading>

                  <Text color="fg.subtle" lineHeight={1.4} mb={3}>
                    {t.recifra.mainProjects.hans.description}
                  </Text>

                  <Box mb={3}>
                    <Badge colorPalette="orange" variant="solid" size="xs" mb={2}>
                      ЦЕЛЬ ПРОЕКТА
                    </Badge>
                    <Text color="fg" lineHeight={1.4} fontSize="sm">
                      {t.recifra.mainProjects.hans.goal}
                    </Text>
                  </Box>

                  <Box mb={3}>
                    <Badge colorPalette="blue" variant="solid" size="xs" mb={2}>
                      ФУНКЦИОНАЛЬНОСТЬ
                    </Badge>
                    <List.Root pl={4} gap={1} fontSize="sm">
                      {t.recifra.mainProjects.hans.functionality.map((item, index) => (
                        <List.Item key={index}>{item}</List.Item>
                      ))}
                    </List.Root>
                  </Box>

                  <Box mb={3}>
                    <Badge colorPalette="green" variant="solid" size="xs" mb={2}>
                      {t.common.role.toUpperCase()}
                    </Badge>
                    <List.Root pl={4} gap={1} fontSize="sm">
                      {t.recifra.mainProjects.hans.role.map((item, index) => (
                        <List.Item key={index}>{item}</List.Item>
                      ))}
                    </List.Root>
                  </Box>
                </Box>

                {/* Tech Stack */}
                <Box>
                  <Flex wrap="wrap" gap={2}>
                    <Badge colorPalette="purple" variant="solid" size="xs">
                      СТЕК
                    </Badge>
                    {[t.common.bitrix, 'jQuery', 'HTML/CSS', 'JavaScript', 'MySQL'].map(tech => (
                      <Badge key={tech} colorPalette="purple" variant="outline" fontSize="xs">
                        {tech}
                      </Badge>
                    ))}
                  </Flex>
                </Box>
              </VStack>
            </Card.Body>
          </Card.Root>

          {/* Gosuslugi HMAO App */}
          <Card.Root mb={4} bg="bg">
            <Card.Body p={4}>
              <VStack align="stretch" gap={4}>
                <Box>
                  <Heading size="md" color="fg" lineHeight={1.4} mb={3}>
                    {t.recifra.mainProjects.gosuslugi.title}
                  </Heading>

                  <Text color="fg.subtle" lineHeight={1.4} mb={3}>
                    {t.recifra.mainProjects.gosuslugi.description}
                  </Text>

                  <Box mb={3}>
                    <Badge colorPalette="orange" variant="solid" size="xs" mb={2}>
                      ОПИСАНИЕ ПРОЕКТА
                    </Badge>
                    <Text color="fg" lineHeight={1.4} fontSize="sm">
                      {t.recifra.mainProjects.gosuslugi.projectDescription}
                    </Text>
                  </Box>

                  <Box mb={3}>
                    <Badge colorPalette="blue" variant="solid" size="xs" mb={2}>
                      ФУНКЦИОНАЛЬНОСТЬ
                    </Badge>
                    <List.Root pl={4} gap={1} fontSize="sm">
                      {t.recifra.mainProjects.gosuslugi.functionality.map((item, index) => (
                        <List.Item key={index}>{item}</List.Item>
                      ))}
                    </List.Root>
                  </Box>

                  <Box mb={3}>
                    <Badge colorPalette="green" variant="solid" size="xs" mb={2}>
                      {t.recifra.mainProjects.gosuslugi.features.title.toUpperCase()}
                    </Badge>
                    <List.Root pl={4} gap={1} fontSize="sm">
                      {t.recifra.mainProjects.gosuslugi.features.items.map((item, index) => (
                        <List.Item key={index}>{item}</List.Item>
                      ))}
                    </List.Root>
                  </Box>
                </Box>

                <Box>
                  <Flex wrap="wrap" gap={2}>
                    <Badge colorPalette="purple" variant="solid" size="xs">
                      СТЕК
                    </Badge>
                    {['Backbone.js', 'Underscore.js', 'Cordova', 'Framework7', 'HTML/CSS', 'JavaScript'].map(tech => (
                      <Badge key={tech} colorPalette="purple" variant="outline" fontSize="xs">
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

        {/* Websites and Portals */}
        <Box>
          <Heading size="lg" mb={6} color="fg">
            {t.recifra.websites.title}
          </Heading>

          <Card.Root mb={4} bg="bg">
            <Card.Body p={4}>
              <VStack align="stretch" gap={4}>
                <Box>
                  <Heading size="md" color="fg" lineHeight={1.4} mb={3}>
                    Веб-проекты различного масштаба
                  </Heading>

                  <Text color="fg.subtle" lineHeight={1.4} mb={3}>
                    {t.recifra.websites.description}
                  </Text>

                  <Box mb={3}>
                    <Badge colorPalette="blue" variant="solid" size="xs" mb={2}>
                      {t.recifra.websites.projects.title.toUpperCase()}
                    </Badge>
                    <Grid templateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap={3}>
                      <Box>
                        <Text fontWeight="semibold" fontSize="sm" mb={2} color="fg">
                          Государственные порталы:
                        </Text>
                        <List.Root pl={4} gap={1} fontSize="sm">
                          {t.recifra.websites.projects.government.map((project, index) => (
                            <List.Item key={index}>
                              {index === 0 && (
                                <Link href="https://fondugra.ru/" color="fg.link" target="_blank">
                                  {project}
                                </Link>
                              )}
                              {index === 1 && (
                                <Link href="https://investugra.ru/" color="fg.link" target="_blank">
                                  {project}
                                </Link>
                              )}
                              {index === 2 && (
                                <Link href="http://tennis-ugra.ru/" color="fg.link" target="_blank">
                                  {project}
                                </Link>
                              )}
                            </List.Item>
                          ))}
                        </List.Root>
                      </Box>
                      <Box>
                        <Text fontWeight="semibold" fontSize="sm" mb={2} color="fg">
                          Коммерческие проекты:
                        </Text>
                        <List.Root pl={4} gap={1} fontSize="sm">
                          {t.recifra.websites.projects.commercial.map((project, index) => (
                            <List.Item key={index}>{project}</List.Item>
                          ))}
                        </List.Root>
                      </Box>
                    </Grid>
                  </Box>

                  <Box mb={3}>
                    <Badge colorPalette="green" variant="solid" size="xs" mb={2}>
                      {t.recifra.websites.requirements.title.toUpperCase()}
                    </Badge>
                    <List.Root pl={4} gap={1} fontSize="sm">
                      {t.recifra.websites.requirements.items.map((item, index) => (
                        <List.Item key={index}>{item}</List.Item>
                      ))}
                    </List.Root>
                  </Box>

                  <Box>
                    <Badge colorPalette="orange" variant="solid" size="xs" mb={2}>
                      {t.recifra.websites.development.title.toUpperCase()}
                    </Badge>
                    <List.Root pl={4} gap={1} fontSize="sm">
                      {t.recifra.websites.development.items.map((item, index) => (
                        <List.Item key={index}>{item}</List.Item>
                      ))}
                    </List.Root>
                  </Box>
                </Box>

                <Box>
                  <Flex wrap="wrap" gap={2}>
                    <Badge colorPalette="purple" variant="solid" size="xs">
                      СТЕК
                    </Badge>
                    {[t.common.bitrix, 'HTML5', 'CSS3', 'JavaScript', 'jQuery', 'SASS/LESS', 'Bootstrap'].map(tech => (
                      <Badge key={tech} colorPalette="purple" variant="outline" fontSize="xs">
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

        {/* Technology Stack and Expertise */}
        <Box>
          <Heading size="lg" mb={6} color="fg">
            {t.recifra.techStack.title}
          </Heading>

          <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={4}>
            <Card.Root bg="bg">
              <Card.Body p={4}>
                <Heading size="sm" color="fg.blue" mb={3}>
                  {t.recifra.techStack.mainTech.title}
                </Heading>
                <VStack align="stretch" gap={3}>
                  <Box>
                    <Text fontWeight="semibold" fontSize="sm" mb={2}>
                      Frontend:
                    </Text>
                    <Flex wrap="wrap" gap={1}>
                      {t.recifra.techStack.mainTech.frontend.map(tech => (
                        <Badge key={tech} colorPalette="blue" variant="solid" color="gray.50" fontSize="xs">
                          {tech}
                        </Badge>
                      ))}
                    </Flex>
                  </Box>
                  <Box>
                    <Text fontWeight="semibold" fontSize="sm" mb={2}>
                      CMS/Framework:
                    </Text>
                    <Flex wrap="wrap" gap={1}>
                      {t.recifra.techStack.mainTech.cms.map(tech => (
                        <Badge key={tech} colorPalette="green" variant="solid" color="gray.50" fontSize="xs">
                          {tech}
                        </Badge>
                      ))}
                    </Flex>
                  </Box>
                  <Box>
                    <Text fontWeight="semibold" fontSize="sm" mb={2}>
                      Mobile:
                    </Text>
                    <Flex wrap="wrap" gap={1}>
                      {t.recifra.techStack.mainTech.mobile.map(tech => (
                        <Badge key={tech} colorPalette="purple" variant="solid" color="gray.50" fontSize="xs">
                          {tech}
                        </Badge>
                      ))}
                    </Flex>
                  </Box>
                  <Box>
                    <Text fontWeight="semibold" fontSize="sm" mb={2}>
                      Tools:
                    </Text>
                    <Flex wrap="wrap" gap={1}>
                      {t.recifra.techStack.mainTech.tools.map(tech => (
                        <Badge key={tech} colorPalette="orange" variant="solid" color="gray.50" fontSize="xs">
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
                  {t.recifra.techStack.expertise.title}
                </Heading>
                <List.Root pl={4} gap={1} fontSize="sm">
                  {t.recifra.techStack.expertise.items.map((item, index) => (
                    <List.Item key={index}>{item}</List.Item>
                  ))}
                </List.Root>
              </Card.Body>
            </Card.Root>

            <Card.Root bg="bg">
              <Card.Body p={4}>
                <Heading size="sm" color="fg.purple" mb={3}>
                  {t.recifra.techStack.achievements.title}
                </Heading>
                <List.Root pl={4} gap={1} fontSize="sm">
                  {t.recifra.techStack.achievements.items.map((item, index) => (
                    <List.Item key={index}>{item}</List.Item>
                  ))}
                </List.Root>
              </Card.Body>
            </Card.Root>
          </Grid>
        </Box>

        <Separator />

        {/* Learning and Growth */}
        <Box>
          <Heading size="lg" mb={6} color="fg">
            {t.recifra.learning.title}
          </Heading>

          <Card.Root bg="bg">
            <Card.Body p={4}>
              <VStack align="stretch" gap={4}>
                <Box>
                  <Heading size="md" color="fg" lineHeight={1.4} mb={3}>
                    {t.recifra.learning.period.title}
                  </Heading>

                  <Text color="fg.subtle" lineHeight={1.4} mb={3}>
                    {t.recifra.learning.period.description}
                  </Text>

                  <Box mb={3}>
                    <Badge colorPalette="blue" variant="solid" size="xs" mb={2}>
                      {t.recifra.learning.period.keySkills.title.toUpperCase()}
                    </Badge>
                    <Grid templateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap={3}>
                      <Box>
                        <Text fontWeight="semibold" fontSize="sm" mb={2} color="fg.blue">
                          {t.recifra.learning.period.keySkills.technical.title}
                        </Text>
                        <List.Root pl={4} gap={1} fontSize="sm">
                          {t.recifra.learning.period.keySkills.technical.items.map((item, index) => (
                            <List.Item key={index}>{item}</List.Item>
                          ))}
                        </List.Root>
                      </Box>
                      <Box>
                        <Text fontWeight="semibold" fontSize="sm" mb={2} color="fg.green">
                          {t.recifra.learning.period.keySkills.business.title}
                        </Text>
                        <List.Root pl={4} gap={1} fontSize="sm">
                          {t.recifra.learning.period.keySkills.business.items.map((item, index) => (
                            <List.Item key={index}>{item}</List.Item>
                          ))}
                        </List.Root>
                      </Box>
                    </Grid>
                  </Box>

                  <Box>
                    <Badge colorPalette="orange" variant="solid" size="xs" mb={2}>
                      {t.recifra.learning.period.impact.title.toUpperCase()}
                    </Badge>
                    <Text color="fg" lineHeight={1.4} fontSize="sm">
                      {t.recifra.learning.period.impact.description}
                    </Text>
                  </Box>
                </Box>
              </VStack>
            </Card.Body>
          </Card.Root>
        </Box>
      </Stack>
    </Layout>
  )
}
