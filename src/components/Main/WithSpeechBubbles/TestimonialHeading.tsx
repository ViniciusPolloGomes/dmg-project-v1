import { Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

export function TestimonialHeading({ children }: { children: ReactNode }){
    return (
      <Heading as={'h3'} fontSize={'xl'}>
        {children}
      </Heading>
    );
  };