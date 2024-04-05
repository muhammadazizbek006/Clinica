import React from 'react'
import { useParams } from 'react-router-dom'
import { maslaxatlar } from '../Data';

// img
import title from '../img/maslahatlashuv.png'
const MaslaxatDetail = () => {

    const {id} = useParams();
    const mDetail = maslaxatlar.filter((maslaxat)=> maslaxat.id == id);

  return (
    <section>
        <div className="containerb">
            {/* title */}
                {
                mDetail.map((e)=>{
                    return(
                       <div>
                            <img src={title} alt={e.yonalishi} />
                            <h2>{e.yonalishi}</h2>
                        </div>
                    )
                })
                }
                

        </div>
    </section>
  )
}

export default MaslaxatDetail