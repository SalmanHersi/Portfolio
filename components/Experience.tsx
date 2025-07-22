import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card';

export default function Experience() {
  return (
    <section id="professional-experience" className="w-full max-w-4xl mx-auto px-4 py-12 md:py-16 font-sans">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-900 dark:text-gray-100">Professional Experience</h2>
      <div className="flex flex-col gap-8">
        {/* Security Consultant */}
        <Card>
          <CardHeader>
            <CardTitle>Security Consultant</CardTitle>
            <CardDescription>Miipe Quality Solutions, Remote | September 2023 – Present</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2 text-gray-800 dark:text-gray-200">
              <li>Conducted in-depth audits to identify operational vulnerabilities, recommending risk mitigation strategies aligned with incident response protocols and reducing simulated threats by 40% using tools like Cypress for automated testing.</li>
              <li>Led process mapping for 20+ projects, highlighting security risks and achieving 30% improved compliance through data integrity optimizations.</li>
              <li>Performed QA testing focused on endpoint security and secure data handling, simulating breach scenarios to prevent IT system vulnerabilities.</li>
            </ul>
          </CardContent>
        </Card>
        {/* Security Advisor (recent) */}
        <Card>
          <CardHeader>
            <CardTitle>Security Advisor</CardTitle>
            <CardDescription>Mosaic North America, Remote | May 2022 – August 2023</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2 text-gray-800 dark:text-gray-200">
              <li>Led vulnerability assessments for e-commerce platforms, deploying risk mitigation measures that boosted secure traffic by 30% and prevented data breaches using tech like Shopify (secure platforms) and Cloudflare (web application firewalls).</li>
              <li>Oversaw compliance auditing and threat detection for 250 clients, achieving 15% above-target results by advising on breach prevention, access controls, and endpoint protection.</li>
              <li>Onboarded 50 partners with 4.8/5 satisfaction rating through cybersecurity consultations; tech stack included Sucuri (malware scanning), Google Analytics (threat monitoring), and Zscaler (VPN security).</li>
            </ul>
          </CardContent>
        </Card>
        {/* Junior Cyber Security Analyst */}
        <Card>
          <CardHeader>
            <CardTitle>Junior Cyber Security Analyst</CardTitle>
            <CardDescription>NPower, Toronto, ON | January 2021 – December 2021</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2 text-gray-800 dark:text-gray-200">
              <li>Assisted in threat detection and incident response for network systems, identifying risks and reducing potential breaches by 25% through vulnerability assessments and scanning tools.</li>
              <li>Generated compliance reports to strengthen system defenses, focusing on data integrity and organizational asset protection.</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
