import { Text, useColorModeValue } from "@chakra-ui/react";
import { ReactNode } from "react";

export function TestimonialText({ children }: { children: ReactNode }){
    return (
      <Text
        textAlign={'center'}
        color={useColorModeValue('gray.600', 'gray.400')}
        fontSize={'sm'}>
        {children}
      </Text>
    );
  };