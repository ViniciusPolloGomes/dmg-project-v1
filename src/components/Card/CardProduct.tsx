import {
    Flex,
    Circle,
    Box,
    Image,
    Badge,
    useColorModeValue,
    Button
  } from '@chakra-ui/react';
  import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
  import { FiShoppingCart } from 'react-icons/fi';
  
  const data = {
    isNew: true,
    imageURL:
      'https://classic.exame.com/wp-content/uploads/2020/07/Mitre-empreendimento-Freguesia.jpg?quality=70&strip=info&w=1024',
    name: 'Expansion Deluxe',
    price: 600000,
    rating: 4.2,
    numReviews: 34,
  };
  
  interface RatingProps {
    rating: number;
    numReviews: number;
  }


function Rating({ rating, numReviews }: RatingProps) {
    return (
      <Box display="flex" alignItems="center">
        {Array(5)
          .fill('')
          .map((_, i) => {
            const roundedRating = Math.round(rating * 2) / 2;
            if (roundedRating - i >= 1) {
              return (
                <BsStarFill
                  key={i}
                  style={{ marginLeft: '1' }}
                  color={i < rating ? 'teal.500' : 'gray.300'}
                />
              );
            }
            if (roundedRating - i === 0.5) {
              return <BsStarHalf key={i} style={{ marginLeft: '1' }} />;
            }
            return <BsStar key={i} style={{ marginLeft: '1' }} />;
          })}
        <Box as="span" ml="2" color="gray.600" fontSize="sm">
          {numReviews} review{numReviews > 1 && 's'}
        </Box>
      </Box>
    );
  }
  
  export function CardProduct() {
    return (
      <Flex direction="column" alignItems="center">
        <Flex p={50} w="full" alignItems="center" justifyContent="center">
          <Box
            bg={useColorModeValue('white', 'gray.800')}
            maxW="sm"
            borderWidth="1px"
            rounded="lg"
            shadow="md"
            position="relative">
            {data.isNew && (
              <Circle
                size="10px"
                position="absolute"
                top={2}
                right={2}
                bg="red.200"
              />
            )}
    
            <Image
              src={data.imageURL}
              alt={`Picture of ${data.name}`}
              roundedTop="lg"
            />
    
            <Box p="6">
              <Box display="flex" alignItems="baseline">
                {data.isNew && (
                  <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                    New
                  </Badge>
                )}
              </Box>
              <Flex mt="1" justifyContent="space-between" alignContent="center">
                <Box
                  fontSize="2xl"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  >
                  {data.name}
                </Box>
                <Button
                  display={{ base: 'none', md: 'inline-flex' }}
                  fontSize={'sm'}
                  fontWeight={600}
                  color={'blue.700'}
                  variant="outline"
                  colorScheme="blue"
                  borderRadius="50"
                  w={['24 ','24','24']}
                  _hover={{
                    bg: 'gray.100',
                  }}
                >
                  Saiba mais!
                </Button>
              </Flex>
    
              <Flex justifyContent="space-between" alignContent="center">
                <Rating rating={data.rating} numReviews={data.numReviews} />
                <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
                  <Box as="span" color={'gray.600'} fontSize="lg">
                    R$
                  </Box>
                  {data.price.toFixed(2)}
                </Box>
              </Flex>
            </Box>
          </Box>
        </Flex>
      </Flex>
    );
  }
  
  