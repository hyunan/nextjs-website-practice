import { Box, Container, useColorModeValue } from '@chakra-ui/react'
import Head from 'next/head'
import Footer from '../footer'
import Navbar from '../navbar'

export default function MainContainer({ children }) {
  return (
    <Box as='main' bg={useColorModeValue('#faf7e3', '#252736')}>
      <Head>
        <title>Ray An</title>
      </Head>
      <Navbar />
      <Container maxW='container.lg' bg='blue.50'>
        {children}
        <Footer />
      </Container>
    </Box>
  )
}
