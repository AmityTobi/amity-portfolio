import { links } from "@/data/portfolio";
import { ArrowUpRight, GithubIcon, LinkedinIcon } from "./icons";

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-14 border-t border-slate-200 bg-slate-50/70 sm:scroll-mt-16"
    >
      <div className="mx-auto grid w-[calc(100%-2rem)] max-w-6xl gap-8 py-12 sm:w-[calc(100%-3rem)] sm:py-16 md:grid-cols-[1fr_auto] md:items-end lg:py-20">
        <div>
          <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-3xl">
            Have something worth building?
          </h2>

          <p className="mt-3 max-w-xl text-[15px] leading-6 text-slate-600 sm:text-base">
            I&apos;m open to frontend opportunities, interesting projects, and
            conversations with people building useful products.
          </p>

          <a
            href={links.email}
            className="group mt-6 inline-flex min-h-11 items-center gap-1.5 rounded-lg bg-slate-950 px-5 text-sm font-medium text-white transition-colors hover:bg-slate-800"
          >
            Let&apos;s talk
            <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={links.github}
            target="_blank"
            rel="noreferrer"
            aria-label="Visit my GitHub profile"
            className="grid size-11 place-items-center rounded-lg border border-slate-200 bg-white text-slate-600 transition-colors hover:border-slate-300 hover:text-slate-950"
          >
            <GithubIcon />
          </a>

          <a
            href={links.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="Visit my LinkedIn profile"
            className="grid size-11 place-items-center rounded-lg border border-slate-200 bg-white text-slate-600 transition-colors hover:border-slate-300 hover:text-slate-950"
          >
            <LinkedinIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
