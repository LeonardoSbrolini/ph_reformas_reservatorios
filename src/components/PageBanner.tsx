import { ChevronRight } from "lucide-react";
import Link from "next/link";

type Breadcrumb = { label: string; href?: string };

type PageBannerProps = {
  label: string;
  title: string;
  titleHighlight?: string;
  description?: string;
  breadcrumbs?: Breadcrumb[];
};

export function PageBanner({
  label,
  title,
  titleHighlight,
  description,
  breadcrumbs,
}: PageBannerProps) {
  return (
    <div className="relative pt-20 bg-linear-to-br from-surface-darkest via-brand-navy to-surface-dark overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-light/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-brand-dark/15 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-px bg-linear-to-r from-transparent via-brand-light/10 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        {breadcrumbs && (
          <nav className="flex items-center gap-1.5 text-xs text-white/40 mb-6">
            <Link href="/" className="hover:text-white/70 transition-colors">
              Início
            </Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <ChevronRight className="h-3 w-3" />
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="hover:text-white/70 transition-colors"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white/70">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        <div className="inline-flex items-center gap-2 bg-white/8 border border-white/12 rounded px-4 py-1.5 mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-light shrink-0" />
          <span className="text-white/70 text-xs font-semibold uppercase tracking-widest">
            {label}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
          {title}
          {titleHighlight && (
            <>
              {" "}
              <span className="text-brand-light">{titleHighlight}</span>
            </>
          )}
        </h1>

        {description && (
          <p className="text-white/55 text-base sm:text-lg max-w-2xl leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
