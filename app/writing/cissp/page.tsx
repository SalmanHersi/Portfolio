import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "How I'm Actually Studying for the CISSP — Salman Hersi",
  description:
    "How I'm studying for the CISSP without reading a single page, using AI tools like NotebookLM and Claude.",
};

export default function CISSPArticle() {
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

        <article>
          <header className="mb-12">
            <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl leading-tight">
              How I&apos;m Actually Studying for the CISSP (Without Reading a Single Page)
            </h1>
            <p className="mt-4 text-sm text-muted-foreground" style={{ fontFamily: 'var(--font-mono)' }}>
              January 27, 2026
            </p>
          </header>

          <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
            <p>
              I&apos;m going to be honest with you. I bought the Destination Certification PDF, and I haven&apos;t read a single line of it. Not one. But I&apos;ve probably absorbed more from it than if I had just sat down and read it cover to cover.
            </p>
            <p>Here&apos;s what I actually did.</p>

            <h2 className="text-xl font-semibold text-foreground pt-4">Step One: Break It Down</h2>
            <p>
              The first thing I did was take that PDF and split it up. I used a tool called PDFSam Basic, which lets you quickly chop up PDFs however you want. I divided the whole thing by domain. Eight domains, eight separate files.
            </p>
            <p>
              Then I created a NotebookLM notebook for each domain. One notebook, one domain. Clean and organized.
            </p>

            <h2 className="text-xl font-semibold text-foreground pt-4">Step Two: Let the AI Teach Me</h2>
            <p>
              Instead of reading through walls of text, I prompted NotebookLM to help me actually understand what was in there. I had it create mind maps so I could visually see how concepts connected. I had it generate audio overviews so I could listen instead of read. And then I just started chatting with it.
            </p>
            <p>
              I told it to be my Socratic teacher. It would ask me questions, I&apos;d answer, it would push back or clarify, and we&apos;d go back and forth. If something was really confusing and needed to get broken down further, I&apos;d open up a Claude or ChatGPT window and dig deeper there.
            </p>
            <p>
              That&apos;s how I learned the domains. Not by reading. By having conversations.
            </p>

            <h2 className="text-xl font-semibold text-foreground pt-4">Step Three: Watch the Videos</h2>
            <p>
              Once I had that foundation, I went on YouTube and watched the Destination Certification domain videos. They&apos;re all free right now, which is incredible. Those videos gave me a nice wrap up of everything and helped me visualize what all those concepts actually looked like in practice.
            </p>
            <p>
              But I didn&apos;t stop there. I pulled the transcripts from those YouTube videos, fed them into Claude, and prompted it to give me scenario based questions. Specifically, I asked it to create scenarios about a random medical company and how they would apply the tactics and learnings from each domain. That gave me a really practical overview of what to actually look out for in real situations.
            </p>

            <h2 className="text-xl font-semibold text-foreground pt-4">Step Four: Practice and Learn from Mistakes</h2>
            <p>
              For actual exam prep, I used Quantum Exams. Went through their practice tests, which were solid practice. But here&apos;s where it gets interesting.
            </p>
            <p>
              Once I finished a practice exam, I would take all that feedback and save it as a PDF. Then I&apos;d plug that PDF right back into NotebookLM and create another audio overview. But this time, I prompted it specifically: &ldquo;This is a test I took. Help me understand what I got wrong, why my answers were wrong, and why the correct answer was the best choice.&rdquo;
            </p>
            <p>
              Now while I&apos;m driving or commuting, I&apos;m listening to personalized breakdowns of my own mistakes. That&apos;s it. That&apos;s the secret. I&apos;m not listening to generic study material. I&apos;m listening to feedback on where I specifically went wrong.
            </p>

            <h2 className="text-xl font-semibold text-foreground pt-4">The Result</h2>
            <p>
              This approach has given me a crazy increase in understanding. I&apos;m not grinding through textbooks. I&apos;m having conversations, watching videos, practicing, and then learning from my mistakes in a format that fits into my actual life.
            </p>
            <p>
              If you&apos;re studying for the CISSP and you&apos;re dreading the idea of reading thousands of pages, maybe try this instead. Let the AI do the heavy lifting. You just show up and engage.
            </p>
          </div>
        </article>
      </div>
    </main>
  );
}
