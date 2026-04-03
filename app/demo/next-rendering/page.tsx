import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NextRenderingDemoPage() {
  const strategies = [
    {
      title: "SSR (Server-Side Rendering)",
      description: "Data diambil setiap kali halaman dibuka. Selalu baru, tapi bisa agak lambat karena server harus kerja dulu.",
      href: "/demo/next-rendering/ssr",
      color: "text-red-500",
    },
    {
      title: "SSG (Static Site Generation)",
      description: "Halaman dibuat sekali saat aplikasi di-build. Super cepat, tapi datanya bisa jadi basi (lama).",
      href: "/demo/next-rendering/ssg",
      color: "text-blue-500",
    },
    {
      title: "ISR (Incremental Static Regeneration)",
      description: "Halaman statis yang bisa update sendiri di background setelah waktu tertentu. Gabungan SSR & SSG.",
      href: "/demo/next-rendering/isr",
      color: "text-purple-500",
    },
    {
      title: "CSR (Client-Side Rendering)",
      description: "Data diambil langsung di browser. Interaktif, tapi kadang muncul loading dulu saat baru dibuka.",
      href: "/demo/next-rendering/csr",
      color: "text-green-500",
    },
  ];

  return (
    <main className="container mx-auto p-8 max-w-5xl">
      <h1 className="text-4xl font-bold mb-4">Strategi Rendering Next.js</h1>
      <p className="text-gray-600 mb-12 max-w-2xl text-lg">
        Lihat gimana Next.js nanganin cara ambil data dan bikin halaman pakai App Router.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {strategies.map((s) => (
          <div key={s.title} className="p-6 border rounded-xl hover:shadow-lg transition-shadow bg-white flex flex-col justify-between">
            <div>
              <h2 className={`text-2xl font-bold mb-3 ${s.color}`}>{s.title}</h2>
              <p className="text-gray-600 mb-6">{s.description}</p>
            </div>
            <Link href={s.href}>
              <Button className="w-full">Coba {s.title.split(' ')[0]}</Button>
            </Link>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <Link href="/demo">
          <Button variant="outline">Kembali ke Halaman Demo</Button>
        </Link>
      </div>
    </main>
  );
}
