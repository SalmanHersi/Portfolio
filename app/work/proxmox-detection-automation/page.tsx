import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How I Turned a $300 Mini PC into a Detection Engineering Lab — Salman Hersi',
  description:
    'A used HP EliteDesk became a Proxmox lab for networking, security telemetry, detection testing, and automated response.',
};

const stack = [
  'Proxmox',
  'Linux',
  'Windows Server',
  'Networking',
  'SIEM',
  'n8n',
  'Detection Engineering',
  'Security Automation',
];

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
              How I Turned a $300 Mini PC into a Detection Engineering Lab
            </h1>
            <p className="text-base text-muted-foreground">
              A used HP EliteDesk became a Proxmox lab for running Windows and Linux systems,
              learning how networks behave, collecting security logs, testing detections, and
              automating response with n8n.
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
            <h2 className="text-xl font-semibold text-foreground">The hardware</h2>
            <p>
              I found an HP EliteDesk 800 G6 on Facebook Marketplace for about $300. It came with
              a 10th-generation Intel i5-10500, 40 GB of RAM, and a 1 TB NVMe drive.
            </p>

            <p>
              Those specs gave me enough room to run several virtual machines on one small
              system. I could build, break, reset, and retest things without touching a production
              environment.
            </p>

            <p>
              After picking it up, I installed Proxmox VE and created a mix of Windows Server 2022
              and Linux virtual machines. I use them to represent endpoints, services, and an
              attacker foothold.
            </p>

            <h2 className="text-xl font-semibold text-foreground">How the lab works</h2>
            <p>I designed the lab around a repeatable detection and response loop:</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Generate controlled activity from a VM representing an attacker foothold.</li>
              <li>Collect logs from the affected endpoints and services.</li>
              <li>Send the telemetry to a central location for analysis.</li>
              <li>Run detection rules against the activity.</li>
              <li>Pass the alert to n8n for enrichment and response actions.</li>
              <li>Adjust the telemetry, rule, or workflow and run the scenario again.</li>
            </ol>

            <p>
              Repeatability matters. If every test uses different activity, it becomes difficult
              to tell whether a detection improved or the test conditions changed. Running the
              same scenario gives me a baseline. I know what activity occurred, which logs should
              appear, what the rule should detect, and what response should follow.
            </p>

            <h2 className="text-xl font-semibold text-foreground">
              How the lab taught me networking
            </h2>
            <p>Networking became one of the most valuable parts of this project.</p>

            <p>
              Working with Proxmox made concepts such as virtual bridges, IP addressing, routing,
              ports, and network segmentation practical. Every VM needed a way to communicate
              with the systems around it while still staying inside a controlled lab.
            </p>

            <p>
              I had to understand which machines could reach one another, where traffic was
              supposed to go, and what needed to be allowed for logs and alerts to move through
              the environment.
            </p>

            <p>
              That became especially useful when something failed. A missing alert did not always
              mean the detection rule was wrong. The endpoint might not have reached the log
              collector, a required port might have been blocked, or the service receiving the
              data might not have been listening.
            </p>

            <p>
              Troubleshooting those problems taught me to follow the full network path instead of
              guessing. I could start at the source, check connectivity between systems, confirm
              that the traffic reached its destination, and then inspect the application or
              detection logic.
            </p>

            <p>
              The lab helped connect networking concepts directly to security work. Understanding
              normal communication between systems makes it easier to recognize unusual traffic,
              isolate problems, and design better controls.
            </p>

            <h2 className="text-xl font-semibold text-foreground">
              Where the detection work happens
            </h2>
            <p>
              Writing a detection rule is only one part of the job. The rule still depends on the
              logs reaching the SIEM with the right fields and enough context.
            </p>

            <p>
              If the source system does not record the activity, there is nothing to detect. If
              the logs arrive incomplete or inconsistently formatted, the rule may miss the event.
              If the rule is too broad, normal activity can generate unnecessary alerts.
            </p>

            <p>
              The lab lets me work through that entire chain. I can inspect the source telemetry,
              test the rule, review what fired, and adjust the logic before running the scenario
              again.
            </p>

            <p>
              That process changed how I think about detection engineering. I would rather have a
              small set of rules tied to known behavior and tested against repeatable scenarios
              than a large collection of rules I have never validated.
            </p>

            <h2 className="text-xl font-semibold text-foreground">
              Adding automation with n8n
            </h2>
            <p>Once a detection produces a useful alert, I can send it to n8n.</p>

            <p>
              The workflow can add context to the alert and trigger a response action. The
              important decision is how much authority to give the automation. An alert should
              carry enough information about the source, affected system, matched behavior, and
              severity before a workflow takes action.
            </p>

            <p>
              I treat guardrails as part of the workflow design. Low-confidence alerts should not
              trigger the same response as activity with stronger evidence. That keeps a noisy
              rule from becoming a noisy or disruptive automation.
            </p>

            <p>
              The lab gives me a safe place to change the workflow, replay the scenario, and see
              how the response behaves before trusting it with anything important.
            </p>

            <h2 className="text-xl font-semibold text-foreground">
              What this project demonstrates
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Installing and administering a Proxmox virtualization host</li>
              <li>Running and managing Windows Server and Linux systems</li>
              <li>Configuring virtual networking and connectivity between VMs</li>
              <li>Working with IP addressing, ports, routing, and segmentation</li>
              <li>Troubleshooting the path between endpoints, log collectors, and automations</li>
              <li>Centralizing and reviewing endpoint and service telemetry</li>
              <li>Translating known behavior into detection logic</li>
              <li>Testing rules against repeatable scenarios</li>
              <li>Using n8n to connect alerts with response actions</li>
              <li>Adding context and guardrails before automating a response</li>
            </ul>

            <p>
              It also forces me to troubleshoot across layers. A failed detection could come from
              the endpoint, the network path, the logging configuration, the collection pipeline,
              the rule, or the automation handling the alert. Finding the failure means following
              the event from its source to the final response.
            </p>

            <h2 className="text-xl font-semibold text-foreground">What I&apos;m adding next</h2>
            <p>
              The next step is to document each scenario with the activity performed, expected
              telemetry, network path, detection logic, and response result. I also want to map
              the scenarios to MITRE ATT&amp;CK and track measurements such as detection time,
              false positives, and response time.
            </p>

            <p>
              For about $300, I now have a lab where I can run the same activity, follow it across
              the network, watch the logs arrive, tune the detection, and test the response from
              end to end.
            </p>
          </section>
        </article>
      </div>
    </main>
  );
}
