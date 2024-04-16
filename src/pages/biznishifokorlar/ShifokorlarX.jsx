import React from 'react'
import { shifokorlar } from '../../Data'
import { Link } from 'react-router-dom'
const ShifokorlarX = () => {
  return (
    <>
      <section className='py-10'>
          <div className="containerb">
            <h2 className='text-42 font-medium mb-5'>Bizning shifokorlarimiz</h2>

            {/* map shifokorlar */}
            <ul className='grid grid-cols-2  gap-x-6 gap-y-8'>
              {
                shifokorlar.map((e)=>{
                  return(
                    <li key={e.id}>
                      <Link>
                        <img className='w-40 h-48' width={150} height={190} src={e.img} alt="" />
                        
                        <div>
                        
                        </div>
                      </Link>
                    </li>
                  )
                })
              }
            </ul>
          </div>
      </section>
    </>
  )
}

export default ShifokorlarX