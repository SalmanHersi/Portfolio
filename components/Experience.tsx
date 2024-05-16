import { ArrowRight, ArrowUpRight, Dot } from 'lucide-react';

export default function Experience() {
  return (
    <div className='flex flex-col items-center justify-center gap-6 p-5 '>
      <div>
        <h1 className=' scroll-m-20 pt-3 text-3xl font-semibold tracking-tight first:mt-0 md:mx-auto '>
          Experience
        </h1>
      </div>
      <div className=' flex max-w-5xl flex-col gap-4 border-l-2 pl-6 '>
        <div className='gap-4 md:flex md:items-center'>
          <div>
            <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight'>
              E-Commerce Coordinator{' '}
            </h3>
          </div>
          <div className='inline'>
            <span className='relative rounded bg-muted p-1 px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold'>
              Mosaic North America
            </span>
          </div>
        </div>
        <div>
          <p className='leading-7 [&:not(:first-child)]:mt-6'>
            Collaborated in a dynamic team to deliver comprehensive web design
            solutions, including e-commerce platforms and cybersecurity, serving
            250 clients across various industries, and conducted personalized
            consultations to optimize their digital storefronts.
          </p>
        </div>
      </div>

      <div className=' flex max-w-5xl flex-col gap-3 border-l-2 pl-6'>
        <div className='gap-4 md:flex md:items-center '>
          <div>
            <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight '>
              Software Developer{' '}
            </h3>
          </div>
          <div className='inline'>
            <span className='relative rounded bg-muted p-1 px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold'>
              100 Devs
            </span>
          </div>
        </div>
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

      <div className=' flex max-w-5xl flex-col gap-3 border-l-2 pl-6'>
        <div className='gap-4 md:flex md:items-center'>
          <div>
            <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight'>
              Analyst{' '}
            </h3>
          </div>
          <div className='inline'>
            <span className='relative rounded bg-muted p-1 px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold'>
              Miipe
            </span>
          </div>
        </div>
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
        <a
          href='https://utfs.io/f/e35f8d5b-ff7e-4228-a0a3-2e70ce7be387-gj2iti.pdf'
          className=' flex items-center pt-4'
        >
          <h4 className='scroll-m-20 border-b-2  p-1 text-xl font-semibold tracking-tight '>
            View Full Résumé
          </h4>
          <ArrowUpRight />
        </a>
      </div>
    </div>
  );
}
