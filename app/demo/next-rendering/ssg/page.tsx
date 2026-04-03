import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Zap } from "lucide-react";

export const dynamic = "force-static";

export default async function SSGPage() {
  const timestamp = new Date().toLocaleTimeString();
  const buildId = Math.floor(Math.random() * 9000) + 1000;

  return (
    <main className="container mx-auto p-8 max-w-4xl font-mono">
      <div className="mb-8 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-blue-500">Static Site Generation (SSG)</h1>
        <Link href="/demo/next-rendering">
          <Button variant="outline">Kembali</Button>
        </Link>
      </div>

      <div className="bg-blue-50 border border-blue-200 p-8 rounded-xl shadow-sm mb-12">
        <div className="flex items-center gap-4 mb-6">
          <Zap className="w-12 h-12 text-blue-500 fill-blue-500" />
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">Dibuat pada jam</p>
            <p className="text-3xl font-bold">{timestamp}</p>
          </div>
        </div>
        
        <p className="mb-4 text-gray-700 leading-relaxed">
          Coba refresh halaman ini. Jamnya <span className="font-bold underline">nggak akan</span> berubah. 
          Halaman ini dibuat pas aplikasi lagi di-build. Filenya sudah jadi HTML statis, jadi bukanya secepat kilat.
        </p>

        <div className="p-4 bg-white rounded-lg border border-blue-100 flex items-center justify-between">
          <span className="font-semibold text-gray-500">ID Build (Tetap sampai build berikutnya):</span>
          <span className="text-xl font-bold text-blue-600">#{buildId}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Kelebihan</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Sangat cepat karena tinggal kirim file HTML doang.</li>
            <li>Server nggak perlu kerja keras pas ada yang buka.</li>
            <li>Sangat aman dan bagus banget buat SEO.</li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Kekurangan</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Datanya bisa basi kalau nggak di-build ulang.</li>
            <li>Harus nge-build seluruh web kalau ada konten ganti.</li>
            <li>Nggak cocok buat konten yang ganti-ganti terus.</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
