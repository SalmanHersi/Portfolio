import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card';

export default function Experience() {
  return (
    <section className="py-12 md:py-16">
      {/* Work Experience */}
      <h2 className="mb-10 text-3xl font-bold text-center md:text-4xl">
        Work Experience
      </h2>
      <div className="flex flex-col gap-6 mb-16">
        {/* Miipe Quality Solutions */}
        <Card>
          <CardHeader>
            <CardTitle>Cloud Security Consultant (Architecture & Strategy)</CardTitle>
            <CardDescription>Miipe Quality Solutions · Toronto, ON | Sept 2023 – Present</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Led Zero Trust architecture redesigns for Bell and Element, collaborating with 15+ SMEs to reduce cross-departmental security friction by ~35%.</li>
              <li>Hardened AWS Data Lakes with SSE-KMS encryption and strict bucket policies, securing 50TB+ of data with 100% sovereignty compliance.</li>
              <li>Deployed AWS Config guardrails blocking ~90% of non-compliant resource provisioning attempts before production, eliminating security debt at source.</li>
              <li>Translated stakeholder requirements into System Design Specifications, identifying 10+ critical logic gaps missed by traditional vulnerability scanners.</li>
            </ul>
          </CardContent>
        </Card>

        {/* Mosaic North America */}
        <Card>
          <CardHeader>
            <CardTitle>Security Advisor</CardTitle>
            <CardDescription>Mosaic North America · Toronto, ON | May 2022 – Aug 2023</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Managed Application Security for e-commerce portfolio processing $5M+ annually, ensuring 250+ web assets met OWASP Top 10 standards.</li>
              <li>Architected PCI-DSS compliance workflows, reducing client onboarding by 20% (~5 days saved) while maintaining 100% clean audit records.</li>
              <li>Blocked SQLi and XSS attacks at architectural level, reducing web-layer security incidents by 30% YoY through proactive system tuning.</li>
              <li>Led security training for 50+ clients on secure payment handling, reducing security-related support tickets by 40%.</li>
            </ul>
          </CardContent>
        </Card>

        {/* NPower */}
        <Card>
          <CardHeader>
            <CardTitle>Junior Cyber Security Analyst (SOC Operations)</CardTitle>
            <CardDescription>NPower · Toronto, ON | Jan 2021 – Dec 2021</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Operated Tier-1 SOC using Splunk, triaging 50+ daily events across 500-user network with 95% accuracy rate.</li>
              <li>Documented incidents in ServiceNow with detailed escalation procedures, reducing repeat investigation time by 25%.</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Education */}
      <h2 className="mb-10 text-3xl font-bold text-center md:text-4xl">
        Education
      </h2>
      <div className="flex flex-col gap-6 mb-16">
        <Card>
          <CardHeader>
            <CardTitle>Honours Bachelor of Commerce - Information Technology</CardTitle>
            <CardDescription>York University · Toronto, ON</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 text-muted-foreground">
              <li>Specialized in Information Technology Auditing & Assurance Stream</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Certifications */}
      <h2 className="mb-10 text-3xl font-bold text-center md:text-4xl">
        Certifications
      </h2>
      <div className="flex flex-col gap-4">
        <Card>
          <CardContent className="pt-6">
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li><span className="font-medium text-foreground">AWS Certified Solutions Architect Associate</span> (2025)</li>
              <li><span className="font-medium text-foreground">CompTIA Security+</span> (2021)</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
