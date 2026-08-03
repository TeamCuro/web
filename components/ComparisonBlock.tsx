import { CheckCircleIcon, XCircleIcon } from "./icons";

interface ComparisonBlockProps {
  title: string;
  subtitle: string;
  competitorName: string;
  competitorPoints: string[];
  curoPoints: string[];
}

export default function ComparisonBlock({
  title,
  subtitle,
  competitorName,
  competitorPoints,
  curoPoints,
}: ComparisonBlockProps) {
  return (
    <div className="rounded-2xl border border-secondary-200 bg-white shadow-sm overflow-hidden">
      <div className="p-8 sm:p-10 bg-secondary-50 border-b border-secondary-200">
        <h3 className="font-heading text-secondary-900" style={{ fontSize: "1.75rem", lineHeight: 1.15 }}>
          {title}
        </h3>
        <p className="mt-2 text-body-md text-secondary-400">{subtitle}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="p-8 sm:p-10 border-b md:border-b-0 md:border-r border-secondary-200">
          <p className="text-body-sm font-bold text-secondary-400 mb-5 uppercase tracking-wide">{competitorName}</p>
          <ul className="space-y-4">
            {competitorPoints.map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <XCircleIcon className="h-5 w-5 text-error-500 shrink-0 mt-0.5" />
                <span className="text-body-md text-secondary-500">{point}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-8 sm:p-10 bg-primary-50">
          <p className="text-body-sm font-bold text-primary-700 mb-5 uppercase tracking-wide flex items-center gap-2">
            <CheckCircleIcon className="h-5 w-5" /> Curo
          </p>
          <ul className="space-y-4">
            {curoPoints.map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircleIcon className="h-5 w-5 text-success-500 shrink-0 mt-0.5" />
                <span className="text-body-md text-secondary-700 font-medium">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
