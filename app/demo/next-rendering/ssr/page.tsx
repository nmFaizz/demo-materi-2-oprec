import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Clock } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function SSRPage() {
  const timestamp = new Date().toLocaleTimeString();
  const randomValue = Math.floor(Math.random() * 1000);

  return (
    <main className="container mx-auto p-8 max-w-4xl font-mono">
      <div className="mb-8 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-red-500">Server-Side Rendering (SSR)</h1>
        <Link href="/demo/next-rendering">
          <Button variant="outline">Kembali</Button>
        </Link>
      </div>

      <div className="bg-red-50 border border-red-200 p-8 rounded-xl shadow-sm mb-12">
        <div className="flex items-center gap-4 mb-6">
          <Clock className="w-12 h-12 text-red-500" />
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-red-600">Dibuat pada jam</p>
            <p className="text-3xl font-bold">{timestamp}</p>
          </div>
        </div>
        
        <p className="mb-4 text-gray-700 leading-relaxed">
          Coba refresh halaman ini dan lihat jamnya berubah. Karena pakai 
          <code className="bg-red-100 px-2 py-0.5 rounded text-red-700 ml-1">force-dynamic</code>, 
          setiap kali kamu buka halaman ini, server bakal bikin ulang tampilannya.
        </p>

        <div className="p-4 bg-white rounded-lg border border-red-100 flex items-center justify-between">
          <span className="font-semibold text-gray-500">Angka Acak (Berubah tiap refresh):</span>
          <span className="text-xl font-bold text-red-600">#{randomValue}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Kelebihan</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Datanya selalu paling baru.</li>
            <li>Cocok buat konten yang beda-beda tiap user (misal: profil).</li>
            <li>Bagus buat SEO karena HTML-nya sudah lengkap dari awal.</li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Kekurangan</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Loading awal terasa sedikit lebih lama.</li>
            <li>Server kerja lebih keras kalau banyak yang buka.</li>
            <li>Nggak secepat halaman statis.</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
