import React from 'react'
import paperIMG from '../../assets/pexels-mart-production-7718838.jpg'
import plant from '../../assets/plant.json'
import Lottie from 'lottie-react'

function Main() {
  return (
      <div className='max-w-[1640px] mx-auto p-4 '>
          <div className='max-h-[350px] relative'>
              < div className=' absolute w-full h-full text-gray-200 max-h-[350px] bg-black/40 flex flex-col  justify-normal py-16'>
                  <h1 className="px-3 text-4xl sm:text-5xl md:text6xl lg:text-7xl font-bold  pb-8  "> Scribble</h1>
                  <span />
                  <h1 className="px-3 pt-10 text-4xl sm:text-5xl md:text6xl lg:text-7xl font-bold">Away Your Thoughts </h1>
              </div>
              <img className='w-full max-h-[350px]    object-center  object-cover' src={paperIMG} alt="paperback" />
          
            <div className=' ' >
              <Lottie className=' invisible xl:visible  max-w-[400px]  pr-10  ' animationData={plant} />
          </div>
          </div>
        
    </div>
  )
}

export default Main