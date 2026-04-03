import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function LibraryDemoPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 space-y-8">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm flex flex-col gap-4 text-center">
        <h1 className="text-4xl font-bold mb-8">Demo Library</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full text-left">
          <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-semibold mb-4 text-blue-500">TanStack Query</h2>
            <p className="mb-6 text-gray-600">
              Alat bantu buat ambil data (fetching), simpan di memori (caching), dan sinkronisasi data dari server.
            </p>
            <Link href="/demo/library/tanstack-query">
              <Button className="w-full">Lihat Demo Query</Button>
            </Link>
          </div>

          <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-semibold mb-4 text-green-500">TanStack Table</h2>
            <p className="mb-6 text-gray-600">
              Library buat bikin tabel atau datagrid yang lengkap fiturnya tapi tetap ringan.
            </p>
            <Link href="/demo/library/tanstack-table">
              <Button className="w-full">Lihat Demo Table</Button>
            </Link>
          </div>
        </div>

        <div className="mt-8">
          <Link href="/demo">
            <Button variant="outline">Kembali ke Halaman Demo</Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
