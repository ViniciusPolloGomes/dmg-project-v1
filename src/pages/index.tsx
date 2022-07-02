import type { NextPage } from 'next'
import { Main } from 'next/document'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import WithSubnavigation from '../components/Header-NavBar/WithSubnavigation'
import {MainComponent} from '../components/Main/MainComponent'
import {Footer} from '../components/Footer/Footer'
import { NavBar } from './../components/Header-NavBar/NavBar';
import { Flex } from '@chakra-ui/react';

const Home: NextPage = () => {

  return (
    <>
      <NavBar/>
      <MainComponent/>
      <Footer/>
    </>
  )
}

export default Home



