import React from 'react'
import { useParams } from 'react-router-dom'
import { chegirmalar } from '../Data';

const ChegirmaDetail = () => {
    const {chegrimanomi} = useParams();
    const chegirma = chegirmalar.filter((e)=> e.chegrimanomi == chegrimanomi);
  return (
    <>
    <section>
        <div className="containerb">
            {
                chegirma.map((e)=>{
                    return(
                        <div>
                            <img src={e.img} alt={e.chegrimanomi} />
                            <div>
                                
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