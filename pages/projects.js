import {
  Box,
  Text,
  UnorderedList,
  ListItem,
  SimpleGrid
} from '@chakra-ui/react'
import Link from 'next/link'
import Layout from '../components/layouts/ani-page'
import ProjectIcon from '../components/project-icon'

const Projects = () => {
  return (
    <Layout>
      <Box pt={12} pb={16}>
        <Text fontWeight='bold' fontSize='3xl' pb={4}>
          Personal projects
        </Text>
        <SimpleGrid columns={{ base: 1, md: 2 }}>
          <ProjectIcon
            imgSrc='/images/website.png'
            projectTitle='This website!'
            stackInfo='React.js, Next.js, Chakra UI, Vanta.js'
            source='https://github.com/hyun-an/hyunan'
            show={true}
          />
          <ProjectIcon
            imgSrc='/images/todoapp.png'
            projectTitle='Simple To Do App'
            stackInfo='Typescript, React Native, Nativebase'
            source='https://github.com/hyun-an/fancy-todolist'
            show={true}
          />
        </SimpleGrid>

        <Text fontWeight='bold' fontSize='3xl' pt={4} pb={4}>
          Collab Works
        </Text>
        <SimpleGrid columns={{ base: 1, md: 2 }}>
          <ProjectIcon
            imgSrc='/images/aistory.png'
            projectTitle='AI Story with UCI'
            stackInfo='React.js, TailwindCSS, Express.js'
            href='https://ai-story.herokuapp.com/'
            source='https://github.com/hyun-an/speech-to-image'
            show={true}
          />
          <ProjectIcon
            imgSrc='/images/aeinit.png'
            projectTitle='AE Initiative Website with AEI'
            stackInfo='HTML, CSS, Javascript, Bootstrap'
            href='https://ae-initiative.netlify.app/'
            show={false}
          />
        </SimpleGrid>
        <Text fontWeight='bold' fontSize='3xl' pt={4} pb={4}>
          Old projects
        </Text>
        <SimpleGrid columns={{ base: 1, md: 2 }}>
          <ProjectIcon
            imgSrc='/images/lofistation.png'
            projectTitle='Online Lofi Music Player'
            stackInfo='React.js'
            href='/lofi'
            source='https://github.com/hyun-an/lofistation'
            show={true}
          />
          <ProjectIcon
            imgSrc='/images/asciiart.png'
            projectTitle='Ascii Animation'
            stackInfo='Python3'
            source='https://github.com/hyun-an/asscii-ani'
            show={true}
          />
        </SimpleGrid>
      </Box>
    </Layout>
  )
}

export default Projects
