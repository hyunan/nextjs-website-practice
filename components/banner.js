import { useState, useEffect, useRef } from 'react'
import { Box, Image, Text } from '@chakra-ui/react'
import BIRDS from 'vanta/dist/vanta.birds.min'

const Banner = () => {
  const [vantaEffect, setVantaEffect] = useState(0)
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: myRef.current
        })
      )
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  return (
    <Box ref={myRef} display='flex' justifyContent='center' pt={12}>
      <Image
        src='/images/banner.png'
        alt='banner'
        maxW='container.md'
        overflow='hidden'
      />
    </Box>
  )
}

export default Banner
