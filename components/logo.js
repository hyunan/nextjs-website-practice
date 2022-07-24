import { Box, HStack, Image, Text } from '@chakra-ui/react'

export default function Logo() {
  return (
    <Box>
      <HStack>
        <Image
          src='/images/profile.png'
          alt='profile'
          borderRadius='1000px'
          h={7}
        />
        <Text fontSize='24px' pl={3}>
          Hello
        </Text>
      </HStack>
    </Box>
  )
}