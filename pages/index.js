import {
  Box,
  Center,
  List,
  ListItem,
  Text,
  UnorderedList
} from '@chakra-ui/react'
import Link from 'next/link'
import Layout from '../components/layouts/ani-page'

export default function Home() {
  return (
    <Layout>
      <Box pt={12} pb={16}>
        <Text fontSize='5xl' fontWeight='semibold'>
          Hello! I&apos;m Ray
        </Text>
        <Text w='80%'>
          I&apos;m an indie Web Devloper based in Orange County. Currently I am
          focused on learning more about the Web. I also started drawing when
          I&apos;m not studying or deep in rabbit holes of text.
        </Text>
        <Text w='80%' pt={2}>
          I often use <b>React (Javascript/Typescript)</b> and <b>NodeJS</b> for
          my websites and <b>React Native</b> for mobile. I also know{' '}
          <b>Java</b> and a bit of <b>Python</b>, but still prefer
          Javascript&apos;s warm embrace of errors.
        </Text>
        <Text fontWeight='bold' pt={4}>
          Other tech I use:
        </Text>
        <UnorderedList fontSize='15px' pl={4}>
          <ListItem>TailwindCSS</ListItem>
          <ListItem>Chakra UI</ListItem>
          <ListItem>Next JS</ListItem>
          <ListItem>Flask</ListItem>
        </UnorderedList>
      </Box>
      <Box textAlign='center'>
        <Text>
          I don&apos;t really use social media so here&apos;s my email.
        </Text>
        <Link href='mailto:hsrayan05@gmail.com'>
          <Text
            fontWeight='semibold'
            _hover={{
              color: 'blue.500',
              textDecoration: 'underline'
            }}
          >
            hsrayan05@gmail.com
          </Text>
        </Link>
      </Box>
    </Layout>
  )
}
