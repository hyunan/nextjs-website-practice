import { Box, Container, Center, useColorModeValue } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Footer from '../footer'
import Navbar from '../navbar'

const Banner = dynamic(() => import('../banner'), {
  ssr: false
})

export default function MainContainer({ children }) {
  return (
    <Box as='main' bg={useColorModeValue('yellow.50', '#252736')}>
      <Head>
        <title>Ray An</title>
        <meta name='description' content="I'm a Web Developer and student." />
        <meta property='og:image' content='/images/profile.png' />
      </Head>
      <Navbar />
      <Banner />
      <Container maxW='container.md' pt={2}>
        {children}
        <Footer />
      </Container>
    </Box>
  )
}
