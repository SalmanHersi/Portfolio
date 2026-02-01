import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How I Spent $300 on a Mini PC to Learn Cybersecurity — Salman Hersi',
  description:
    'A $300 mini PC became a Proxmox lab for simulating attacks, centralizing logs, and automating response.',
};

const stack = ['Proxmox', 'Linux', 'SIEM', 'n8n', 'Detection', 'Automation'];

export default function ProxmoxDetectionAutomationPage() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-3xl px-6 md:px-8 py-16 md:py-24">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Link>

        <article className="space-y-10">
          <header className="space-y-3">
            <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl leading-tight">
              How I Spent $300 on a Mini PC to Learn Cybersecurity
            </h1>
            <p className="text-base text-muted-foreground">
              What started as a Facebook Marketplace deal turned into a Proxmox box for hands-on
              detection engineering, automation, and incident response practice.
            </p>
            <div className="flex flex-wrap gap-2">
              {stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border px-2.5 py-1 text-xs font-medium text-muted-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </header>

          <section className="space-y-6">
            <figure className="overflow-hidden rounded-2xl border border-border bg-card/70">
              <Image
                src="https://utfs.io/f/5mHFO6Bp0KeYJSUpdBCjzsDC2rbEQLXFRg68av4fhpOek3Nc"
                alt="Facebook listing for the mini PC"
                width={1600}
                height={742}
                sizes="(min-width: 768px) 768px, 100vw"
                className="h-auto w-full object-cover"
                priority
                quality={85}
              />
              <figcaption className="border-t border-border px-4 py-3 text-xs text-muted-foreground">
                The $300 Marketplace listing that kicked off the lab build.
              </figcaption>
            </figure>
            <figure className="overflow-hidden rounded-2xl border border-border bg-card/70">
              <Image
                src="https://utfs.io/f/5mHFO6Bp0KeY6pytRdfAOvqsom63IADukJZrM2QEahF95cTN"
                alt="Mini PC used for the Proxmox lab"
                width={1600}
                height={1200}
                sizes="(min-width: 768px) 768px, 100vw"
                className="h-auto w-full object-cover"
                quality={85}
              />
              <figcaption className="border-t border-border px-4 py-3 text-xs text-muted-foreground">
                The mini PC after pickup, ready for Proxmox.
              </figcaption>
            </figure>
            <figure className="overflow-hidden rounded-2xl border border-border bg-card/70">
              <Image
                src="https://utfs.io/f/5mHFO6Bp0KeYw19udyjUWQq7fuv0EzHGcapdySl5NJ932rDB"
                alt="Proxmox UI with console access for the lab VM"
                width={1600}
                height={670}
                sizes="(min-width: 768px) 768px, 100vw"
                className="h-auto w-full object-cover"
                quality={85}
              />
              <figcaption className="border-t border-border px-4 py-3 text-xs text-muted-foreground">
                Proxmox console view with VMs running the lab.
              </figcaption>
            </figure>
          </section>

          <section className="space-y-6 text-base leading-relaxed text-muted-foreground">
            <p>
              I bought a used mini PC for about $300, loaded it with Proxmox, and started building
              a lab that mirrors real attack paths. The goal was simple: learn by doing and build
              a place to test detections without breaking anything in production.
            </p>

            <h2 className="text-xl font-semibold text-foreground">What I built</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Multiple VMs to simulate endpoints, services, and an attacker foothold.</li>
              <li>Central log collection with tuned rules for common cloud and endpoint tactics.</li>
              <li>n8n playbooks that enrich alerts and trigger response actions.</li>
              <li>Repeatable scenarios to validate detections and response workflows.</li>
            </ul>

            <h2 className="text-xl font-semibold text-foreground">What I learned</h2>
            <p>
              Real detections depend on clean telemetry and repeatable test scenarios. The lab let
              me iterate quickly and see what actually fires versus what just looks good on paper.
            </p>

            <h2 className="text-xl font-semibold text-foreground">Key takeaways</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Signal quality beats volume. A few high-fidelity rules go further than noise.</li>
              <li>Automation needs guardrails and context to avoid false positives.</li>
              <li>Even small hardware can run meaningful, realistic security labs.</li>
            </ul>
          </section>
        </article>
      </div>
    </main>
  );
}
