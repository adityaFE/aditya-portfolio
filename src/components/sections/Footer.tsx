export default function Footer() {

  return (
    <footer className="w-full border-t border-white/10 pt-16 pb-12" aria-label="Site Footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-muted-foreground">
          <div>
            © <span className="tabular-nums">{new Date().getFullYear()}</span> Aditya Anand. Crafted with React, TypeScript & Tailwind CSS.
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
            <span>All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
