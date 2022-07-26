import { useState, useEffect, useRef } from 'react'
import { Box, Image, Text } from '@chakra-ui/react'
import * as THREE from 'three'
import BIRDS from 'vanta/dist/vanta.birds.min'

const Banner = () => {
  const [vantaEffect, setVantaEffect] = useState(0)
  const vantaRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: vantaRef.current,
          THREE,
          backgroundAlpha: 0.0
        })
      )
    }
    return () => {
      if (vantaEffect) vantaEffect.destory()
    }
  }, [vantaEffect])
  return (
    <Box ref={vantaRef} display='flex' justifyContent='center' pt={12}>
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
