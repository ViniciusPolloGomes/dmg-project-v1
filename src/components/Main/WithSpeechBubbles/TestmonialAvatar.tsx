import { Avatar, Flex, Stack, Text, useColorModeValue } from "@chakra-ui/react";

export function TestimonialAvatar({
    src,
    name,
    title,
  }: {
    src: string;
    name: string;
    title: string;
  }){
    return (
      <Flex align={'center'} mt={8} direction={'column'}>
        <Avatar src={src} name={name} mb={2}  />
        <Stack spacing={-1} align={'center'}>
          <Text fontWeight={600}>{name}</Text>
          <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
            {title}
          </Text>
        </Stack>
      </Flex>
    );
  };