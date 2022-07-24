import { Box } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import MainContainer from '../components/layouts/main'

export default function Home() {
  return (
    <Box>
      <MainContainer maxW='container.md'>
        <Box>Hello</Box>
        <Box h='200vh'>yikes kekw</Box>
      </MainContainer>
    </Box>
  )
}
