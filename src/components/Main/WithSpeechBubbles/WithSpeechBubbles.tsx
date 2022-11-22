import { Box, Container, Heading, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { Testimonial } from './Testimonial';
import { TestimonialContent } from "./TestimonialContent";
import { TestimonialHeading } from './TestimonialHeading';
import { TestimonialText } from "./TestimonialText";
import { TestimonialAvatar } from "./TestmonialAvatar";

export default function WithSpeechBubbles() {
    return (
      <Box bg={useColorModeValue('gray.100', 'gray.700')} id="Testimonial">
        <Container maxW={'7xl'} py={100} as={Stack} spacing={12} px={['10%']} mb={['10rem']} >
          <Stack spacing={0} align={'center'}  >
            <Heading>Our Clients Speak</Heading>
            <Text>We have been working with clients around the world</Text>
          </Stack>
          <Stack
            direction={{ base: 'column', md: 'row' }}
            spacing={{ base: 10, md: 4, lg: 10 }}>
            <Testimonial>
              <TestimonialContent>
                <TestimonialHeading>Efficient Collaborate</TestimonialHeading>
                <TestimonialText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                  neque sed imperdiet nibh lectus feugiat nunc sem.
                </TestimonialText>
              </TestimonialContent>
              <TestimonialAvatar
                src={
                  'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
                }
                name={'Jane Cooper'}
                title={'CEO at ABC Corporation'}
              />
            </Testimonial>
            <Testimonial>
              <TestimonialContent>
                <TestimonialHeading>Intuitive Design</TestimonialHeading>
                <TestimonialText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                  neque sed imperdiet nibh lectus feugiat nunc sem.
                </TestimonialText>
              </TestimonialContent>
              <TestimonialAvatar
                src={
                  'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
                }
                name={'Jane Cooper'}
                title={'CEO at ABC Corporation'}
              />
            </Testimonial>
            <Testimonial>
              <TestimonialContent>
                <TestimonialHeading>Mindblowing Service</TestimonialHeading>
                <TestimonialText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                  neque sed imperdiet nibh lectus feugiat nunc sem.
                </TestimonialText>
              </TestimonialContent>
              <TestimonialAvatar
                src={
                  'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
                }
                name={'Jane Cooper'}
                title={'CEO at ABC Corporation'}
              />
            </Testimonial>
          </Stack>
        </Container>
      </Box>
    );
  }