import { AnimatePresence, motion } from 'framer-motion'
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

const ThemeToggle = () => {
  const { toggleColorMode } = useColorMode()

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        style={{ display: 'inline-block' }}
        key={useColorModeValue('light', 'dark')}
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <IconButton
          aria-label='Toggle theme'
          colorScheme={useColorModeValue('purple', 'orange')}
          icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
          onClick={toggleColorMode}
          bgColor={useColorModeValue('purple.500', 'orange.100')}
          _hover={{
            opacity: 0.8
          }}
        />
      </motion.div>
    </AnimatePresence>
  )
}

export default ThemeToggle
