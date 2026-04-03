import { Button } from "@/components/ui/button";
import Link from "next/link";
import { RefreshCw } from "lucide-react";

export const revalidate = 10; // Revalidate every 10 seconds

export default async function ISRPage() {
  const timestamp = new Date().toLocaleTimeString();
  const updateId = Math.floor(Math.random() * 9000) + 1000;

  return (
    <main className="container mx-auto p-8 max-w-4xl font-mono">
      <div className="mb-8 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-purple-600">Incremental Static Regeneration (ISR)</h1>
        <Link href="/demo/next-rendering">
          <Button variant="outline">Kembali</Button>
        </Link>
      </div>

      <div className="bg-purple-50 border border-purple-200 p-8 rounded-xl shadow-sm mb-12">
        <div className="flex items-center gap-4 mb-6">
          <RefreshCw className="w-12 h-12 text-purple-600 animate-spin-slow" />
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-purple-600">Terakhir Update pada jam</p>
            <p className="text-3xl font-bold">{timestamp}</p>
          </div>
        </div>
        
        <p className="mb-4 text-gray-700 leading-relaxed">
          Halaman ini bakal update sendiri tiap 10 detik. Kalau kamu refresh sebelum 10 detik, datanya bakal sama. 
          Tapi kalau sudah lewat, refresh pertama bakal memicu update di background, dan refresh <span className="underline italic">kedua</span> baru nunjukin data yang paling baru.
        </p>

        <div className="p-4 bg-white rounded-lg border border-purple-100 flex items-center justify-between">
          <span className="font-semibold text-gray-500">ID Update (Berubah tiap ~10 detik):</span>
          <span className="text-xl font-bold text-purple-600">#{updateId}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Kelebihan</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Cepat kayak SSG tapi bisa update otomatis.</li>
            <li>Nggak perlu nge-build ulang seluruh web.</li>
            <li>Server tetap enteng karena update cuma tiap interval.</li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Kekurangan</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Kadang user masih lihat data lama sebentar.</li>
            <li>Cukup menantang buat diatur kalau datanya banyak.</li>
            <li>Nggak cocok buat aplikasi yang harus real-time banget.</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
