import { Box, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const variants = {
  hidden: { opacity: 0, x: 0, y: 200 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -200 }
}

const Layout = ({ children }) => {
  return (
    <motion.div
      variants={variants}
      initial='hidden'
      animate='enter'
      exit='exit'
      transition={{ type: 'linear', duration: 0.5 }}
    >
      <Box maxW='container.md'>{children}</Box>
    </motion.div>
  )
}

export default Layout
