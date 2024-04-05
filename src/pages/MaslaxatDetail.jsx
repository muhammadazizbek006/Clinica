import React from 'react'
import { useParams } from 'react-router-dom'
import { maslaxatlar } from '../Data';

// img
import title from '../img/maslahatlashuv.png'
const MaslaxatDetail = () => {

    const {id} = useParams();
    const mDetail = maslaxatlar.filter((maslaxat)=> maslaxat.id == id);

  return (
    <>
     {/* title */}
        <section className="py-12">
           
                {
                mDetail.map((e)=>{
                    return(
                       <div className='flex items-center containerb'>
                        
                        <div className='w-28 bg-akva  mr-6 '>
                         <img className='  px-5 py-3 ' src={title} alt={e.yonalishi} />
                        </div>
                        <h2 className='text-32 font-medium border-b-4 border-b-header w-full pb-5 '>{e.yonalishi}</h2>
                        </div>
                    )
                })
                }
                

        </section>
        {/* yonalish map  */}
        <section>
          <div className="contain">
          
          </div>
        </section>
    </>
  )
}

export default MaslaxatDetail