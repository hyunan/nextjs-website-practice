import {
  Box,
  Container,
  HStack,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import { IoLogoGithub } from 'react-icons/io5'
import NLink from 'next/link'
import Logo from './logo'
import ThemeToggle from './theme-toggle'
import { HamburgerIcon } from '@chakra-ui/icons'

const LinkItem = ({ href, children }) => {
  return (
    <NLink href={String(href)} passHref>
      <Link
        fontWeight='medium'
        p={{ base: 'none', md: '2' }}
        _hover={{
          outlineColor: '#51bae0',
          textDecoration: 'underline'
        }}
        display='flex'
        alignItems='center'
      >
        {children}
      </Link>
    </NLink>
  )
}

const Navbar = () => {
  return (
    <Box
      as='nav'
      top={0}
      pos='fixed'
      h={14}
      bgColor={useColorModeValue(
        'rgba(255, 255, 240, 0.5)',
        'rgba(37, 39, 54, 0.5)'
      )}
      backdropFilter='auto'
      backdropBlur='2px'
      w='100%'
      zIndex={5}
      display='flex'
      alignItems='center'
    >
      <Container
        display='flex'
        maxW='container.md'
        flexWrap='wrap'
        justifyContent='space-between'
        alignItems='center'
      >
        <NLink href='/'>
          <a>
            <Logo />
          </a>
        </NLink>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'base', md: 'auto' }}
          alignItems='center'
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
          ml={4}
        >
          <LinkItem href='/projects'>Projects</LinkItem>
          <LinkItem href='https://github.com/hyun-an' passHref>
            <IoLogoGithub />
            <Text pl={1}>Github</Text>
          </LinkItem>
        </Stack>
        <Box alignContent='right'>
          <ThemeToggle />
          <Stack display={{ base: 'inline-block', md: 'none' }} ml='0.5rem'>
            <Menu isLazy>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant='outline'
                bg='transparent'
                aria-label='Options'
              />
              <MenuList>
                <LinkItem href='/projects' passHref>
                  <MenuItem
                    as={Link}
                    _hover={{
                      outlineColor: '#51bae0'
                    }}
                  >
                    <Text
                      _hover={{
                        textUnderlineOffset: '-0.5rem'
                      }}
                    >
                      Projects
                    </Text>
                  </MenuItem>
                </LinkItem>
                <LinkItem href='https://github.com/hyun-an' passHref>
                  <MenuItem
                    as={Link}
                    _hover={{
                      outlineColor: '#51bae0'
                    }}
                  >
                    <Text
                      _hover={{
                        textUnderlineOffset: '-0.5rem'
                      }}
                      display='flex'
                      alignItems='center'
                      justifyContent='space-between'
                    >
                      <IoLogoGithub />
                      Github
                    </Text>
                  </MenuItem>
                </LinkItem>
              </MenuList>
            </Menu>
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
