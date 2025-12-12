import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card';
import { Button } from './ui/button';
import { ExternalLink, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function Projects() {
  return (
    <section className="py-12 md:py-16">
      <h2 className="mb-10 text-3xl font-bold text-center md:text-4xl">
        Projects
      </h2>
      <div className="flex flex-col gap-6">
        {/* DonorClaim */}
        <Card className="overflow-hidden">
          <CardHeader>
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <CardTitle className="text-xl md:text-2xl">DonorClaim</CardTitle>
                  <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                    <Sparkles className="h-3 w-3" />
                    AI-Powered
                  </span>
                </div>
                <CardDescription className="mt-1">
                  Donation Management Platform for Canadian Charities
                </CardDescription>
              </div>
              <Link href="https://www.donorclaim.com/" target="_blank">
                <Button variant="outline" size="sm" className="gap-2">
                  Live Demo
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              A full-stack AI-powered SaaS platform that automates donation tracking and CRA-compliant tax receipt generation for Canadian nonprofits. Uses AI to intelligently parse e-transfer notifications and match donations to donor profiles.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Next.js', 'TypeScript', 'OpenAI', 'Stripe API', 'PostgreSQL', 'Tailwind CSS', 'Vercel'].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
            <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
              <li>AI-powered parsing of bank e-transfer notifications for automatic data extraction</li>
              <li>Self-service donor portal for instant receipt claims</li>
              <li>Real-time analytics dashboard with CSV exports</li>
              <li>Automated email delivery for Stripe donations</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
