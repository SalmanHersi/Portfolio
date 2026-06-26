import React from 'react';

export default function Experience() {
  const skills = [
    'Vulnerability Assessment (Tenable Nessus)',
    'Risk-Based Remediation',
    'Patch Tracking',
    'PowerShell',
    'Python',
    'Incident Response',
    'CIS + NIST Hardening',
    'Splunk',
    'Microsoft Sentinel',
    'Snort',
    'AWS',
    'Azure',
  ];

  const certifications = [
    'CISSP',
    'AWS Certified Solutions Architect Associate (2025)',
    'CompTIA Security+ (2021)',
    'Okta Certified Professional',
  ];

  const roles = [
    {
      company: 'Miipe Quality Solutions',
      dates: 'Sept 2023 - Present',
      title: 'Cloud Security Consultant (Architecture & Strategy)',
      points: [
        'Conduct security assessments across 10+ enterprise client environments including Bell and Element, identifying vulnerabilities and privilege-management gaps.',
        'Translate complex stakeholder requirements into clear security standards and design specifications, cutting stakeholder sign-off from roughly six weeks to three.',
        'Engineer Security-by-Default guardrails with AWS Config and Terraform, reducing non-compliant resource provisioning by about 30%.',
        'Develop Splunk and Microsoft Sentinel detection rules and dashboards to improve visibility across monitored enterprise infrastructure.',
      ],
    },
    {
      company: 'Mosaic North America',
      dates: 'May 2022 - Aug 2023',
      title: 'Security Advisor (IAM & Solutions Engineering)',
      points: [
        'Served as primary security advisor for B2B clients, presenting risk-based remediation roadmaps and countermeasures to senior stakeholders.',
        'Architected SSO, MFA, and RBAC standards for a high-volume e-commerce portfolio processing $5M+ annually across 250+ client web assets.',
        'Partnered with client engineering teams to remediate authorization weaknesses and enforce least-privilege access through periodic reviews.',
        'Led security governance workshops for 50+ e-commerce teams, reducing security-related operational overhead by 40%.',
      ],
    },
    {
      company: 'NPower',
      dates: 'Jan 2021 - Dec 2021',
      title: 'Junior Cyber Security Analyst (SOC Operations)',
      points: [
        'Conducted Tier-1 SOC monitoring in a simulated enterprise environment using Splunk searches to analyze network and authentication logs.',
        'Managed incident response cases in Jira, documenting case notes and developing SOPs for clear alert escalation pathways.',
      ],
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

      <h2 className="text-2xl font-bold mb-6 animate-fade-up">Experience</h2>

      <div className="animate-fade-up stagger-1 space-y-6">
        <p className="text-base leading-relaxed text-foreground/90 max-w-xl">
          CISSP-certified cybersecurity analyst with 5+ years in vulnerability assessment,
          security remediation, and risk management across enterprise IT and cloud environments.
        </p>

        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="inline-flex items-center rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="space-y-4">
          {roles.map((role) => (
            <article
              key={`${role.company}-${role.title}`}
              className="rounded-xl border border-border bg-card/70 p-4"
            >
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="font-semibold text-foreground">{role.company}</h3>
                  <p className="text-sm text-muted-foreground">{role.title}</p>
                </div>
                <p className="text-sm font-medium text-muted-foreground">{role.dates}</p>
              </div>

              <ul className="mt-3 space-y-2">
                {role.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-2 text-sm leading-relaxed text-foreground/90"
                  >
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Certifications */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Certifications
          </h3>
          <div className="flex flex-wrap gap-2">
            {certifications.map((cert) => (
              <span
                key={cert}
                className="inline-flex items-center rounded-full border border-border px-3 py-1 text-sm text-muted-foreground"
              >
                {cert}
              </span>
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
