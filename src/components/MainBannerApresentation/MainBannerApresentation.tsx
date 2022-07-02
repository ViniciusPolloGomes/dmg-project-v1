import {
    Stack,
    Flex,
    Text,
    VStack,
    useBreakpointValue,
    Input,
    Icon,
    InputGroup,
    InputLeftElement,
  } from '@chakra-ui/react';
  import {SearchIcon} from '@chakra-ui/icons'

  export function MainBannerApresentation() {
    return (
      <Flex
        w={'100vw'}
        h={'40vh'}
        backgroundImage={
          'url(https://www.estilofontana.com.br/blog/wp-content/uploads/2019/04/apartamento-maior-2-1.png)'
        }
        backgroundSize={'cover'}
        backgroundPosition={'center center'}>
        <VStack
          w={'100vw'}
          justify={'center'}
          px={useBreakpointValue({ base: 0, md: 8 })}
          bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
          <Stack maxW={['xl','2xl']} align={'center'} spacing={6}>
            <Text
              color={'white'}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}
              align='center'
            >
               Realize seus sonhos, encontre as melhores opções de empreendimentos.
            </Text>
            <Stack
                  alignItems="center"
            >
              <InputGroup>
                <InputLeftElement
                    pointerEvents='none'
                    color='gray.300'
                    fontSize='1.2em'
                    px='8'
                    pt='3'
                  >
                    <SearchIcon/>
                  </InputLeftElement>
                    <Input
                        placeholder='Busque pelo local desejado...'
                        size={['lg']}
                        variant='outline'
                        bgColor='white'
                        borderRadius='50'
                        _placeholder={{ opacity: 10, color: 'gray.400' }}
                        w={['300px','300px','600px']}
                        paddingLeft={['3rem']}

                    />
              </InputGroup> 
            </Stack>
          </Stack>
        </VStack>
      </Flex>
    );
  }