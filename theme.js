import { extendTheme } from '@chakra-ui/react'

const config = {
  initialColorMode: 'light',
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
