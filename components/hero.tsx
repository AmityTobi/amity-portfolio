import { ArrowUpRight } from "./icons";

export function Hero() {
  return (
    <section
      id="top"
      className="mx-auto w-[calc(100%-2rem)] max-w-6xl py-10 sm:w-[calc(100%-3rem)] sm:py-14 lg:py-20"
    >
      <div className="max-w-3xl">
        <p className="mb-3 text-sm font-medium text-blue-600 sm:mb-4">
          Frontend Developer
        </p>

        <h1 className="max-w-2xl text-4xl font-semibold leading-[1.1] tracking-[-0.04em] text-slate-950 sm:text-5xl sm:leading-[1.12]">
          I build thoughtful web experiences that are simple and easy to use.
        </h1>

        <p className="mt-4 max-w-2xl text-[15px] leading-6 text-slate-600 sm:mt-5 sm:text-lg sm:leading-7">
          I&apos;m a frontend developer working with React, Next.js and
          TypeScript to build responsive, accessible, and user-friendly
          products.
        </p>

        <div className="mt-6 flex items-center gap-5 sm:mt-7">
          <a
            href="#work"
            className="hidden rounded-lg bg-slate-950 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-slate-800 sm:inline-flex"
          >
            View my work
          </a>

          <a
            href="mailto:amityekoyi@gmail.com"
            className="group inline-flex min-h-11 items-center gap-1 text-sm font-medium text-slate-600 transition-colors hover:text-slate-950"
          >
            Contact me
            <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
