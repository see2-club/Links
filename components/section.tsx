import AnimatedShinyText from "@/components/magicui/animated-shiny-text";

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
}

export default function Section({
  id,
  title,
  subtitle,
  description,
  children,
  className,
}: SectionProps) {
  const sectionId = title ? title.toLowerCase().replace(/\s+/g, "-") : id;
  return (
    <section id={id || sectionId}>
      <div className={className}>
        <div className="relative container mx-auto px-4 py-16 max-w-7xl">
          <div className="text-center space-y-4 pb-6 mx-auto">
            {title && (
              <h2 className="text-sm text-primary font-mono font-medium tracking-wider uppercase">
                {title}
              </h2>
            )}
            {subtitle && (
              <AnimatedShinyText shimmerWidth={300}  className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400 mx-auto mt-4 max-w-xs text-3xl font-semibold sm:max-w-none sm:text-4xl md:text-5xl">
                <span> {subtitle}</span>
              </AnimatedShinyText>
            )}
            {description && (
              <p className="mt-6 text-lg leading-8 text-slate-600 max-w-2xl mx-auto">
                {description}
              </p>
            )}
          </div>
          {children}
        </div>
      </div>
    </section>
  );
}
