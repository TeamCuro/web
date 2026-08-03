interface ProductVisualPlaceholderProps {
  caption: string;
  className?: string;
}

/**
 * Stand-in for a not-yet-produced product screenshot/illustration.
 * Renders the caption as visible, accessible text rather than relying on
 * an image alt attribute, since there is no image to attach it to yet.
 */
export default function ProductVisualPlaceholder({ caption, className = "" }: ProductVisualPlaceholderProps) {
  return (
    <div
      className={`flex aspect-[4/3] items-center justify-center rounded-2xl border-2 border-dashed border-secondary-200 bg-secondary-50 p-8 text-center ${className}`}
    >
      <p className="text-body-sm text-secondary-300">
        <span className="font-bold text-secondary-400">Product visual:</span> {caption}
      </p>
    </div>
  );
}
