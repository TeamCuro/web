import type { ReactNode } from "react";

type Column = { key: string; label: string };
type Row = { key: string; title: ReactNode; sub?: ReactNode; badge?: string; cells: Record<string, ReactNode> };
type Group = { label?: string; rows: Row[] };

type Props = {
  caption: string;
  captionHidden?: boolean;
  rowHeader: string;
  columns: Column[];
  groups: Group[];
  cardHeading?: "h3" | "h4";
  flush?: boolean;
};

export default function ResponsiveTable({
  caption,
  captionHidden = false,
  rowHeader,
  columns,
  groups,
  cardHeading = "h3",
  flush = false,
}: Props) {
  const Heading = cardHeading;
  const span = columns.length + 1;

  return (
    <div className={flush ? "rt rt--flush" : "rt"}>
      <div className="rt-tw">
        <table className="rt-table">
          <caption className={captionHidden ? "rt-sr" : undefined}>{caption}</caption>
          <thead>
            <tr>
              <th scope="col">{rowHeader}</th>
              {columns.map((c) => (
                <th scope="col" key={c.key}>
                  {c.label}
                </th>
              ))}
            </tr>
          </thead>
          {groups.map((g, gi) => (
            <tbody key={g.label ?? `g${gi}`} className={g.label ? "rt-later" : undefined}>
              {g.label && (
                <tr className="rt-group">
                  <th colSpan={span} scope="rowgroup">
                    {g.label}
                  </th>
                </tr>
              )}
              {g.rows.map((r) => (
                <tr key={r.key}>
                  <th scope="row">
                    {r.title}
                    {r.badge && <span className="rt-badge">{r.badge}</span>}
                    {r.sub && <small>{r.sub}</small>}
                  </th>
                  {columns.map((c) => (
                    <td key={c.key}>{r.cells[c.key]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          ))}
        </table>
      </div>

      <div className="rt-cardwrap">
        {!captionHidden && (
          <p className="rt-cap" aria-hidden="true">
            {caption}
          </p>
        )}
        <ul className="rt-cards" aria-label={caption}>
          {groups.map((g, gi) => [
            g.label && (
              <li className="rt-group-label" key={`l${gi}`}>
                {g.label}
              </li>
            ),
            ...g.rows.map((r) => (
              <li className={g.label ? "rt-card rt-card--later" : "rt-card"} key={r.key}>
                <Heading>{r.title}</Heading>
                {r.badge && <p className="rt-badge">{r.badge}</p>}
                {r.sub && <p className="rt-sub">{r.sub}</p>}
                <dl>
                  {columns.map((c) => (
                    <div className="rt-pair" key={c.key}>
                      <dt>{c.label}</dt>
                      <dd>{r.cells[c.key]}</dd>
                    </div>
                  ))}
                </dl>
              </li>
            )),
          ])}
        </ul>
      </div>
    </div>
  );
}

export function Verdict({ value, children }: { value: "yes" | "no"; children?: ReactNode }) {
  const yes = value === "yes";
  return (
    <span className="rt-verdict">
      <span className={yes ? "rt-yes" : "rt-no"}>
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          {yes ? (
            <path d="M5 12l4.5 4.5L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          ) : (
            <>
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
              <path d="M8.5 8.5l7 7M15.5 8.5l-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </>
          )}
        </svg>
        <b>{yes ? "Yes" : "No"}</b>
      </span>
      {children ? <>. {children}</> : null}
    </span>
  );
}
