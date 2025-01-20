import React from 'react'

const About = () => {
  return (
    <div id='about'  className='px-8 md:px-14 lg:px-20 xl:px-32 mt-60  scroll-smooth'>
        <div className='text-center mt-20'>
        <span className="logo text-4xl  font-semibold text-black leading-none"> About Me  <span className='text-yellow-400'>.</span> </span>
        </div>

        <div className='py-8 leading-6'>
           <span className='text-xl'>
             <span className='text-yellow-500 font-bold text-2xl'>Hey! </span> <br /> {`I'm`}  <span className='text-gray-500 font-bold text-2xl'>Tanzeel</span>, a  <span className='text-gray-500 font-bold text-2xl'>Front-End Developer</span> from Karachi, <span className='text-yellow-500 font-bold text-2xl'>Pakistan</span>. I have been working in the field of <span className='text-gray-500 font-bold text-2xl'>web development</span>  for the past  8 months. I have a passion for creating beautiful and functional websites. I am proficient in  <span className='text-yellow-500 font-bold text-2xl'>HTML, CSS, JavaScript, TypeScript and Next.Js </span>.  I am always looking to learn new <span className='text-gray-500 font-bold text-2xl'>technologies</span>  and improve my <span className='text-gray-500 font-bold text-2xl'>skills</span> . I am a hardworking and dedicated individual who is always looking to improve and grow. Currently, my focus is on expanding my skill set by diving into <span className='text-yellow-500 font-bold text-2xl'> AI/ML development </span>. I am excited to continue my <span className='text-gray-500 font-bold text-2xl'>journey</span> and create some amazing <span className='text-yellow-500 font-bold text-2xl'>websites</span>.
           </span>
        </div>
    </div>
  )
}

export default About