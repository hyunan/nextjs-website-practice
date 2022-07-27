import { Box, Text, Image, useColorModeValue, Link } from '@chakra-ui/react'

const ProjectIcon = ({
  imgSrc,
  projectTitle,
  stackInfo,
  href,
  source,
  show
}) => {
  return (
    <Box pt={2} pb={2}>
      <Box display='flex' justifyContent='center'>
        <Link href={href} target='_blank'>
          <Image
            src={imgSrc}
            alt='imgsrc'
            height={190}
            width={330}
            borderRadius={7}
          />
        </Link>
      </Box>
      <Box ml={{ base: '65px', md: 6 }} pt={1}>
        <Text fontWeight='semibold'>
          {projectTitle}{' '}
          {show ? (
            <Link
              href={source}
              target='_blank'
              _hover={{
                color: 'blue.500',
                textDecoration: 'underline'
              }}
            >
              (See Code)
            </Link>
          ) : (
            String('(Private)')
          )}
        </Text>
        <Text
          fontStyle='italic'
          fontSize='14px'
          color={useColorModeValue('gray.900', 'gray.400')}
        >
          Stack: {stackInfo}
        </Text>
      </Box>
    </Box>
  )
}

export default ProjectIcon
