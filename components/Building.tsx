import React from 'react';
import { ArrowRight, Receipt } from 'lucide-react';
import Link from 'next/link';

function AwsIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 304 182"
      className={className}
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

interface ProjectItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  external?: boolean;
  tags?: string[];
}

function ProjectItem({ icon, title, description, href, external, tags }: ProjectItemProps) {
  const linkProps = external
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <Link
      href={href}
      {...linkProps}
      className="group flex items-start gap-4 rounded-xl border border-border bg-card/70 p-4 transition-colors hover:border-foreground/20"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-foreground">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-medium text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
        {tags && tags.length > 0 ? (
          <div className="mt-2 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border px-2 py-0.5 text-[11px] font-medium text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        ) : null}
      </div>
      <span className="text-sm text-muted-foreground flex items-center gap-1 group-hover:text-foreground transition-colors">
        Learn more
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}

export default function Building() {
  return (
    <section className="py-6">
      <div className="h-px bg-border mb-6" />

      <h2 className="text-2xl font-bold mb-6 animate-fade-up">Selected Work</h2>

      <div className="space-y-3 animate-fade-up stagger-1">
        <ProjectItem
          icon={<AwsIcon className="h-6 w-6" />}
          title="AWS IAM Drift Detector"
          description="Serverless automation that audits IAM changes, flags risky policy drift, and kicks off response workflows."
          href="/work/aws-iam-drift-detector"
          tags={['AWS', 'Lambda', 'EventBridge', 'IAM']}
        />
        <ProjectItem
          icon={<Receipt className="h-5 w-5" />}
          title="How I Spent $300 on a Mini PC to Learn Cybersecurity"
          description="A Marketplace mini PC became a Proxmox lab for detections, automation, and response practice."
          href="/work/proxmox-detection-automation"
          tags={['Proxmox', 'SIEM', 'n8n', 'Automation']}
        />
      </div>
    </section>
  );
}
