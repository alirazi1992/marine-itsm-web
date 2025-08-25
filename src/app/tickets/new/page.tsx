"use client";
import Shell from "@/components/layout/Shell";
import { useEffect, useState } from "react";
import { api } from "@/lib/api";

type Vessel = { id: number; name: string; imo: string };

export default function NewTicket() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("network");
  const [vesselId, setVesselId] = useState<number | "">("");
  const [assetId, setAssetId] = useState<number | "">("");
  const [priority, setPriority] = useState("Medium");
  const [vessels, setVessels] = useState<Vessel[]>([]);
  const [saving, setSaving] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    api<Vessel[]>("/api/vessels")
      .then(setVessels)
      .catch((e: unknown) => {
        setErr(e instanceof Error ? e.message : String(e));
      });
  }, []);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (vesselId === "") {
      setErr("Select a vessel");
      return;
    }
    setSaving(true);
    setErr(null);
    try {
      await api("/api/tickets", {
        method: "POST",
        body: JSON.stringify({
          title,
          category,
          vesselId: Number(vesselId),
          assetId: assetId === "" ? null : Number(assetId),
          priority,
        }),
      });
      window.location.href = "/tickets";
    } catch (e: unknown) {
      setErr(e instanceof Error ? e.message : String(e));
    } finally {
      setSaving(false);
    }
  }

  return (
    <Shell>
      <h1 className="text-xl font-semibold mb-4">New Ticket</h1>
      {err && <div className="text-red-300 mb-3">{err}</div>}
      <form onSubmit={submit} className="max-w-xl grid gap-4">
        <label className="grid gap-1">
          <span className="text-sm opacity-80">Title</span>
          <input
            className="px-3 py-2 rounded-xl bg-white/10 outline-none focus:ring-2 ring-ocean-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>

        <label className="grid gap-1">
          <span className="text-sm opacity-80">Category</span>
          <input
            className="px-3 py-2 rounded-xl bg-white/10 outline-none focus:ring-2 ring-ocean-500"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </label>

        <div className="grid grid-cols-2 gap-4">
          <label className="grid gap-1">
            <span className="text-sm opacity-80">Vessel</span>
            <select
              className="px-3 py-2 rounded-xl bg-white/10 outline-none focus:ring-2 ring-ocean-500"
              value={vesselId}
              onChange={(e) =>
                setVesselId(e.target.value === "" ? "" : Number(e.target.value))
              }
              required
            >
              <option value="">Select…</option>
              {vessels.map((v) => (
                <option key={v.id} value={v.id}>
                  {v.name}
                </option>
              ))}
            </select>
          </label>

          <label className="grid gap-1">
            <span className="text-sm opacity-80">AssetId (optional)</span>
            <input
              type="number"
              className="px-3 py-2 rounded-xl bg-white/10 outline-none focus:ring-2 ring-ocean-500"
              value={assetId}
              onChange={(e) => {
                const v = e.target.value;
                setAssetId(v === "" ? "" : Number(v)); // ✅ convert to number or empty string
              }}
            />
          </label>
        </div>

        <label className="grid gap-1">
          <span className="text-sm opacity-80">Priority</span>
          <select
            className="px-3 py-2 rounded-xl bg-white/10 outline-none focus:ring-2 ring-ocean-500"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
            <option>Critical</option>
          </select>
        </label>

        <div className="flex gap-2">
          <button
            disabled={saving}
            className="px-4 py-2 rounded-xl bg-ocean-700 hover:bg-ocean-600 disabled:opacity-60"
          >
            {saving ? "Saving…" : "Create"}
          </button>
          <a
            href="/tickets"
            className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20"
          >
            Cancel
          </a>
        </div>
      </form>
    </Shell>
  );
}
