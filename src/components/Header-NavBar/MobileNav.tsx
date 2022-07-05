import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
  } from '@chakra-ui/react';
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from '@chakra-ui/icons';

import {MobileNavItem} from './MobileNavItem'

interface NavItem {
    label: string;
    subLabel?: string;
    children?: Array<NavItem>;
    href?: string;
  }

  const NAV_ITEMS: Array<NavItem> = [
    {
      label: 'Início',
      children: [
        {
          label: 'Sobre',
          subLabel: 'Conheça melhor nossa empresa.',
          href: '#',
        },
        {
          label: 'Serviços',
          subLabel: 'Entenda nossos principais serviços disponíveis.',
          href: '#',
        },
        {
          label: 'Depoimentos',
          subLabel: 'Confira depoimentos de nossos clientes e parceiros.',
          href: '#',
        },
        {
          label: 'Parceiros',
          subLabel: 'Todos que contribuem para que nosso negócio se torne realidade.',
          href: '#',
        },
      ],
    },
    {
      label: 'Imóveis',
      children: [
        {
          label: 'Imóveis para comprar',
          subLabel: '',
          href: '#',
        },
        {
          label: 'Imóveis para alugar',
          subLabel: '',
          href: '#',
        },
      ],
    },
    {
    label: 'Serviços',
      children: [
        {
          label: 'Consultoria',
          subLabel: '',
          href: '#',
        },
        {
          label: 'Simulação de financiamento',
          subLabel: '',
          href: '#',
        },
        {
          label: 'Treinamento',
          subLabel: '',
          href: '#',
        },
      ],
    },
    {
      label: 'Parceiros',
      subLabel: '',
      href: '#', 
    },
    {
      label: 'Corretores',
      subLabel: '',
      href: '#', 
    },
    {
      label: '#Notícias',
      subLabel: '',
      href: '#', 
    },
  ];

export const MobileNav = () => {
    return (
      <Stack
        bg={useColorModeValue('white', 'gray.800')}
        p={4}
        display={{ md: 'none' }}>
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    );
  };

