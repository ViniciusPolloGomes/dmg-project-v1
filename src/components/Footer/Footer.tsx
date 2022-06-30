import { ButtonGroup, IconButton, Stack, Text,Button, Input, Divider,Flex} from '@chakra-ui/react'
import * as React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import Image from 'next/image';
import Logo from './../../public/dmg.png'
export function Footer(){
    
    return(
        <Flex flexDirection="column"
              mx={['0','0','0']}
              bg="gray.100"
              px={['5%','10%','10%']}
              as="footer"

              >
            <Stack
            spacing="8"
            direction={{ base: 'column', md: 'row' }}
            justify="space-between"
            py={{ base: '12', md: '16' }}
            width={['100%']}
            >
            <Stack spacing={{ base: '6', md: '8'}} align="start">
                <Image alt="Logo Dmg" src={Logo} width={150}/>
                <Text color="muted">Create beautiful websites remarkably fast.</Text>
            </Stack>
            <Stack
                direction={{ base: 'column-reverse', md: 'column', lg: 'row' }}
                spacing={{ base: '12', md: '8' }}
            >
                <Stack direction="row" spacing="8">
                <Stack spacing="4" minW="36" flex="1">
                    <Text fontSize="sm" fontWeight="semibold" color="subtle">
                    Product
                    </Text>
                    <Stack spacing="3" shouldWrapChildren>
                        <Button variant="link">How it works</Button>
                        <Button variant="link">Pricing</Button>
                        <Button variant="link">Use Cases</Button>
                    </Stack>
                </Stack>
                <Stack spacing="4" minW="36" flex="1">
                    <Text fontSize="sm" fontWeight="semibold" color="subtle">
                    Legal
                    </Text>
                    <Stack spacing="3" shouldWrapChildren>
                        <Button variant="link">Privacy</Button>
                        <Button variant="link">Terms</Button>
                        <Button variant="link">License</Button>
                    </Stack>
                </Stack>
                </Stack>
                <Stack spacing="4">
                <Text fontSize="sm" fontWeight="semibold" color="subtle">
                    Stay up to date
                </Text>
                <Stack spacing="4" direction={{ base: 'column', sm: 'row' }} maxW={{ lg: '360px' }}>
                    <Input placeholder="Enter your email" type="email" colorScheme="white" bg="white" required />
                    <Button  type="submit" flexShrink={0} colorScheme="blue">
                    Subscribe
                    </Button>
                </Stack>
                </Stack>
            </Stack>
            </Stack>
            <Divider />
            <Stack
            pt="8"
            pb="12"
            justify="space-between"
            direction={{ base: 'column-reverse', md: 'row' }}
            align="center"
            >
            <Text fontSize="sm" color="subtle">
                &copy; {new Date().getFullYear()} Chakra UI Pro, Inc. All rights reserved.
            </Text>
            <ButtonGroup variant="ghost">
                <IconButton
                as="a"
                href="#"
                aria-label="LinkedIn"
                icon={<FaLinkedin fontSize="1.25rem" />}
                />
                <IconButton as="a" href="#" aria-label="GitHub" icon={<FaGithub fontSize="1.25rem" />} />
                <IconButton as="a" href="#" aria-label="Twitter" icon={<FaTwitter fontSize="1.25rem" />} />
            </ButtonGroup>
            </Stack>
        </Flex>
    )
};