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
    <div className='container mx-auto px-4'>
      <div className='flex flex-col items-center space-y-8 py-8'>
        <h1 className='scroll-m-20 text-3xl font-semibold tracking-tight'>
          Recent Projects
        </h1>

        <div className='grid gap-8 w-full max-w-5xl'>
          <a href='https://github.com/SalmanHersi/GitSearch'>
            <Card className='transform duration-500 ease-in-out hover:scale-105'>
              <div className='flex flex-col md:flex-row md:items-center relative'>
                <CardHeader className='flex-1 space-y-6 p-6'>
                  <CardTitle className='text-2xl'>GitSearch</CardTitle>
                  <CardDescription className='text-lg'>
                    GitSearch is an advanced Github search application built with
                    React for component-based UIs, Next.js for server-side
                    rendering to enhance SEO and performance, and styled with
                    TailwindCSS and Chakra UI for a clean, efficient user
                    experience.
                  </CardDescription>
                  <div className='flex flex-wrap gap-3'>
                    <Badge className='px-3 py-1'>React</Badge>
                    <Badge className='px-3 py-1'>CSS</Badge>
                    <Badge className='px-3 py-1'>Next.js</Badge>
                    <Badge className='px-3 py-1'>Tailwind</Badge>
                    <Badge className='px-3 py-1'>ChakraUI</Badge>
                  </div>
                </CardHeader>
                <CardContent className='p-6 md:w-1/2'>
                  <div className='relative aspect-video w-full'>
                    <Image
                      className='rounded-lg'
                      src='https://utfs.io/f/11dc0417-5243-4a21-8283-6761a2b32bb0-21uln.png'
                      fill
                      style={{ objectFit: 'cover' }}
                      alt='Picture of GitSearch Application'
                    />
                  </div>
                </CardContent>
              </div>
            </Card>
          </a>

          <a href='https://github.com/SalmanHersi/tinyapp'>
            <Card className='transform duration-500 ease-in-out hover:scale-105'>
              <div className='flex flex-col md:flex-row md:items-center relative'>
                <CardHeader className='flex-1 space-y-6 p-6'>
                  <CardTitle className='text-2xl'>Tiny App</CardTitle>
                  <CardDescription className='text-lg'>
                    TinyApp is a full-stack web application built with Node.js and
                    Express that allows users to shorten URLs. It uses EJS for
                    dynamic web page rendering, providing a simple solution for
                    managing shortened links.
                  </CardDescription>
                  <div className='flex flex-wrap gap-3'>
                    <Badge className='px-3 py-1'>HTML</Badge>
                    <Badge className='px-3 py-1'>CSS</Badge>
                    <Badge className='px-3 py-1'>Node</Badge>
                    <Badge className='px-3 py-1'>EJS</Badge>
                    <Badge className='px-3 py-1'>Express</Badge>
                  </div>
                </CardHeader>
                <CardContent className='p-6 md:w-1/2'>
                  <div className='relative aspect-video w-full'>
                    <Image
                      className='rounded-lg'
                      src='https://utfs.io/f/98964fde-df72-4151-9cf1-046e9c113bce-euyk5.png'
                      fill
                      style={{ objectFit: 'cover' }}
                      alt='Picture of TinyApp Application'
                    />
                  </div>
                </CardContent>
              </div>
            </Card>
          </a>

          <a href='https://github.com/Angelus-20/resource-wall'>
            <Card className='transform duration-500 ease-in-out hover:scale-105'>
              <div className='flex flex-col p-6 space-y-6 relative'>
                <div className='flex items-center justify-between'>
                  <CardTitle className='text-2xl'>Vend</CardTitle>
                </div>
                <CardDescription className='text-lg'>
                  A dynamic web application for streamlined online buying and
                  selling, incorporating Express, JSX, Tailwind CSS, and
                  PostgreSQL. Enabled users to browse, create, categorize, rate,
                  and favorite deals. Implemented user-friendly features to
                  elevate the overall user experience.
                </CardDescription>
                <div className='flex flex-wrap gap-3'>
                  <Badge className='px-3 py-1'>HTML</Badge>
                  <Badge className='px-3 py-1'>Express</Badge>
                  <Badge className='px-3 py-1'>PostGres</Badge>
                  <Badge className='px-3 py-1'>JSX</Badge>
                  <Badge className='px-3 py-1'>Tailwind</Badge>
                </div>
              </div>
            </Card>
          </a>
        </div>

        <a
          href='https://github.com/SalmanHersi?tab=repositories'
          className='flex items-center gap-2 border-b-2 p-1 text-xl font-semibold hover:text-neutral-600'
        >
          <span>View Full Project Archive</span>
          <ArrowRight />
        </a>
      </div>
    </div>
  );
}
