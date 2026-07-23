import React from 'react';
import { FileText } from 'lucide-react';

function AwsLogo({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 304 182"
      className={className}
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="m86 66 2 9c0 3 1 5 3 8v2l-1 3-7 4-2 1-3-1-4-5-3-6c-8 9-18 14-29 14-9 0-16-3-20-8-5-4-8-11-8-19s3-15 9-20c6-6 14-8 25-8a79 79 0 0 1 22 3v-7c0-8-2-13-5-16-3-4-8-5-16-5l-11 1a80 80 0 0 0-14 5h-2c-1 0-2-1-2-3v-5l1-3c0-1 1-2 3-2l12-5 16-2c12 0 20 3 26 8 5 6 8 14 8 25v32zM46 82l10-2c4-1 7-4 10-7l3-6 1-9v-4a84 84 0 0 0-19-2c-6 0-11 1-15 4-3 2-4 6-4 11s1 8 3 11c3 2 6 4 11 4zm80 10-4-1-2-3-23-78-1-4 2-2h10l4 1 2 4 17 66 15-66 2-4 4-1h8l4 1 2 4 16 67 17-67 2-4 4-1h9c2 0 3 1 3 2v2l-1 2-24 78-2 4-4 1h-9l-4-1-1-4-16-65-15 64-2 4-4 1h-9zm129 3a66 66 0 0 1-27-6l-3-3-1-2v-5c0-2 1-3 2-3h2l3 1a54 54 0 0 0 23 5c6 0 11-2 14-4 4-2 5-5 5-9l-2-7-10-5-15-5c-7-2-13-6-16-10a24 24 0 0 1 5-34l10-5a44 44 0 0 1 20-2 110 110 0 0 1 12 3l4 2 3 2 1 4v4c0 3-1 4-2 4l-4-2c-6-2-12-3-19-3-6 0-11 0-14 2s-4 5-4 9c0 3 1 5 3 7s5 4 11 6l14 4c7 3 12 6 15 10s5 9 5 14l-3 12-7 8c-3 3-7 5-11 6l-14 2z"
      />
      <path
        d="M274 144A220 220 0 0 1 4 124c-4-3-1-6 2-4a300 300 0 0 0 263 16c5-2 10 4 5 8z"
        fill="#f90"
      />
      <path
        d="M287 128c-4-5-28-3-38-1-4 0-4-3-1-5 19-13 50-9 53-5 4 5-1 36-18 51-3 2-6 1-5-2 5-10 13-33 9-38z"
        fill="#f90"
      />
    </svg>
  );
}

function Isc2Logo() {
  return <span className="font-mono text-sm font-bold tracking-tight">ISC2</span>;
}

function OktaLogo() {
  return <span className="text-sm font-bold tracking-tight text-[#00297A]">okta</span>;
}

function ComptiaLogo() {
  return <span className="text-xs font-bold uppercase tracking-tight text-[#C8102E]">CompTIA</span>;
}

export default function Experience() {
  const cvUrl =
    'https://sufrvxd5wt.ufs.sh/f/5mHFO6Bp0KeYdgzFdhc3gBE4l8hZqFUSfd2kX9tGJnsi7YKM';

  const certifications = [
    {
      name: 'CISSP',
      vendor: 'ISC2',
      logo: <Isc2Logo />,
    },
    {
      name: 'AWS Certified Solutions Architect Associate',
      vendor: 'Amazon Web Services',
      year: '2025',
      logo: <AwsLogo className="h-5 w-9 text-foreground" />,
    },
    {
      name: 'CompTIA Security+',
      vendor: 'CompTIA',
      year: '2021',
      logo: <ComptiaLogo />,
    },
    {
      name: 'Okta Certified Professional',
      vendor: 'Okta',
      logo: <OktaLogo />,
    },
  ];

  const education = [
    {
      school: 'Georgia Institute of Technology',
      program: 'Master of Science in Cybersecurity',
      dates: 'Jun 2026 - Aug 2028',
      detail: 'Currently pursuing. Expected graduation: August 2028.',
    },
    {
      school: 'York University',
      program: 'Honours Bachelor of Commerce - Information Technology',
    },
  ];

  return (
    <section className="py-12">
      <div className="h-px bg-border mb-12" />

      <div className="animate-fade-up space-y-6">
        <div className="rounded-xl border border-border bg-card/70 p-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="font-semibold text-foreground">Full experience</h3>
              <p className="text-sm text-muted-foreground">
                View my CV for the full work history, project context, and role details.
              </p>
            </div>

            {cvUrl ? (
              <a
                href={cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-80"
              >
                <FileText className="h-4 w-4" />
                View CV
              </a>
            ) : (
              <span className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-muted-foreground">
                <FileText className="h-4 w-4" />
                CV link coming soon
              </span>
            )}
          </div>
        </div>

        {/* Certifications */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Certifications
          </h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="flex min-h-[72px] items-center gap-3 rounded-xl border border-border bg-card/70 p-3"
              >
                <div className="flex h-10 w-16 flex-shrink-0 items-center justify-center rounded-lg bg-background text-foreground">
                  {cert.logo}
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-foreground">{cert.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {cert.vendor}
                    {cert.year ? ` - ${cert.year}` : ''}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Education
          </h3>
          <div className="space-y-3">
            {education.map((item) => (
              <div key={item.school}>
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <p className="text-sm font-semibold text-foreground">{item.school}</p>
                  {item.dates ? (
                    <p className="text-sm font-medium text-muted-foreground">{item.dates}</p>
                  ) : null}
                </div>
                <p className="text-sm text-muted-foreground">{item.program}</p>
                {item.detail ? (
                  <p className="text-sm text-foreground/90">{item.detail}</p>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
