import React from 'react'
import coverBob from "../assets/images/Cover_Bob.jpg"
import EstPopulo from "../assets/images/Populo.jpg"
import SomethingGood from "../assets/images/something good.jpg"
import BirdCo from "../assets/images/bird_co.jpg"
import HeadChef from "../assets/images/headchef.jpg"
import Thea from "../assets/images/thea.jpg"
import DinoGroup from "../assets/images/dinogroup.jpg"
import CryptoSwap from "../assets/images/cryptoswap.jpg"

const works=[
  {project:"Bobbob",industry:"fintech",services:"app",image:coverBob},
  {project:"Est Populo",industry:"agency",services:"app",image:EstPopulo},
  {project:"Something Good",industry:"agency",services:"Web",image:SomethingGood},
  {project:"Bird.co",industry:"Transportation",services:"Web",image:BirdCo},
  {project:"HeadChef",industry:"Resturant & Catering",services:"UI/UX Design",image:HeadChef},
  {project:"Thea",industry:"Beauty",services:"Marketing,UI/UX Direction",image:Thea},
  {project:"DinoGroup",industry:"Venture Capitalist",services:"Concept",image:DinoGroup},
  {project:"Cryptoswap",industry:"Cryptocurrency",services:"UI/UX Design,Illustration",image:CryptoSwap},
]
const Work = () => {
  return (
    <div className='container mx-auto px-3'>
      <div className='min-h-36'></div>
      <h1 className='font-light tracking-tight text-4xl sm:text-4xl md:text-6xl lg:text-7xl leading-5 mb-20'>Our Work</h1>
      <div className='grid gap-10 grid-cols-1 md:grid-cols-2'>
        {works.map((work,index)=>{
          return(
           <div>
            <a href="">
              <div className='mb-2'>
                  <div className='h-[400px]'>
                <img src={work.image} width="2560" height="1440" alt="" className='object-cover w-full h-full' />
                  </div>
              </div>
              <div className='flex flex-wrap '>
                <div className='pl-3 flex-1'>
                 <h2 className='text-xl md:text-2xl mb-2'>{work.project}</h2>
                 <p className='font-normal text-sm text-[#959595]'>{work.industry}</p>
                </div>
                <div>
                  <p className='font-normal text-sm text-[#959595]'>{work.services}</p>
                </div>

              </div>
            </a>
           </div>
          )
        })}
      </div>
    </div>
  )
}

export default Work
