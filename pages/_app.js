import '../styles/globals.css'
import { useEffect } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import theme from '../theme'
import MainContainer from '../components/layouts/main'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const threeScript = document.createElement('script')
    threeScript.setAttribute('id', 'threeScript')
    threeScript.setAttribute(
      'src',
      'https://cdnjs.cloudflare.com/ajax/libs/three.js/r140/three.min.js'
    )
    document.getElementsByTagName('head')[0].appendChild(threeScript)
    return () => {
      if (threeScript) {
        threeScript.remove()
      }
    }
  }, [])
  return (
    <ChakraProvider theme={theme}>
      <MainContainer>
        <AnimatePresence
          exitBeforeEnter
          initial={true}
          onExitComplete={() => {
            if (typeof window !== 'undefined') {
              window.scrollTo({ top: 0 })
            }
          }}
        >
          <Component {...pageProps} />
        </AnimatePresence>
      </MainContainer>
    </ChakraProvider>
  )
}

export default MyApp
