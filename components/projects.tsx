import { projects } from "@/data/portfolio";
import { ArrowUpRight } from "./icons";

export function Projects() {
  return (
    <section
      id="work"
      className="scroll-mt-14 border-y border-slate-200 bg-slate-50/70 py-12 sm:scroll-mt-16 sm:py-16"
    >
      <div className="mx-auto w-[calc(100%-2rem)] max-w-6xl sm:w-[calc(100%-3rem)]">
        <div className="mb-6 sm:mb-8">
          <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-3xl">
            Selected work
          </h2>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            A few products and interfaces I&apos;ve built.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group relative flex min-h-60 flex-col overflow-hidden rounded-xl border border-slate-200 bg-white p-5 transition-[border-color,background-color] duration-200 hover:border-slate-300 hover:bg-slate-50 sm:min-h-64 sm:p-6"
            >
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-blue-600 transition-transform duration-300 group-hover:scale-x-100"
              />

              <p className="text-xs font-medium text-slate-600">
                {project.type}
              </p>

              <h3 className="mt-2.5 text-lg font-semibold tracking-[-0.025em] text-slate-950 sm:mt-3 sm:text-xl">
                {project.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-x-3 gap-y-1.5">
                {project.stack.map((technology) => (
                  <span
                    key={technology}
                    className="text-xs font-medium text-slate-600"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex flex-wrap items-center gap-5 pt-6 sm:pt-7">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="group/link inline-flex min-h-10 items-center gap-1 text-sm font-medium text-slate-950 transition-colors hover:text-blue-700"
                >
                  Live
                  <ArrowUpRight className="size-4 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </a>

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="group/link inline-flex min-h-10 items-center gap-1 text-sm font-medium text-slate-600 transition-colors hover:text-slate-950"
                  >
                    GitHub
                    <ArrowUpRight className="size-4 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
