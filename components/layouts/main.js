import { Box, Container, Center, useColorModeValue } from '@chakra-ui/react'
import Head from 'next/head'
import Banner from '../banner'
import Footer from '../footer'
import Navbar from '../navbar'

export default function MainContainer({ children }) {
  return (
    <Box as='main' bg={useColorModeValue('yellow.50', '#252736')}>
      <Head>
        <title>Ray An</title>
      </Head>
      <Navbar />
      <Banner />
      <Container maxW='container.md'>
        {children}
        <Footer />
      </Container>
    </Box>
  )
}
