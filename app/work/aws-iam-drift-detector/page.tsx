import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AWS IAM Drift Detector - Salman Hersi',
  description:
    'An event-driven AWS workflow that scores IAM changes, explains the risk, and routes response through n8n.',
};

const stack = [
  'AWS',
  'IAM',
  'Lambda',
  'EventBridge',
  'CloudTrail',
  'n8n',
  'Security Automation',
];

export default function AwsIamDriftDetectorPage() {
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
              AWS IAM Drift Detector
            </h1>
            <p className="text-base text-muted-foreground">
              An event-driven workflow that catches risky IAM changes, explains what changed, and
              routes the response through n8n with human approval where it matters.
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

          <section className="space-y-6 text-base leading-relaxed text-muted-foreground">
            <h2 className="text-xl font-semibold text-foreground">
              The problem I wanted to solve
            </h2>
            <p>
              IAM drift usually starts with a reasonable request. Someone needs access, a policy
              changes, and the work moves forward. The exception can stay long after the original
              need is gone, leaving the account with more access than anyone intended.
            </p>

            <p>
              Manual CloudTrail review made that gap easy to miss. I built the IAM Drift Detector
              to catch changes as they happen, evaluate the risk, and give the reviewer enough
              context to decide what should happen next.
            </p>

            <p>
              The goal is a shorter path from an IAM change to a useful security decision.
              Engineers can keep moving while high-risk changes get attention quickly.
            </p>

            <h2 className="text-xl font-semibold text-foreground">How the event flow works</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>CloudTrail records activity affecting IAM users, roles, and policies.</li>
              <li>EventBridge matches the relevant events and sends them to Lambda.</li>
              <li>
                Lambda extracts the actor, account, region, affected resource, and policy change.
              </li>
              <li>The function checks the change for risk signals and assigns a severity.</li>
              <li>n8n routes the result to the appropriate response workflow.</li>
            </ol>

            <p>
              This design keeps each part focused. EventBridge handles event routing, Lambda
              handles normalization and scoring, and n8n handles notifications and response. That
              separation makes it easier to test the scoring logic without triggering every
              downstream action.
            </p>

            <h2 className="text-xl font-semibold text-foreground">
              How the risk scoring works
            </h2>
            <p>
              My first version treated too many changes as high risk. It found activity, but it
              did not give a reviewer enough help deciding which events deserved attention.
            </p>

            <p>
              I tuned the scoring around context. A wildcard attached to a narrow read action is
              different from <code>iam:*</code>. A change made by an expected CI service role is
              different from the same change made by an IAM user at an unusual time. Cross-account
              trust and access to services such as KMS or Secrets Manager also deserve more
              scrutiny.
            </p>

            <p>The detector evaluates details such as:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The identity that made the change</li>
              <li>The affected account, region, user, role, or policy</li>
              <li>The policy before and after the change</li>
              <li>Wildcard actions or resources</li>
              <li>Cross-account role assumptions and trust changes</li>
              <li>Access to IAM, KMS, Secrets Manager, and other sensitive services</li>
            </ul>

            <p>
              The result is a severity based on the change and the context around it. High-severity
              events create a ticket, post the details to Slack, and can start a rollback workflow.
              Medium-severity events enter a review queue. Low-severity events stay recorded so I
              can look for patterns and continue tuning the rules.
            </p>

            <h2 className="text-xl font-semibold text-foreground">
              Human approval before rollback
            </h2>
            <p>
              Blindly reverting an IAM change can break a legitimate workload. A risky-looking
              policy might be temporary, expected, and tied to active work. I added an approval
              gate before rollback so the workflow can flag the change, pause, and wait for a
              person to confirm the action.
            </p>

            <p>
              That guardrail keeps the response fast without giving the automation permission to
              make every final decision. The system collects the evidence and prepares the action.
              A person controls the destructive step.
            </p>

            <h2 className="text-xl font-semibold text-foreground">
              Making the alert useful
            </h2>
            <p>
              Raw CloudTrail JSON slows down the first few minutes of an investigation. Each alert
              includes the identity that made the change, the account and region, the affected
              resource, the policy before and after, the assigned severity, and the reasons behind
              the score.
            </p>

            <p>
              That summary gives the reviewer a starting point without requiring them to search
              through the original event first. The raw event is still available when they need
              the full record.
            </p>

            <h2 className="text-xl font-semibold text-foreground">
              What this project demonstrates
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Monitoring AWS control-plane activity with CloudTrail</li>
              <li>Routing security events with EventBridge</li>
              <li>Parsing and scoring IAM changes in Lambda</li>
              <li>Reviewing policy scope, wildcard access, and cross-account trust</li>
              <li>Separating detection logic from response orchestration</li>
              <li>Building severity-based workflows in n8n</li>
              <li>Adding human approval before a rollback</li>
              <li>Turning raw cloud events into investigation-ready alerts</li>
            </ul>

            <h2 className="text-xl font-semibold text-foreground">What I learned</h2>
            <p>
              I ran the detector for several months and used it to surface a handful of issues that
              manual review could have missed. The scoring needed the most iteration. Detection
              without context produced noise, and automation without an approval boundary created
              unnecessary risk.
            </p>

            <p>
              I am still tuning edge cases, but the working path is clear. An IAM change creates an
              event, Lambda evaluates it, n8n routes the response, and the workflow pauses for human
              approval before a rollback when the decision could affect a live workload.
            </p>
          </section>
        </article>
      </div>
    </main>
  );
}
