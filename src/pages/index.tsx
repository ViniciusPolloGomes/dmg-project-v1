import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import WithSubnavigation from '../components/Header-NavBar/WithSubnavigation'
import { NextHead } from '../components/Next-Head/Next-Head'


interface NextHeadProps{
  title:string;
  metaName: string;
  metaContent: string;
  linkIconHref:string;
}

const Home: NextPage = () => {
  
  const objectNav : NextHeadProps = {
    title:'DMG-Project',
    metaName: 'description',
    metaContent: 'Software Imobiliare',
    linkIconHref:'/favicon.ico',
  }

  return (
    <>
      <NextHead 
        metaContent={objectNav.metaContent} 
        metaName={objectNav.metaName} 
        linkIconHref={objectNav.linkIconHref} 
        title={objectNav.title}/>
      <nav>
        <WithSubnavigation/>
      </nav>

    </>
  )
}

export default Home
