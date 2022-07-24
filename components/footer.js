import { Box, useColorModeValue, Text } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box
      h='10rem'
      display='flex'
      alignItems='center'
      justifyContent='center'
      bg={useColorModeValue('#faf7e3', '#252736')}
    >
      <Text color={useColorModeValue('gray.700', 'whiteAplha.300')}>
        &copy; {new Date().getFullYear()} Ray An. U can steal this code, I did
        too :)
      </Text>
    </Box>
  )
}

export default Footer
