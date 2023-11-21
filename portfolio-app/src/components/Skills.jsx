import React from 'react'
import Html from '../assests/Html image.png';
import Css from '../assests/CSS-image.png';
import Github from '../assests/GitHub image.png';
import Node from '../assests/Node image.jpg';
import Javascript from '../assests/Javascript image.png';
import Rct from '../assests/Rct image.png';
const Skills = () => {
  return (
    <div name='skills'  className='w-full h-full bg-[#0a192f] text-gray-300'>
      {/*container*/}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-red-600'>Skills</p>
          <p className='py-4'>// These are the technologies I've worked with</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Html} alt="HTML icon" />
            <p className='my-4'>HTML</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <img className='w-20 mx-auto' src={Css} alt="CSS- icon" />
            <p className='my-4'>CSS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <img className='w-20 mx-auto' src={Javascript} alt="JAVASCRIPT icon" />
            <p className='my-4'>JAVASCRIPT</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <img className='w-20 mx-auto' src={Rct} alt="REACT icon" />
            <p className='my-4'>REACT</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <img className='w-20 mx-auto' src={Github} alt="GITHUB icon" />
            <p className='my-4'>GITHUB</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <img className='w-20 mx-auto' src={Node} alt="NODE icon" />
            <p className='my-4'>NODE</p>
            </div>










        </div>

      </div>
    </div>
  )
}

export default Skills