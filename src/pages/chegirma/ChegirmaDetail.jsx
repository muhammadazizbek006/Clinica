import React from 'react'
import { useParams } from 'react-router-dom'
import { chegirmalar } from '../../Data'

const ChegirmaDetail = () => {
    const {nomi} = useParams();
    console.log(nomi);
    const nomim = chegirmalar.filter((e)=> e.nomi == nomi); // To'g'rilangan nom
  return (
    <>

    <section className="py-8">
        {nomim.map((e) => {
          return (
            <div className="containerb">

              <h2 className="text-32 font-medium   ">
                {e.nomi}
              </h2>
            </div>
          );
        })}
      </section>

    <section className='py-7'>   
        <div className="containerb">


            {
                nomim.map((e)=>{
                    return(
                        <div className="flex">
                        <img width={437} height={490} className="w-[437px] h-[490px] mr-14 object-cover " src={e.img} alt={e.yonalishi} />
                        {/* right */}
                        <div className="w-full max-w-[701px]">
        
                          <div className='mb-3'>
                            <p className='mb-3 text-base'>{e.muddat}</p>
                            <div className='mb-3'>
                             <p>{e.taklif}</p>
                             <p>{e.taklif2}</p>
                            </div>
                           
                              <div className='flex space-x-2'>
                                <p>{e.ish} </p>
                                <p className='line-through mr-2'>{e.narx}</p>
                                <p>{e.aksiyaN}</p>
                              </div>
        
                              <div className='flex space-x-2'>
                                <p>{e.ish2} </p>
                                <p className='line-through mr-2'>{e.narx2}</p>
                                <p>{e.aksiyaN2}</p>
                              </div>
        
                          </div>

                          <button className='px-10 py-3 bg-header hover:bg-online-zakaz hover:text-white duration-300'>Online Ro'yxardan O'tish</button>
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