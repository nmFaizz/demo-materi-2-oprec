"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MousePointer2, Loader2 } from "lucide-react";

export default function CSRPage() {
  const [timestamp, setTimestamp] = useState<string | null>(null);
  const [randomId, setRandomId] = useState<number | null>(null);

  useEffect(() => {
    // Mimic API delay
    const timer = setTimeout(() => {
      setTimestamp(new Date().toLocaleTimeString());
      setRandomId(Math.floor(Math.random() * 9000) + 1000);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="container mx-auto p-8 max-w-4xl font-mono">
      <div className="mb-8 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-green-600">Client-Side Rendering (CSR)</h1>
        <Link href="/demo/next-rendering">
          <Button variant="outline">Kembali</Button>
        </Link>
      </div>

      <div className="bg-green-50 border border-green-200 p-8 rounded-xl shadow-sm mb-12">
        <div className="flex items-center gap-4 mb-6">
          <MousePointer2 className="w-12 h-12 text-green-600" />
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-green-600">Muncul di browser pada jam</p>
            {timestamp ? (
              <p className="text-3xl font-bold">{timestamp}</p>
            ) : (
              <div className="flex items-center gap-2">
                <Loader2 className="animate-spin h-6 w-6" />
                <span>Lagi loading...</span>
              </div>
            )}
          </div>
        </div>
        
        <p className="mb-4 text-gray-700 leading-relaxed">
          Halaman ini awalnya kosong, baru setelah kodenya jalan di browser, datanya diambil dan muncul. 
          Makanya tadi pas baru dibuka ada tulisan "Lagi loading..." sebentar.
        </p>

        <div className="p-4 bg-white rounded-lg border border-green-100 flex items-center justify-between min-h-[60px]">
          <span className="font-semibold text-gray-500">ID Client (Dibuat pas halaman siap):</span>
          {randomId ? (
            <span className="text-xl font-bold text-green-600">#{randomId}</span>
          ) : (
            <Loader2 className="animate-spin h-5 w-5 text-gray-300" />
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Kelebihan</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Server nggak perlu ribet karena yang ngerjain browser kita.</li>
            <li>Sangat interaktif, kayak aplikasi beneran.</li>
            <li>Nggak perlu refresh seluruh halaman buat ganti data.</li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Kekurangan</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Loading pertama terasa ada jeda (layar kosong/loading).</li>
            <li>Kadang susah dibaca sama mesin pencari (SEO).</li>
            <li>HP jadul mungkin agak berat ngerjainnya.</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
