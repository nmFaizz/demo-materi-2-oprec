import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BookOpen, Layers, Zap } from "lucide-react";

export default function DemoPage() {
  const demos = [
    {
      title: "Demo Library",
      description:
        "Belajar cara pakai TanStack Query buat ambil data dan TanStack Table buat bikin tabel yang keren.",
      href: "/demo/library",
      icon: <BookOpen className="w-8 h-8 text-blue-500" />,
    },
    {
      title: "Next.js Rendering",
      description:
        "Lihat bedanya SSR, SSG, ISR, dan CSR. Biar makin paham kapan harus pakai yang mana.",
      href: "/demo/next-rendering",
      icon: <Layers className="w-8 h-8 text-purple-500" />,
    },
    {
      title: "State Management",
      description:
        "Cobain Zustand buat simpan data aplikasi yang simpel dan nggak ribet.",
      href: "/demo/state-management",
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
    },
  ];

  return (
    <main className="container min-h-screen mx-auto p-8 max-w-5xl flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {demos.map((demo) => (
          <div
            key={demo.title}
            className="p-8 border rounded-2xl bg-white shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center"
          >
            <div className="mb-6 p-4 bg-gray-50 rounded-full">{demo.icon}</div>
            <h2 className="text-2xl font-bold mb-3">{demo.title}</h2>
            <p className="text-gray-600 mb-8 grow">{demo.description}</p>
            <Link href={demo.href} className="w-full">
              <Button className="w-full">Lihat Demo</Button>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
