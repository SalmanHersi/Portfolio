import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AWS IAM Drift Detector - Salman Hersi',
  description:
    'Serverless automation that detects risky IAM changes and triggers response workflows.',
};

const stack = ['AWS', 'IAM', 'Lambda', 'EventBridge', 'CloudTrail', 'n8n'];

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
              What happens when you let engineers ship fast but still want to sleep at night.
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
            <p>
              So here&apos;s the thing. Every org I&apos;ve worked with has the same problem: devs need
              to move fast, security wants to review everything, and nobody has time for the
              back-and-forth. IAM changes especially. Someone adds a policy, it ships, and three
              weeks later you find out it grants admin to half the account.
            </p>

            <p>
              I got tired of finding these things manually. Scrolling through CloudTrail logs at
              2am because something felt off. There had to be a better way.
            </p>

            <p>
              The idea was simple: catch IAM changes the moment they happen, figure out if
              they&apos;re risky, and do something about it before anyone has to ask. No dashboards
              to check. No weekly reviews. Just automated guardrails that actually work.
            </p>

            <p>
              I wired up EventBridge to listen for IAM events from CloudTrail. Every time someone
              touches a policy, role, or user, it fires. A Lambda picks it up and starts asking
              questions. Who made this change? What did they actually modify? Does this grant
              wildcard permissions? Can this role assume into other accounts? Is this touching
              sensitive services like KMS or Secrets Manager?
            </p>

            <p>
              The scoring part took the longest to get right. First version flagged everything.
              Useless. Teams ignored it after day two. So I started tuning. Wildcards on
              s3:GetObject? Probably fine. Wildcards on iam:*? That&apos;s a problem. Context
              matters. A change from a CI pipeline service role hits different than a change from
              some random IAM user at 3am.
            </p>

            <p>
              Once I had signal I could trust, I piped it into n8n for the response workflows.
              High severity stuff creates a ticket, posts to Slack with the full context, and
              optionally triggers a rollback. Medium severity gets logged and queued for review.
              Low severity just gets tracked so we can spot patterns later.
            </p>

            <p>
              The rollback piece was tricky. You can&apos;t just revert IAM changes blindly.
              Sometimes the &quot;risky&quot; change is intentional and the team knows what
              they&apos;re doing. So I added approval gates. Flag it, pause it, let a human
              confirm before anything gets reverted. Automation with a kill switch.
            </p>

            <p>
              What actually made this useful was the summaries. Nobody wants to read raw JSON
              diffs. So every alert includes: who made the change, what account and region, what
              the policy looked like before and after, and why the system thinks it&apos;s risky.
              One glance and you know if you need to care.
            </p>

            <p>
              Ran this for a few months now. Caught a handful of real issues that would&apos;ve
              slipped through manual review. More importantly, it let teams ship faster because
              they knew the guardrails were there. They didn&apos;t have to wait for security to
              approve every change. They just shipped, and if something was off, the system
              caught it.
            </p>

            <p>
              Still tweaking the rules. Still dealing with edge cases. But the core loop works.
              Change happens, system evaluates, response fires if needed. Simple when you say it
              like that. Getting there was the hard part.
            </p>
          </section>
        </article>
      </div>
    </main>
  );
}
