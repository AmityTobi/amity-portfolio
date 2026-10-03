import { technologies } from "@/data/portfolio";

export function About() {
  return (
    <section
      id="about"
      className="mx-auto grid w-[calc(100%-2rem)] max-w-6xl scroll-mt-14 gap-6 py-12 sm:w-[calc(100%-3rem)] sm:scroll-mt-16 sm:gap-8 sm:py-16 md:grid-cols-[0.8fr_1.2fr] md:gap-12 lg:gap-16 lg:py-20"
    >
      <div>
        <h2 className="max-w-sm text-2xl font-semibold leading-tight tracking-[-0.03em] text-slate-950 sm:text-3xl">
          Developer mindset,
          <br className="hidden sm:block" /> user-first perspective.
        </h2>
      </div>

      <div>
        <div className="max-w-2xl space-y-3 text-[15px] leading-7 text-slate-600 sm:space-y-4 sm:text-base">
          <p>
            I&apos;m a frontend developer focused on building clean, responsive,
            and accessible interfaces that are straightforward to use.
          </p>

          <p>
            Before moving into development, I spent years working directly with
            users and product communities. That experience still shapes how I
            think about the people using the products I build.
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-2 sm:mt-7">
          {technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-md border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-medium text-slate-600 sm:px-3"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
