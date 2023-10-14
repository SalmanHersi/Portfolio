import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className='container mx-auto  flex flex-col items-center md:flex-row '>
      <div className='mx-auto mt-12 flex flex-col items-center justify-center space-y-6 p-3 text-center md:mt-40 md:items-start md:space-y-9 md:text-left md:text-2xl'>
        <h1 className=' text-3xl md:text-4xl '>
          Hello <span className='animate-pulse'>👋 </span>, I'm Salman Hersi
        </h1>
        <div className=' md:hidden'>
          <Image
            className='rounded-full shadow-lg '
            src={'/imgs/Headshot-Clear 2.jpg'}
            width={200}
            height={200}
            alt='Avatar'
          ></Image>
        </div>

        <div className='max-w-sm md:max-w-md md:text-left md:text-2xl'>
          <p>
            I'm a Full Stack Developer, specializing in crafting innovative
            digital solutions with a keen focus on intuitive and dynamic user
            experiences.
          </p>
        </div>

        <div className=''>
          <Link href={'/'}>
            <Button>
              Check out my work
              <ArrowRight className=' ml-2 w-4' />
            </Button>
          </Link>
        </div>
      </div>
      <div className='mx-auto mt-24 hidden md:flex md:items-center md:justify-center'>
        <Image
          className='rounded-full'
          src={'/imgs/Headshot-Clear 2.jpg'}
          width={350}
          height={300}
          alt='Avatar'
        ></Image>
      </div>
    </div>
  );
};

export default Hero;
