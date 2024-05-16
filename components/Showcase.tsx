import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { Badge } from '@/components/ui/badge';
import { MoveUpRight } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function Showcase() {
  return (
    <div className='flex flex-col items-center justify-center   md:flex-row'>
      <div className=' flex flex-col items-center justify-center space-y-7 p-4 text-center md:items-start md:space-y-10 md:pt-10 md:text-left md:text-2xl'>
        <h1 className=' scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0 md:mx-auto  '>
          Recent Projects
        </h1>

        <div className=' w-96 md:w-full '>
          <Card className=' mx-auto max-w-5xl transform  duration-500 ease-in-out hover:scale-105 md:flex md:p-4'>
            <CardHeader className='flex gap-8'>
              <CardTitle className=''>GitSearch</CardTitle>
              <CardDescription className='   max-w-md text-xl'>
                GitSearch is an advanced Github search application built with
                React for component-based UIs, Next.js for server-side rendering
                to enhance SEO and performance, and styled with TailwindCSS and
                Chakra UI for a clean, efficient user experience.
              </CardDescription>
              <div className='flex flex-wrap gap-3 '>
                <Badge className=' px-3 py-1'>React</Badge>
                <Badge className=' px-3 py-1'>CSS</Badge>
                <Badge className='px-3 py-1 '>Next.js</Badge>
                <Badge className=' px-3 py-1'>Tailwind</Badge>
                <Badge className='px-3 py-1'>ChakraUI</Badge>
              </div>
            </CardHeader>
            <CardContent className=''>
              <Image
                className=' mt-12 w-full rounded-lg
              '
                src='https://utfs.io/f/11dc0417-5243-4a21-8283-6761a2b32bb0-21uln.png'
                width={500}
                height={500}
                alt='Picture of GitSearch Application'
              />
            </CardContent>
            <div>
              <MoveUpRight strokeWidth={2.5} className='hidden md:block ' />
            </div>
            {/* <CardFooter>
            <p>View on GitHub</p>
          </CardFooter> */}
          </Card>
        </div>

        <div className=' w-96 md:w-full '>
          <Card className=' max-w-5xl transform duration-500 ease-in-out hover:scale-105 md:flex md:p-4'>
            <CardHeader className='flex gap-8'>
              <CardTitle className=''>Tiny App</CardTitle>
              <CardDescription className='  max-w-md text-xl'>
                TinyApp is a full-stack web application built with Node.js and
                Express that allows users to shorten URLs. It uses EJS for
                dynamic web page rendering, providing a simple solution for
                managing shortened links.
              </CardDescription>
              <div className='flex gap-3'>
                <Badge className=' px-3 py-1'>HTML</Badge>
                <Badge className=' px-3 py-1'>CSS</Badge>
                <Badge className='px-3 py-1 '>Node</Badge>
                <Badge className=' px-3 py-1'>EJS</Badge>
                <Badge className='px-3 py-1'>Express</Badge>
              </div>
            </CardHeader>
            <CardContent className=''>
              <Image
                className=' mt-6 w-full rounded-md
              '
                src='https://utfs.io/f/98964fde-df72-4151-9cf1-046e9c113bce-euyk5.png'
                width={500}
                height={500}
                alt='Picture of GitSearch Application'
              />
            </CardContent>
            {/* <CardFooter>
            <p>View on GitHub</p>
          </CardFooter> */}
            <div className='  text-3xl '>
              <MoveUpRight strokeWidth={2.5} className='hidden md:block' />
            </div>
          </Card>
        </div>

        <a
          href='https://github.com/SalmanHersi?tab=repositories'
          className='flex items-center justify-center'
        >
          <h4 className='scroll-m-20 border-b-2  p-1 text-xl font-semibold tracking-tight hover:text-neutral-600'>
            View Full Project Archive
          </h4>
          <ArrowRight />
        </a>
      </div>
    </div>
  );
}
