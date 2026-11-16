"use client";

import { flushSync } from "react-dom";
import { useState, type FormEvent, type MouseEvent, type ReactNode } from "react";

export function emailOk(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function phoneOk(value: string) {
  return value.replace(/[^0-9]/g, "").length >= 10;
}

export type FormErrors = Record<string, string>;

/** Single id builder for a field's control; labels, summary links and the hook all use it. */
export function fieldId(uid: string, name: string) {
  return `${uid}-${name}`;
}

const ICON_PROPS = { viewBox: "0 0 24 24", "aria-hidden": true, focusable: "false" } as const;

function AlertIcon() {
  return (
    <svg {...ICON_PROPS}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 8v5M12 16h.01" />
    </svg>
  );
}

export function Req() {
  return <span className="req">Required</span>;
}

export function Opt() {
  return <span className="opt">Optional</span>;
}

export function FormNote() {
  return (
    <p className="f-note">
      Fields marked <Req /> must be filled in.
    </p>
  );
}

export function FieldError({ id, children }: { id: string; children?: ReactNode }) {
  if (!children) return null;
  return (
    <p className="f-err" id={id}>
      <AlertIcon />
      <span>{children}</span>
    </p>
  );
}

/**
 * Per-form error state. `validate` returns name -> message for every invalid field.
 * `order` is the visual field order (used for focus and summary order).
 */
export function useFormErrors(
  uid: string,
  order: readonly string[],
  validate: (data: FormData) => FormErrors,
) {
  const [errors, setErrors] = useState<FormErrors>({});
  const [snapshot, setSnapshot] = useState<FormErrors>({});
  const [attempt, setAttempt] = useState(0);

  const id = (name: string) => fieldId(uid, name);
  const helpId = (name: string) => `${uid}-${name}-help`;
  const errId = (name: string) => `${uid}-${name}-err`;

  /** Validate on submit. Focuses the first invalid field. Returns true when valid. */
  function check(form: HTMLFormElement): boolean {
    const next = validate(new FormData(form));
    // Commit before focusing so the field is already aria-invalid/described when focus lands.
    flushSync(() => {
      setErrors(next);
      setSnapshot(next);
      setAttempt((n) => n + 1);
    });
    const first = order.find((name) => next[name]);
    if (first) {
      const el = form.elements.namedItem(first);
      if (el instanceof HTMLElement) el.focus();
    }
    return Object.keys(next).length === 0;
  }

  /** Form-level change handler: only removes errors for fields that are now valid. */
  function onChange(event: FormEvent<HTMLFormElement>) {
    if (!Object.keys(errors).length) return;
    const now = validate(new FormData(event.currentTarget));
    const kept: FormErrors = {};
    let changed = false;
    for (const name of Object.keys(errors)) {
      if (now[name]) {
        kept[name] = now[name];
        if (now[name] !== errors[name]) changed = true;
      } else changed = true;
    }
    if (changed) setErrors(kept);
  }

  function fieldProps(name: string, opts: { help?: boolean; optional?: boolean } = {}) {
    const invalid = Boolean(errors[name]);
    const describedBy = [opts.help ? helpId(name) : "", invalid ? errId(name) : ""].filter(Boolean).join(" ");
    return {
      id: id(name),
      name,
      required: opts.optional ? undefined : (true as const),
      "aria-required": opts.optional ? undefined : (true as const),
      "aria-invalid": invalid ? (true as const) : undefined,
      "aria-describedby": describedBy || undefined,
    };
  }

  // Summary keeps submit-time text (quiet live region) but only lists fields still invalid.
  const summary: FormErrors = {};
  for (const name of Object.keys(errors)) summary[name] = snapshot[name] ?? errors[name];

  return { errors, summary, attempt, check, onChange, fieldProps, id, helpId, errId };
}

/** Always-rendered polite live region; summary content is keyed per submit so repeats re-announce. */
export function ErrorSummary({
  errors,
  order,
  attempt,
  uid,
}: {
  errors: FormErrors;
  order: readonly string[];
  attempt: number;
  uid: string;
}) {
  const names = order.filter((name) => errors[name]);

  function focusField(event: MouseEvent<HTMLAnchorElement>, name: string) {
    event.preventDefault();
    document.getElementById(fieldId(uid, name))?.focus();
  }

  return (
    <div aria-live="polite">
      {names.length > 0 && (
        <div className="f-summary" key={attempt}>
          <p className="f-summary-h">
            <AlertIcon />
            {names.length === 1 ? "1 thing needs fixing" : `${names.length} things need fixing`}
          </p>
          <ul>
            {names.map((name) => (
              <li key={name}>
                <a href={`#${fieldId(uid, name)}`} onClick={(e) => focusField(e, name)}>
                  {errors[name]}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
