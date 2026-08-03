import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRightIcon } from "./icons";

interface Segment {
  icon: ReactNode;
  badge?: string;
  title: string;
  description: string;
  linkLabel: string;
  href: string;
}

interface SegmentPickerProps {
  heading: string;
  description: string;
  segments: Segment[];
}

export default function SegmentPicker({ heading, description, segments: items }: SegmentPickerProps) {
  return (
    <section className="py-24 sm:py-32 bg-secondary-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="font-heading text-secondary-900">{heading}</h2>
          <p className="mt-6 text-body-lg text-secondary-400">{description}</p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {items.map((segment, i) => (
            <div
              key={i}
              className="relative flex flex-col rounded-2xl border border-secondary-200 bg-white p-8 shadow-sm hover:shadow-lg hover:border-primary-300 transition-all duration-300"
            >
              {segment.badge && (
                <span className="absolute top-6 right-6 rounded-full bg-accent-100 px-3 py-1 text-body-sm font-bold text-accent-700 uppercase tracking-wide">
                  {segment.badge}
                </span>
              )}
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-600 mb-4">
                {segment.icon}
              </div>
              <h3 className="font-heading text-secondary-900 mb-3" style={{ fontSize: "1.375rem", lineHeight: 1.2 }}>
                {segment.title}
              </h3>
              <p className="text-body-md text-secondary-400 mb-6 grow">{segment.description}</p>
              <Link
                href={segment.href}
                className="inline-flex items-center gap-1.5 text-body font-bold text-primary-600 hover:text-primary-700 transition-colors min-h-11"
              >
                {segment.linkLabel}
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
