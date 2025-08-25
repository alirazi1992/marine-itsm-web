"use client";
import Shell from "@/components/layout/Shell";
import { useEffect, useState } from "react";
import { api } from "@/lib/api";

type Ticket = {
  id: number;
  title: string;
  priority: string;
  status: string;
};

export default function TicketsPage() {
  const [rows, setRows] = useState<Ticket[]>([]);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    api<Ticket[]>("/api/tickets")
      .then(setRows)
      .catch((e) => setErr(String(e)));
  }, []);

  return (
    <Shell>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-semibold">Tickets</h1>
        <a
          href="/tickets/new"
          className="px-3 py-2 rounded-xl bg-ocean-700 hover:bg-ocean-600 transition"
        >
          New Ticket
        </a>
      </div>

      {err && <div className="text-red-300 mb-3">{err}</div>}

      <div className="overflow-hidden rounded-2xl glass">
        <table className="w-full text-sm">
          <thead className="bg-white/5">
            <tr>
              <th className="text-left p-3">ID</th>
              <th className="text-left p-3">Title</th>
              <th className="text-left p-3">Priority</th>
              <th className="text-left p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((t) => (
              <tr
                key={t.id}
                className="border-t border-white/10 hover:bg-white/5"
              >
                <td className="p-3 font-mono">{t.id}</td>
                <td className="p-3">{t.title}</td>
                <td className="p-3">{t.priority}</td>
                <td className="p-3">{t.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Shell>
  );
}
