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

export const MobileNavItem = ({ label, children, href }: NavItem) => {
    const { isOpen, onToggle } = useDisclosure();

    return (
      <Stack spacing={4} onClick={children && onToggle}>
        <Flex
          py={2}
          as={Link}
          href={href ?? '#'}
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none',
          }}>
          <Text
            fontWeight={600}
            color={useColorModeValue('gray.600', 'gray.200')}>
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
            />
          )}
        </Flex>
  
        <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            align={'start'}>
            {children &&
              children.map((child) => (
                <Link key={child.label} py={2} href={child.href}>
                  {child.label}
                </Link>
              ))}
          </Stack>
        </Collapse>
      </Stack>
    );
  };