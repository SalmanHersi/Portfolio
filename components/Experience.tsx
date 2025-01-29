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
              Network Specialist{' '}
            </h3>
          </div>
          <div className='inline'>
            <a href='https://silfarlabs.com/'>
              <span className='relative rounded bg-muted p-1 px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold'>
                Silfar Labs
              </span>
            </a>
          </div>
        </div>
        <div>
          <p className='leading-7 [&:not(:first-child)]:mt-6'>
            First point of contact for 100+ employees, resolving 30+ weekly macOS, Google Workspace, and Slack issues with 95% satisfaction rate.
            Deployed JAMF MDM to automate device provisioning, reducing onboarding setup time by 25%.
            Streamlined onboarding/offboarding via ServiceNow, managing hardware deployment, access rights (Okta SSO), and asset tracking.
            Diagnosed and escalated critical infrastructure outages (WiFi, Zscaler VPN) to engineering teams, maintaining 99% SLA compliance.
            Reduced ticket volume by 25% and improved team efficiency by 20% through centralized IT knowledge base.
          </p>
        </div>
      </div>

      <div className=' flex max-w-5xl flex-col gap-4 border-l-2 pl-6 '>
        <div className='gap-4 md:flex md:items-center'>
          <div>
            <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight'>
              IT Support{' '}
            </h3>
          </div>
          <div className='inline'>
            <a href='https://www.mosaic.com/'>
              <span className='relative rounded bg-muted p-1 px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold'>
               100 Devs
              </span>
            </a>
          </div>
        </div>
        <div>
          <p className='leading-7 [&:not(:first-child)]:mt-6'>
            Supported macOS environments, resolving compatibility issues for 50+ employees and deploying security updates via JAMF.
            Administered enterprise applications (Okta, Google Workspace), including SSO setup and troubleshooting user access issues.
            Collaborated on change management processes for web application releases, ensuring zero downtime during deployments.
            Conducted employee training sessions for new software deployments, improving user proficiency and reducing support tickets by 20%.
          </p>
        </div>
      </div>

      <div className=' flex max-w-5xl flex-col gap-3 border-l-2 pl-6'>
        <div className='gap-4 md:flex md:items-center '>
          <div>
            <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight '>
              IT Analyst{' '}
            </h3>
          </div>
          <div className='inline'>
            <a href='https://www.mosaic.com/'>
              <span className='relative rounded bg-muted p-1 px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold'>
              Mosaic North America
              </span>
            </a>
          </div>
        </div>
        <div>
          <p className='leading-7 [&:not(:first-child)]:mt-6'>
            Provided remote support for 250+ clients, resolving Salesforce, Slack, and VPN connectivity issues.
            Implemented 2FA and Zscaler VPN protocols, reducing security breaches by 40%.
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
            <a href='https://miipe.com/'>
              <span className='relative rounded bg-muted p-1 px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold'>
                Miipe
              </span>
            </a>
          </div>
        </div>
        <div>
          <p className='leading-7 [&:not(:first-child)]:mt-6'>
            Managed 150+ macOS/Windows devices via ServiceNow, achieving 100% audit compliance.
            Created user guides and testing documentation, improving troubleshooting efficiency by 30%.
          </p>
        </div>
        <a
          href='https://utfs.io/f/5mHFO6Bp0KeYyliAliImN3jdKLuftVcPGr2U8BST5Qhv1iyb'
          className=' flex items-center pt-4'
        >
          <h4 className='  scroll-m-20 border-b-2  p-1 text-xl font-semibold tracking-tight hover:text-neutral-600 '>
            View Full Résumé
          </h4>
          <ArrowUpRight />
        </a>
      </div>
    </div>
  );
}
