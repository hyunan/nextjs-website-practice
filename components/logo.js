import { Box, Link, Image, Text, HStack } from '@chakra-ui/react'
import NLink from 'next/link'

export default function Logo() {
  return (
    <NLink href='/'>
      <Link>
        <HStack>
          <Image
            src='/images/profile.png'
            alt='profile'
            borderRadius='1000px'
            h={7}
          />
          <Text>
            <code>Ray An</code>
          </Text>
        </HStack>
      </Link>
    </NLink>
  )
}
