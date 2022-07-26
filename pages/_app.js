import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../theme'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
      <script
        src='https://cdnjs.cloudflare.com/ajax/libs/three.js/r79/three.min.js'
        async
      ></script>
    </ChakraProvider>
  )
}

export default MyApp
