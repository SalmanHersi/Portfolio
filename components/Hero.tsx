import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

const headshot =
  'https://utfs.io/f/a7590ef0-110c-48ac-9263-ef276546c150-wo8ic4.jpg';

const Hero = () => {
  return (
    <div className='flex items-center justify-center  md:p-6'>
      <div className='  flex flex-col items-center md:flex-row'>
        <div className='flex flex-col items-center justify-center space-y-7 p-4 text-center md:items-start md:space-y-10 md:pt-10 md:text-left md:text-2xl'>
          <h2 className=' scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl '>
            Salman Hersi
          </h2>
          <h2 className=' scroll-m-20  text-3xl font-semibold tracking-tight first:mt-0 '>
            Full-Stack Developer
          </h2>
          <div className='md:hidden '>
            <Image
              className='rounded-full'
              src={headshot}
              width={350}
              height={300}
              alt='Avatar'
            ></Image>
          </div>

          <div className='max-w-sm text-lg md:max-w-md md:text-left md:text-2xl'>
            <p>
              I specializing in crafting innovative digital solutions with a
              keen focus on intuitive and dynamic user experiences.
            </p>
          </div>

          <div className=''>
            <Link href={'/'}>
              <Button>
                Check out my work
                <ArrowRight className=' ml-2 w-4' />
              </Button>
            </Link>
            <div className='mt-8 flex items-end justify-center space-x-8  md:justify-start'>
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
        <div className='mx-auto mt-24 hidden  md:ml-28 md:flex md:items-center md:justify-center '>
          <Image
            className='rounded-full'
            src={headshot}
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
