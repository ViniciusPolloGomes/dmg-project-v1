import {Flex,Heading} from '@chakra-ui/react';
import {MainBannerApresentation} from '../MainBannerApresentation/MainBannerApresentation';
import { FeaturedApartaments } from './FeaturedApartments/FeaturedApartaments';
import {OurStory} from '../OurStory/OurStory'
export function MainComponent(){
    return(
        <main>  
            <MainBannerApresentation/>
            <FeaturedApartaments/>
            <OurStory/>
        </main>
    )
}