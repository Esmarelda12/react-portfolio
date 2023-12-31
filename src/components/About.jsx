import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen  bg-[#0a192f] text-gray-300'>
<div className='flex flex-col justify-center items-center w-full h-full'>
<div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>

{/*container*/}
<div className='sm:text-right pb-8 pl-4'>
    <p className='text-4xl font-bold inline border-b-4 border-red-600'>
        About
        </p>
</div>
<div></div>
</div>
<div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'> 
<div className='sm: text-right text-4xl font-bold'>
    <p>I'm Chika, nice to meet you, please take a look around.</p>
     </div>
     <div>
        <p>I am passionate about building excellect software that improves
             the lives of those around me. I specialize in creating software
              for clients ranging from individual and small-business all the
               way large enterprise corporation. What would you doif you had
                a software expery available at your fingertips?</p>
     </div>
</div>
</div>
    </div>
  )
}

export default About