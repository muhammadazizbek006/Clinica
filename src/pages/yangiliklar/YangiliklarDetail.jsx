import React from 'react'
import {yangilik} from '../../Data'
import { useParams } from 'react-router-dom'

const YangiliklarDetail = () => {
  const {nomi} = useParams();
  const yangiliklar = yangilik.filter((e)=> e.nomi == nomi);
  return (
    <>
      <section className='pt-4'>
        <div className="containerb">
          { yangiliklar.map((e)=>{
            return(
              <h2 className='text-42 mb-8'>{e.nomi}</h2>
            )
          })
            
          }
        </div>
      </section>

      <section className='py-8'>
        <div className="containerb">
          {
            yangiliklar.map((e)=>{
              return(
                <div className='flex'>
                  <img className='mr-6 w-[437px] h-[299px] object-cover' src={e.img} alt={e.nomi} />
                  <div className='text-base space-y-3'>
                    <p>{e.sana}</p>
                    <p>{e.sharx}</p>
                    <p>{e.sharx2}</p>
                    <p>{e.sharx3}</p>
                    <div>
                      <p className='text-base font-medium mb-3'>{e.malumotTitle}</p>
                      <p className='text-base mb-3'>{e.malumot}</p>
                      <p className='text-base mb-3'>{e.malumot2}</p>
                      <p className='text-base '>{e.malumot3}</p>
                    </div>
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

export default YangiliklarDetail