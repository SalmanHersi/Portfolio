'use client';
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import Link from 'next/link';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';

const handleClick = () => {
  window.location.href = 'mailto:hersi.salman@gmail.com';
};

const Hero = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="flex flex-col items-center gap-10 md:flex-row md:items-center md:justify-between">
        {/* Text Content */}
        <div className="flex flex-col items-center space-y-6 text-center md:items-start md:text-left">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            Salman Hersi
          </h1>
          <h2 className="text-2xl font-semibold tracking-tight text-muted-foreground md:text-3xl">
            Security Analyst
          </h2>

          {/* Mobile Image */}
          <div className="md:hidden">
            <Image
              className="rounded-full"
              src="/imgs/headshot.jpg"
              width={280}
              height={280}
              alt="Salman Hersi"
            />
          </div>

          <p className="max-w-md text-lg text-muted-foreground">
            Specializing in vulnerability assessment, threat detection, and risk
            mitigation to protect digital assets. With CompTIA Security+
            certification and proven results in reducing breaches by up to 40%,
            I deliver secure, innovative solutions for scalable environments.
          </p>

          <div className="flex flex-col items-center gap-6 md:items-start">
            <Link href="/">
              <Button onClick={handleClick} className="gap-2">
                Get in touch with me
                <Mail className="h-4 w-4" />
              </Button>
            </Link>

            <div className="flex items-center gap-6">
              <Link
                href="https://www.linkedin.com/in/salmanhersi/"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="https://github.com/SalmanHersi"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://twitter.com/namlase"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Desktop Image */}
        <div className="hidden flex-shrink-0 md:block">
          <HoverCard>
            <HoverCardTrigger>
              <Image
                className="rounded-full"
                src="/imgs/headshot.jpg"
                width={300}
                height={300}
                alt="Salman Hersi"
              />
            </HoverCardTrigger>
            <HoverCardContent>
              Don't ask why my collar is crooked
            </HoverCardContent>
          </HoverCard>
        </div>
      </div>
    </section>
  );
};

export default Hero;
