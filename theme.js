import { extendTheme } from '@chakra-ui/react'

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false
}

const colors = {
  main: {
    100: '#000',
    200: '#fff'
  }
}

const theme = extendTheme({ config, colors })
export default theme
