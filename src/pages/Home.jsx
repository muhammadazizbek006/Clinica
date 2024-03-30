import React from 'react'

// components
import Carusel from '../components/Home/Carusel'
import StamatalogikXizmatlar from '../components/Home/StamatalogikXizmatlar'
import OmmabopXizmatlar from '../components/Home/OmmabopXizmatlar'
import KlinikaShfokorlari from '../components/Home/KlinikaShfokorlari'
import KopSavollar from '../components/Home/KopSavollar'
import KlinikaXaqida from '../components/Home/KlinikaXaqida'
import Cta from '../components/Home/Cta'
const Home = () => {
  return (
    <>
    <Carusel/>
    <StamatalogikXizmatlar/>
    <OmmabopXizmatlar/>
    <KlinikaShfokorlari/>
    <KopSavollar/>
    <KlinikaXaqida/>
    <Cta/>
    </>
  )
}

export default Home