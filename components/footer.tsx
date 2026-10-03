export function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="mx-auto flex min-h-20 w-[calc(100%-2rem)] max-w-6xl flex-col justify-center gap-2 py-4 text-xs text-slate-600 min-[400px]:flex-row min-[400px]:items-center min-[400px]:justify-between min-[400px]:gap-4 min-[400px]:py-0 sm:w-[calc(100%-3rem)]">
        <p>© {new Date().getFullYear()} Amity Ekoyi</p>

        <a href="#top" className="w-fit transition-colors hover:text-slate-950">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
