import React from 'react'
import { useParams } from 'react-router-dom'
import { chegirmalar } from '../../Data'

const ChegirmaDetail = () => {
    const {chegrmanomi} = useParams();
    console.log(chegrmanomi);
    const Chegirmam = chegirmalar.filter((e)=> e.chegrmanomi == chegrmanomi); // To'g'rilangan nom
  return (
    <>
    <section>   
        <div className="containerb">
            {
                Chegirmam.map((e)=>{
                    return(
                        <div>
                            {/* <img src={e.img} alt={e.img} /> */}
                            <div>
                                <h3>{e.chegrmanomi}</h3>
                                <p>{e.taklif}</p>                                
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </section>
    </>
  )
}

export default ChegirmaDetail