import React from 'react'
import { useParams } from 'react-router-dom';
import { shifokorlar } from '../../Data';

// pages
// import KopSavollar from "../../components/Home/KopSavollar";
// import Cta from "../../components/Home/Cta";
// import Chegirma from "../chegirma/Chegirma";
const ShifokorlarXDetail = () => {
    const { name } = useParams();
    const shifokor = shifokorlar.filter((e) => e.name == name);
  return (
    <>
        
    </>
  )
}

export default ShifokorlarXDetail