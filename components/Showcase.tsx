import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import Image from 'next/image';

export default function Showcase() {
  return (
    <div className='container flex flex-col items-center   md:flex-row'>
      <div className=' flex flex-col items-center justify-center space-y-7 p-4 text-center md:items-start md:space-y-10 md:pt-10 md:text-left md:text-2xl'>
        <h1 className=' scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0 '>
          Recent Projects
        </h1>
        <Card>
          <CardHeader>
            <CardTitle className='w-[500px]'>GitSearch</CardTitle>
            <CardDescription>
              GitSearch is an advanced Github search application built with
              React for component-based UIs, Next.js for server-side rendering
              to enhance SEO and performance, and styled with TailwindCSS and
              Chakra UI for a clean, efficient user experience.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Image
              src='https://utfs.io/f/11dc0417-5243-4a21-8283-6761a2b32bb0-21uln.png'
              width={500}
              height={500}
              alt='Picture of the author'
            />
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
