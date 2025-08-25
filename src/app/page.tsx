"use client";
import Shell from "@/components/layout/Shell";
import { useEffect, useState } from "react";
import { api } from "@/lib/api";

type Health = { status: string; timeUtc: string };

export default function Dashboard() {
  const [health, setHealth] = useState<Health | null>(null);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    api<Health>("/api/health")
      .then(setHealth)
      .catch((e) => setErr(String(e)));
  }, []);

  return (
    <Shell>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="glass p-5 rounded-2xl">
          <div className="text-sm opacity-75">Backend</div>
          <div className="text-xl font-semibold mt-1">Health</div>
          <div className="mt-2 font-mono text-sm">
            {health ? (
              <>
                <div>status: {health.status}</div>
                <div>timeUtc: {new Date(health.timeUtc).toISOString()}</div>
              </>
            ) : err ? (
              <div className="text-red-300">{err}</div>
            ) : (
              "Loading…"
            )}
          </div>
        </div>

        <div className="glass p-5 rounded-2xl">
          <div className="text-sm opacity-75">SLA</div>
          <div className="text-xl font-semibold mt-1">At Risk</div>
          <div className="mt-2 text-white/70">—</div>
        </div>

        <div className="glass p-5 rounded-2xl">
          <div className="text-sm opacity-75">Tickets</div>
          <div className="text-xl font-semibold mt-1">Open</div>
          <div className="mt-2 text-white/70">—</div>
        </div>
      </div>
    </Shell>
  );
}
