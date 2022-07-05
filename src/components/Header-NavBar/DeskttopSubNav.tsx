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

interface NavItem {
    label: string;
    subLabel?: string;
    children?: Array<NavItem>;
    href?: string;
}
  
export const NAV_ITEMS: Array<NavItem> = [
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


export const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
    return (
      <Link
        href={href}
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{ bg: useColorModeValue('blue.50', 'gray.900') }}
      >
        <Stack direction={'row'} align={'center'}>
          <Box>
            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: 'blue.400' }}
              fontWeight={500}>
              {label}
            </Text>
            <Text fontSize={'sm'}>{subLabel}</Text>
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}>
            <Icon color={'blue.400'} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    );
  };