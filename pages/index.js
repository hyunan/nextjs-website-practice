import { Box, Text, Container } from '@chakra-ui/react'
import Layout from '../components/layouts/ani-page'

export default function Home() {
  return (
    <Layout>
      <Container
        display='flex'
        alignItems='center'
        h={{ base: '100vh', md: '100vh' }}
      >
        <Box>
          <Text fontSize='5xl' fontWeight='semibold'>
            <code>Ray An</code>
          </Text>
          <Text>
            <code>Web and sometimes app developer</code>
          </Text>
        </Box>
      </Container>
    </Layout>
  )
}
