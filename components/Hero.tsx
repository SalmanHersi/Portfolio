'use client';
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Twitter, Shield } from 'lucide-react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative py-24 md:py-36">
      <div className="relative flex flex-col items-center gap-14 md:flex-row md:items-center md:justify-between">
        {/* Text Content */}
        <div className="flex flex-col items-center space-y-7 text-center md:items-start md:text-left">
          <div className="animate-fade-up stagger-1">
            <span
              className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] uppercase text-foreground/70"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              <Shield className="h-3.5 w-3.5" />
              Cloud Security Consultant
            </span>
          </div>

          <h1 className="animate-fade-up stagger-2 text-6xl font-extrabold tracking-tight lg:text-8xl text-foreground">
            Salman
            <br />
            Hersi<span className="text-muted-foreground">.</span>
          </h1>

          {/* Image - visible on all sizes, hidden on md+ via CSS */}
          <div className="block md:hidden">
            <Image
              className="rounded-full ring-1 ring-border"
              src="/imgs/headshot.jpg"
              width={240}
              height={240}
              alt="Salman Hersi"
            />
          </div>

          <p className="animate-fade-up stagger-3 max-w-lg text-lg leading-relaxed text-muted-foreground md:text-xl">
            Designing Zero Trust architectures, hardening AWS environments, and
            building secure systems from the ground up.
          </p>

          <div className="animate-fade-up stagger-4 flex flex-col items-center gap-6 md:items-start">
            <a href="mailto:hersi.salman@gmail.com">
              <Button
                size="lg"
                className="gap-2.5 rounded-full px-8 text-sm font-semibold transition-all hover:opacity-80 hover:-translate-y-0.5"
              >
                <Mail className="h-4 w-4" />
                Get in touch
              </Button>
            </a>

            <div className="flex items-center gap-3">
              {[
                { href: 'https://www.linkedin.com/in/salmanhersi/', icon: Linkedin, label: 'LinkedIn' },
                { href: 'https://github.com/SalmanHersi', icon: Github, label: 'GitHub' },
                { href: 'https://twitter.com/namlase', icon: Twitter, label: 'Twitter' },
              ].map(({ href, icon: Icon, label }) => (
                <Link
                  key={href}
                  href={href}
                  aria-label={label}
                  className="rounded-full border border-border p-2.5 text-muted-foreground transition-all hover:text-foreground hover:border-foreground/30 hover:-translate-y-0.5"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Image */}
        <div className="hidden flex-shrink-0 md:block animate-slide-in-right stagger-2">
          <div className="rounded-full p-[2px] bg-gradient-to-br from-foreground/20 via-foreground/5 to-transparent">
            <Image
              className="rounded-full"
              src="/imgs/headshot.jpg"
              width={320}
              height={320}
              alt="Salman Hersi"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
