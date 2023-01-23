import { Box, Container, useColorModeValue } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Footer from '../footer'
import Navbar from '../navbar'

export default function MainContainer({ children }) {
  return (
    <Box as='main' bg={useColorModeValue('yellow.50', '#252525')}>
      <Head>
        <title>Ray An</title>
        <meta name='description' content="I'm a Web Developer and student." />
        <meta property='og:image' content='/images/profile.png' />
      </Head>
      <Navbar />
      <Container maxW='container.md'>
        <Box>
          {children}
          {/*<Footer />*/}
        </Box>
      </Container>
    </Box>
  )
}
