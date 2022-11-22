import { Button, ButtonGroup, VisuallyHidden } from '@chakra-ui/react'
import {FcGoogle } from 'react-icons/fc'
import { SiMicrosoftoutlook} from "react-icons/si";
import {FaGithub} from "react-icons/fa";

const providers = [
  { name: 'Google', icon: <FcGoogle size="5" /> },
  { name: 'Outlook', icon: <SiMicrosoftoutlook size="5" /> },
  { name: 'GitHub', icon: <FaGithub size={"5"} /> },
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