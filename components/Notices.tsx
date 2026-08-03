import React, { useEffect, useState } from 'react';

type Notice = { message: string; link?: string };

const SHEET_ID = '1XhNBr6nAO5acFOPYYj-SrMEywY9EyUJC7JX30_l6kGw';
const GVIZ_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json`;

function parseExpiry(raw: unknown): Date | null {
  if (raw === null || raw === undefined || raw === '') return null;
  const s = String(raw);
  let m = s.match(/^Date\((\d+),(\d+),(\d+)/);
  if (m) return new Date(Number(m[1]), Number(m[2]), Number(m[3]));
  m = s.match(/(\d{4})-(\d{1,2})-(\d{1,2})/);
  if (m) return new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]));
  const d = new Date(s);
  return isNaN(d.getTime()) ? null : d;
}

function ukTodayStart(): Date {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Europe/London', year: 'numeric', month: '2-digit', day: '2-digit',
  }).format(new Date());
  const [y, mo, d] = parts.split('-').map(Number);
  return new Date(y, mo - 1, d);
}

const Notices: React.FC = () => {
  const [notices, setNotices] = useState<Notice[]>([]);

  useEffect(() => {
    let cancelled = false;
    fetch(GVIZ_URL)
      .then((r) => r.text())
      .then((text) => {
        const json = JSON.parse(text.substring(text.indexOf('{'), text.lastIndexOf('}') + 1));
        const rows: any[] = (json.table && json.table.rows) || [];
        const today = ukTodayStart().getTime();
        const active: Notice[] = [];
        for (const row of rows) {
          const c = row.c || [];
          const message = c[0] && c[0].v != null ? String(c[0].v).trim() : '';
          const expiryRaw = c[1] ? (c[1].v != null ? c[1].v : c[1].f) : null;
          const link = c[2] && c[2].v ? String(c[2].v).trim() : '';
          if (!message) continue;
          const expiry = parseExpiry(expiryRaw);
          if (expiry && expiry.getTime() >= today) {
            active.push({ message, link: link || undefined });
          }
        }
        if (!cancelled) setNotices(active);
      })
      .catch(() => { /* if the sheet can't be read, show nothing */ });
    return () => { cancelled = true; };
  }, []);

  if (notices.length === 0) return null;

  return (
    <div className="mb-12">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-6 font-heading tracking-tight">Notice Board</h2>
      <div className="bg-amber-50 border-l-4 border-amber-500 rounded-2xl md:rounded-[1.5rem] p-6 sm:p-8 shadow-sm">
        <p className="text-[11px] font-black uppercase tracking-[0.25em] text-amber-600 mb-5">Please Note</p>
        <ul className="space-y-3">
          {notices.map((n, i) => (
            <li key={i} className="flex text-gray-800 text-base sm:text-lg font-medium leading-relaxed">
              <span className="text-amber-500 mr-3 shrink-0" aria-hidden="true">&bull;</span>
              <span>
                {n.message}
                {n.link ? (
                  <a href={n.link} target="_blank" rel="noopener noreferrer" className="ml-2 text-brand-600 font-bold underline hover:text-brand-500">More info</a>
                ) : null}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Notices;
