interface SectionHeaderProps {
  title: string;
  eyebrow?: string;
  as?: "h1" | "h2";
  size?: "hero" | "section";
  className?: string;
  lineClassName?: string;
  eyebrowClassName?: string;
  headingClassName?: string;
}

const sizeClasses: Record<NonNullable<SectionHeaderProps["size"]>, string> = {
  hero: "text-2xl sm:text-3xl md:text-5xl lg:text-6xl",
  section: "text-2xl md:text-3xl lg:text-4xl",
};

export default function SectionHeader({
  title,
  eyebrow,
  as = "h1",
  size = "hero",
  className = "",
  lineClassName = "",
  eyebrowClassName = "",
  headingClassName = "",
}: SectionHeaderProps) {
  const Tag = as;
  const headingClasses = `${sizeClasses[size]} font-light text-gray-900 ${headingClassName}`;
  const line = (
    <div className={`w-16 border-t-2 border-dashed border-gray-400 shrink-0 ${lineClassName}`} />
  );

  if (eyebrow) {
    return (
      <div className={className}>
        <div className="flex items-center gap-6 mb-6">
          {line}
          <span className={`text-sm text-gray-500 uppercase tracking-wider ${eyebrowClassName}`}>
            {eyebrow}
          </span>
        </div>
        <Tag className={headingClasses}>{title}</Tag>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-6 ${className}`}>
      {line}
      <Tag className={headingClasses}>{title}</Tag>
    </div>
  );
}
