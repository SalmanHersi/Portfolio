import React from 'react';
import Image from 'next/image';
import { Download, Github, Linkedin, Mail, Twitter } from 'lucide-react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="py-16 md:py-20">
      {/* Profile header */}
      <div className="animate-fade-up stagger-1 flex items-center gap-4 mb-8">
        <Image
          className="rounded-full"
          src="/imgs/headshot.jpg"
          width={64}
          height={64}
          alt="Salman Hersi"
        />
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h1 className="text-xl font-semibold">Salman Hersi</h1>
            <span className="rounded-full border border-brand/30 bg-brand/10 px-2.5 py-0.5 text-xs font-medium text-brand">
              Open to roles
            </span>
          </div>
          <p className="text-muted-foreground">Cloud + IAM security. Zero Trust. Automation.</p>
        </div>
      </div>

      {/* Bio */}
      <div className="animate-fade-up stagger-2 space-y-4 mb-8 max-w-xl">
        <p className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
          I build automated defenses for cloud environments and design Zero Trust access that scales.
        </p>
        <p className="text-base leading-relaxed text-foreground/90">
          I design Zero Trust architectures and secure cloud environments for enterprise clients.
          Currently focused on IAM strategy and security automation at Miipe Quality Solutions.
        </p>
        <p className="text-base leading-relaxed text-foreground/90">
          Outside client work, I build automations that help businesses move faster and stay secure.
        </p>
      </div>

      {/* Signals */}
      <div className="animate-fade-up stagger-3 flex flex-wrap gap-2 mb-8">
        {[
          'Cloud security (AWS)',
          'IAM strategy + governance',
          'Zero Trust architecture',
          'Security automation',
          'Detection + response workflows',
        ].map((signal) => (
          <span
            key={signal}
            className="inline-flex items-center rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground"
          >
            {signal}
          </span>
        ))}
      </div>

      {/* Contact & Social */}
      <div className="animate-fade-up stagger-4 flex flex-wrap items-center gap-3">
        <a
          href="mailto:hersi.salman@gmail.com"
          className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-4 py-2 text-sm font-medium transition-opacity hover:opacity-80"
        >
          <Mail className="h-4 w-4" />
          hersi.salman@gmail.com
        </a>

        <a
          href="https://utfs.io/f/5mHFO6Bp0KeY7wP3Pir8juwnfIT4oFND31Z2SgkemC9Uvbxi"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:border-foreground/30"
        >
          <Download className="h-4 w-4" />
          Download CV
        </a>

        {[
          { href: 'https://www.linkedin.com/in/salmanhersi/', icon: Linkedin, label: 'LinkedIn' },
          { href: 'https://github.com/SalmanHersi', icon: Github, label: 'GitHub' },
          { href: 'https://twitter.com/namlase', icon: Twitter, label: 'Twitter' },
        ].map(({ href, icon: Icon, label }) => (
          <Link
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:border-foreground/30"
          >
            <Icon className="h-4 w-4" />
            {label}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Hero;
