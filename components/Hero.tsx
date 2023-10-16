import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

const Hero = () => {
  return (
    <div>
      <div className=' container  mx-auto flex flex-col items-center md:flex-row '>
        <div className='mx-auto mt-12 flex flex-col items-center justify-center space-y-7 p-3 text-center md:mt-44 md:items-start md:space-y-10 md:text-left md:text-2xl'>
          <h1 className=' text-3xl md:text-5xl '>
            Hello <span className='animate-pulse'>👋</span>, I'm Salman Hersi
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

          <div className='max-w-sm text-lg md:max-w-md md:text-left md:text-2xl'>
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
            <div className='mt-8 flex justify-center space-x-8  md:justify-start'>
              <Link href={'https://www.linkedin.com/in/salmanhersi/'}>
                <Linkedin />
              </Link>
              <Link href={'https://github.com/SalmanHersi'}>
                <Github />
              </Link>
              <Link href={'https://twitter.com/namlase'}>
                <Twitter />
              </Link>
            </div>
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
    </div>
  );
};

export default Hero;
