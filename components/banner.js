/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect, useRef } from 'react'
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
          backgroundAlpha: 0.0,
          scale: 0.7,
          birdSize: 2.0,
          quantity: 1.0,
          minHeight: 200.0,
          minWidth: 200.0,
          backgroundAlpha: 0.0,
          alignment: 10.0,
          cohesion: 40.0,
          speedLimit: 2.0
        })
      )
    }
    return () => {
      if (!vantaEffect) return
    }
  }, [vantaEffect])

  return (
    <div>
      <Box pt={'55px'} display='flex' justifyContent='center'>
        <Image
          src='/images/banner.png'
          alt='banner'
          overflow='hidden'
          position='relative'
          maxW='container.md'
        />
        <Box
          ref={vantaRef}
          pos='absolute'
          w={{ base: '100%', md: 'container.md' }}
          h={{ base: '30vh', md: '578px' }}
          z={2}
        />
      </Box>
    </div>
  )
}

export default Banner
