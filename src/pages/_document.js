import { Html, Head, Main, NextScript } from 'next/document'
import { extendTheme } from '@chakra-ui/react';

export default function Document() {
  return (
    <Html>
      <Head>
          <meta property="og:url" content="URL" />
          <meta property="og:title" content="TÍTULO" />
          <meta property="og:image" content="URL IMAGEM" />
          <meta property="og:description" content="DESCRIÇÃO" />
          <meta name="theme-color" content="#fe2813"/>
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

