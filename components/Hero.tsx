'use client';
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github, Linkedin, Mail, Twitter } from 'lucide-react';
import Link from 'next/link';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';

const handleClick = () => {
  window.location.href = 'mailto:hersi.salman@gmail.com';
};

const headshot =
  'https://utfs.io/f/46f2e154-587f-4292-b7ef-3924d9bc0373-wo8ga2.png';

const Hero = () => {
  return (
    <div className='flex items-center justify-center  md:p-6'>
      <div className='  flex flex-col items-center md:flex-row'>
        <div className='flex flex-col items-center justify-center space-y-7 p-4 text-center md:items-start md:space-y-10 md:pt-10 md:text-left md:text-2xl'>
          <h1 className=' scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl '>
            Salman Hersi
          </h1>
          <h2 className=' scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0'>
          Security Analyst
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
            <p className='text-xl text-muted-foreground'>
            Specializing in vulnerability assessment, threat detection, and risk mitigation to protect digital assets. With CompTIA Security+ certification and proven results in reducing breaches by up to 40%, I deliver secure, innovative solutions for scalable environments
            </p>
          </div>

          <div className=''>
            <Link href={'/'}>
              <Button
                className=' flex items-center justify-center gap-2'
                onClick={handleClick}
              >
                Get in touch with me
                <Mail className='  w-4' />
                {/* <ArrowRight className=' ml-2 w-4' /> */}
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
          <HoverCard>
            <HoverCardTrigger>
              {' '}
              <Image
                className='rounded-full'
                src={headshot}
                width={350}
                height={300}
                alt='Avatar'
              ></Image>
            </HoverCardTrigger>
            <HoverCardContent>
              Don't ask why my collar is crooked
            </HoverCardContent>
          </HoverCard>
        </div>
      </div>
    </div>
  );
};

export default Hero;
