import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className='container mx-auto mt-7 flex w-full max-w-7xl flex-col p-5 text-center'>
      <h1 className=' text-3xl'>Hello 👋, I'm Salman Hersi</h1>
      <Image
        className=' rounded-lg'
        src={'/imgs/Headshot-Clear 2.jpg'}
        width={300}
        height={300}
        alt='Avatar'
      ></Image>
      <p>
        I'm a Full Stack Developer, specializing in crafting innovative digital
        solutions with a keen focus on intuitive and dynamic user experiences.
      </p>
    </div>
  );
};

export default Hero;
