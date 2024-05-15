import { Dot } from 'lucide-react';

export default function Experience() {
  return (
    <div className='flex flex-col items-center justify-center gap-6 p-5 '>
      <div>
        <h1 className=' scroll-m-20 pt-3 text-3xl font-semibold tracking-tight first:mt-0 md:mx-auto '>
          Experience
        </h1>
      </div>
      <div className=' flex max-w-5xl flex-col gap-3'>
        <div></div>
        <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight'>
          E-Commerce Coordinator{' '}
          <div className=' flex gap-3 '>
            <span className='relative rounded bg-muted p-1 px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold'>
              Mosaic North America
            </span>
          </div>
        </h3>
        <div>
          <p className='leading-7 [&:not(:first-child)]:mt-6'>
            Collaborated in a dynamic team to deliver comprehensive web design
            solutions, including e-commerce platforms and cybersecurity, serving
            250 clients across various industries, and conducted personalized
            consultations to optimize their digital storefronts.
          </p>
        </div>
      </div>
      <div className='flex max-w-5xl flex-col gap-3 '>
        <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight'>
          Software Developer{' '}
          <span className='relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold'>
            100 Devs
          </span>
        </h3>
        <div>
          <p className='leading-7 [&:not(:first-child)]:mt-6'>
            Worked with a development team to create responsive web applications
            using best practices and SCRUM methodologies. Developed full-stack
            applications and backend APIs to enhance front-end performance.
            Communicated with clients to optimize web presence and user
            experience, while building customized websites that improve site
            traffic and sales management.
          </p>
        </div>
      </div>
      <div className='flex max-w-5xl flex-col gap-3 '>
        <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight'>
          Analyst
          <span className='relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold'>
            Miipe
          </span>
        </h3>
        <div>
          <p className='leading-7 [&:not(:first-child)]:mt-6'>
            Worked with a development team to create responsive web applications
            using best practices and SCRUM methodologies. Developed full-stack
            applications and backend APIs to enhance front-end performance.
            Communicated with clients to optimize web presence and user
            experience, while building customized websites that improve site
            traffic and sales management.
          </p>
        </div>
      </div>
    </div>
  );
}
