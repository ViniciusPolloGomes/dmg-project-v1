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
  import { DesktopSubNav } from './DeskttopSubNav';

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

export const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  
    return (
      <Stack direction={'row'} spacing={4} alignItems="center">
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label} >
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Link
                  p={2}
                  href={navItem.href ?? '#'}
                  fontSize={'sm'}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                  }}>
                  {navItem.label}
                </Link>
              </PopoverTrigger>
  
              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={'xl'}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={'xl'}
                  minW={'sm'}>
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    );
  };