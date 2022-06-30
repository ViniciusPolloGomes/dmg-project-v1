import {Flex,Heading} from '@chakra-ui/react'
import { CardProduct } from '../../Card/CardProduct'
export function FeaturedApartaments(){
    return(
        <section>
            <Flex  direction="column"
                    alignItems="center"
                    mt={5}
            >
                <Heading as='h6' size='xs' color="green.300">Novidades</Heading>
                <Heading as='h1' size={['2xl','4xl']} color="black" textAlign="center">
                    Apartamentos em destaques
                </Heading>
                <CardProduct/>
            </Flex>
        </section>
    )
}