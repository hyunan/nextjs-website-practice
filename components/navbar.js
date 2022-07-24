import { Box, HStack } from '@chakra-ui/react'
import Logo from './logo'

const Navbar = () => {
  return (
    <Box
      top={0}
      pos='fixed'
      h={10}
      backdropFilter='auto'
      backdropBlur='2px'
      maxW='container.lg'
    >
      <HStack>
        <Logo />
      </HStack>
    </Box>
  )
}

export default Navbar
