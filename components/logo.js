import { Box, HStack, Image, Text } from '@chakra-ui/react'
import Link from 'next/link'

export default function Logo() {
  return (
    <Link href='/'>
      <HStack>
        <Image
          src='/images/profile.png'
          alt='profile'
          borderRadius='1000px'
          h={7}
        />
        <Text fontSize={{ base: '14px', md: '16px' }} fontWeight='bold' pl={1}>
          Ray An
        </Text>
      </HStack>
    </Link>
  )
}
