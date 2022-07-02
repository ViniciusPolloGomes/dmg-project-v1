import {Button, Flex,Heading} from '@chakra-ui/react'
import { CardProduct } from '../../Card/CardProduct'
export function FeaturedApartaments(){
    return(
        <section>
            <Flex  direction="column"
                    alignItems="center"
                    mt={10}
            >
                <Heading as='h6' size='xs' color="green.300">Novidades</Heading>
                <Heading as='h1' size={['2xl','4xl']} color="black" textAlign="center">
                    Apartamentos em destaques
                </Heading>
                <CardProduct/>
                <Button
                  display={{ base: 'none', md: 'flex' }}
                  fontSize={'sm'}
                  fontWeight={600}
                  color={'white'}
                  colorScheme="blue"
                  w={['auto','150px','150px']}
                  h={['3rem']}
                  mb={['3rem']}
                  _hover={{
                    bg: 'blue.300',
                  }}
                >
                  Ver Apartametos
                </Button>
            </Flex>
        </section>
    )
}