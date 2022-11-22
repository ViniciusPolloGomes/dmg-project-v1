import { Button, ButtonGroup, VisuallyHidden } from '@chakra-ui/react'
import {FcGoogle } from 'react-icons/fc'
import { SiMicrosoftoutlook} from "react-icons/si";
import {FaGithub} from "react-icons/fa";

const providers = [
  { name: 'Google', icon: <FcGoogle size={25} /> },
  { name: 'Outlook', icon: <SiMicrosoftoutlook size={25} color={'blue'} /> },
  { name: 'GitHub', icon: <FaGithub size={25} /> },
]

export const OAuthButtonGroup = () => (
  <ButtonGroup variant="outline" spacing="4" width="full">
    {providers.map(({ name, icon }) => (
      <Button key={name} width="full">
        <VisuallyHidden>Sign in with {name}</VisuallyHidden>
        {icon}
      </Button>
    ))}
  </ButtonGroup>
)