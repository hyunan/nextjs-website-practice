import '../styles/globals.css'
import { useEffect } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import theme from '../theme'
import MainContainer from '../components/layouts/main'

function MyApp({ Component, pageProps }) {
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
