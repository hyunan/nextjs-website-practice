import { Box, useColorModeValue, Text } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box
      h='5rem'
      w='100%'
      display='flex'
      alignItems='center'
      justifyContent='center'
    >
      <Text color={useColorModeValue('gray.700', 'whiteAplha.300')}>
        Made by me :)
      </Text>
    </Box>
  )
}

export default Footer
