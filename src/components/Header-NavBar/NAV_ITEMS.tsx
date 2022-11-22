

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
          href: '#ourstory',
        },
        {
          label: 'Serviços',
          subLabel: 'Entenda nossos principais serviços disponíveis.',
          href: '#ourstory',
        },
        {
          label: 'Depoimentos',
          subLabel: 'Confira depoimentos de nossos clientes e parceiros.',
          href: '#Testimonial',
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

