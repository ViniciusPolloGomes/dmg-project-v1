import {Flex,Heading} from '@chakra-ui/react';
import {MainBannerApresentation} from '../MainBannerApresentation/MainBannerApresentation';
import { FeaturedApartaments } from './FeaturedApartments/FeaturedApartaments';

export function MainComponent(){
    return(
        <main>  
            <MainBannerApresentation/>
            <FeaturedApartaments/>
        </main>
    )
}