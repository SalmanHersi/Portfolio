import React from 'react';

interface TimelineItemProps {
  title: string;
  org: string;
  location: string;
  period: string;
  items: string[];
}

function TimelineItem({ title, org, location, period, items }: TimelineItemProps) {
  return (
    <div className="relative pl-8 pb-10 last:pb-0 group">
      {/* Timeline line */}
      <div className="absolute left-[5px] top-2.5 bottom-0 w-px bg-border group-last:hidden" />
      {/* Timeline dot */}
      <div className="absolute left-0 top-2 h-[11px] w-[11px] rounded-full border-2 border-foreground bg-background" />

      <h3 className="text-lg font-semibold leading-snug">{title}</h3>
      <p className="mt-1 text-base text-muted-foreground">
        {org} &middot; {location}
        <span className="mx-2 text-border">|</span>
        <span style={{ fontFamily: 'var(--font-mono)' }} className="text-xs">
          {period}
        </span>
      </p>

      {items.length > 0 && (
        <ul className="mt-4 space-y-2 text-base text-muted-foreground">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground/25" />
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function Experience() {
  return (
    <section className="py-16 md:py-24">
      {/* Work Experience */}
      <div className="mb-12 flex items-center gap-4">
        <span
          className="text-xs font-medium tracking-[0.3em] uppercase text-foreground"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          Experience
        </span>
        <div className="h-px flex-1 bg-border" />
      </div>

      <div className="mb-20">
        <TimelineItem
          title="Cloud Security Consultant (Architecture & Strategy)"
          org="Miipe Quality Solutions"
          location="Toronto, ON"
          period="Sept 2023 – Present"
          items={[
            'Architected Zero Trust IAM frameworks for enterprise clients including Bell and Element, collaborating with 15+ SMEs to reduce security friction by 35%.',
            'Implemented Security-by-Default guardrails and automated access controls across hybrid cloud environments, streamlining identity management workflows.',
            'Designed monitoring and detective controls using AWS Config and CloudTrail, ensuring continuous system health tracking and compliance validation.',
            'Mentored junior team members on security best practices, knowledge sharing, and incident response coordination to strengthen organizational capabilities.',
          ]}
        />
        <TimelineItem
          title="Security Advisor"
          org="Mosaic North America"
          location="Toronto, ON"
          period="May 2022 – Aug 2023"
          items={[
            'Managed application security posture for e-commerce portfolio processing $5M+ annually, ensuring 250+ web assets met security standards.',
            'Conducted security vulnerability assessments using Nessus and Burp Suite, identifying and remediating critical risks to maintain system integrity.',
            'Automated security monitoring workflows and implemented SIEM analytics to improve threat detection and reduce manual review processes.',
            'Collaborated with IT teams to document security procedures and develop knowledge-sharing resources for incident response and asset management.',
          ]}
        />
        <TimelineItem
          title="Junior Cyber Security Analyst (SOC Operations)"
          org="NPower"
          location="Toronto, ON"
          period="Jan 2021 – Dec 2021"
          items={[
            'Operated Tier-1 SOC monitoring using Splunk, triaging 50+ daily security events across 500-user network with 95% accuracy rate.',
            'Managed IT service desk tickets and coordinated incident response activities, ensuring swift resolution and comprehensive documentation of system issues.',
          ]}
        />
      </div>

      {/* Education */}
      <div className="mb-12 flex items-center gap-4">
        <span
          className="text-xs font-medium tracking-[0.3em] uppercase text-foreground"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          Education
        </span>
        <div className="h-px flex-1 bg-border" />
      </div>

      <div className="mb-20 pl-8 relative">
        <div className="absolute left-0 top-2 h-[11px] w-[11px] rounded-full border-2 border-foreground bg-background" />
        <h3 className="text-lg font-semibold">
          Honours Bachelor of Commerce - Information Technology
        </h3>
        <p className="mt-1 text-base text-muted-foreground">
          York University &middot; Toronto, ON
        </p>
        <p className="mt-3 text-base text-muted-foreground flex items-start gap-3">
          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground/25" />
          Specialized in Information Technology Auditing & Assurance Stream
        </p>
      </div>

      {/* Certifications */}
      <div className="mb-12 flex items-center gap-4">
        <span
          className="text-xs font-medium tracking-[0.3em] uppercase text-foreground"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          Certifications
        </span>
        <div className="h-px flex-1 bg-border" />
      </div>

      <div className="flex flex-col gap-4 pl-8">
        {[
          { name: 'Okta Certified Professional', year: '2026' },
          { name: 'AWS Certified Solutions Architect Associate', year: '2025' },
          { name: 'CompTIA Security+', year: '2021' },
        ].map((cert) => (
          <div key={cert.name} className="relative flex items-center gap-3">
            <div className="absolute -left-8 top-1/2 -translate-y-1/2 h-[11px] w-[11px] rounded-full border-2 border-foreground bg-background" />
            <span className="text-base font-medium">{cert.name}</span>
            <span
              className="text-xs text-muted-foreground"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              ({cert.year})
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
