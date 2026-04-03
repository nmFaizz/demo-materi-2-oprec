"use client";

import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Loader2, RefreshCcw } from "lucide-react";

interface Post {
  id: number;
  title: string;
  body: string;
}

const fetchPosts = async (): Promise<Post[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
  if (!response.ok) {
    throw new Error("Gagal ambil data dari server");
  }
  return response.json();
};

export default function TanstackQueryDemo() {
  const { data, isLoading, isError, error, refetch, isFetching } = useQuery<Post[], Error>({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  return (
    <div className="container mx-auto p-8 max-w-4xl">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Demo TanStack Query</h1>
          <p className="text-gray-500">Ambil data dari JSONPlaceholder</p>
        </div>
        <div className="flex gap-2">
          <Link href="/demo/library">
            <Button variant="outline">Kembali</Button>
          </Link>
          <Button 
            onClick={() => refetch()} 
            disabled={isFetching}
            variant="secondary"
          >
            {isFetching ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <RefreshCcw className="mr-2 h-4 w-4" />}
            Ambil Ulang
          </Button>
        </div>
      </div>

      {isLoading ? (
        <div className="flex flex-col items-center justify-center py-20">
          <Loader2 className="h-12 w-12 animate-spin text-blue-500 mb-4" />
          <p className="text-lg font-medium">Lagi loading data...</p>
        </div>
      ) : isError ? (
        <div className="p-4 border border-red-200 bg-red-50 text-red-700 rounded-md">
          <p className="font-bold">Waduh, ada error:</p>
          <p>{(error as Error).message}</p>
        </div>
      ) : (
        <div className="space-y-4">
          {data?.map((post) => (
            <div key={post.id} className="p-6 border rounded-lg shadow-sm bg-white">
              <h3 className="text-xl font-semibold mb-2 capitalize">{post.title}</h3>
              <p className="text-gray-600">{post.body}</p>
              <div className="mt-4 text-xs text-gray-400">ID Post: {post.id}</div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-12 p-6 bg-blue-50 rounded-lg border border-blue-100">
        <h2 className="text-xl font-bold mb-4 text-blue-800">Apa yang dipelajari di sini:</h2>
        <ul className="list-disc list-inside space-y-2 text-blue-900">
          <li><strong>Auto-caching:</strong> Coba pindah halaman lalu balik lagi, datanya langsung muncul tanpa loading ulang.</li>
          <li><strong>Status Loading:</strong> Menangani tampilan saat data lagi diambil vs saat lagi diperbarui di belakang layar.</li>
          <li><strong>Penanganan Error:</strong> Cara ngasih tahu user kalau koneksi lagi bermasalah.</li>
          <li><strong>Ambil Ulang (Manual Refetch):</strong> Tombol buat memperbarui data kapan saja.</li>
        </ul>
      </div>
    </div>
  );
}
