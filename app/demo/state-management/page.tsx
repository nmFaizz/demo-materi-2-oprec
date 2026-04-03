"use client";

import { useStore } from "@/lib/store";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Plus, Minus, RotateCcw, Trash2, Box } from "lucide-react";
import { useEffect, useState } from "react";

// Komponen kecil buat nampilin angka (counter)
function CounterDisplay() {
  const count = useStore((state) => state.count);
  return (
    <div className="text-center p-6 border rounded-lg bg-white shadow-sm">
      <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">
        Angka Saat Ini
      </p>
      <p className="text-6xl font-bold font-mono text-blue-600">{count}</p>
    </div>
  );
}

// Komponen buat daftar barang (list)
function ItemList() {
  const { items, addItem, removeItem, clearItems } = useStore();
  const [newItem, setNewItem] = useState("");

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (newItem.trim()) {
      addItem(newItem);
      setNewItem("");
    }
  };

  return (
    <div className="p-6 border rounded-lg bg-white shadow-sm space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold flex items-center gap-2">
          <Box className="w-5 h-5" /> Daftar Barang
        </h3>
        <Button
          variant="ghost"
          size="sm"
          onClick={clearItems}
          disabled={items.length === 0}
        >
          Hapus Semua
        </Button>
      </div>

      <form onSubmit={handleAdd} className="flex gap-2">
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Tambah barang..."
          className="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Button type="submit">Tambah</Button>
      </form>

      <ul className="space-y-2 max-h-[200px] overflow-y-auto">
        {items.length === 0 ? (
          <p className="text-center text-gray-400 py-4 italic">
            Belum ada barang
          </p>
        ) : (
          items.map((item, index) => (
            <li
              key={index}
              className="flex justify-between items-center p-2 bg-gray-50 rounded border group"
            >
              <span>{item}</span>
              <button
                onClick={() => removeItem(index)}
                className="text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default function StateManagementDemo() {
  const { increment, decrement, reset } = useStore();
  const [isHydrated, setIsHydrated] = useState(false);

  // Perlu cek hidrasi karena kita pakai LocalStorage (persist)
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) return null;

  return (
    <main className="container mx-auto p-8 max-w-4xl font-mono">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold">State Management pakai Zustand</h1>
          <p className="text-gray-500">
            Cara simpan data aplikasi yang simpel, kecil, dan cepat
          </p>
        </div>
        <Link href="/demo">
          <Button variant="outline">Kembali ke Halaman Demo</Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="space-y-6">
          <CounterDisplay />

          <div className="flex justify-center gap-4">
            <Button size="icon" variant="outline" onClick={decrement}>
              <Minus className="w-4 h-4" />
            </Button>
            <Button variant="secondary" onClick={reset}>
              <RotateCcw className="w-4 h-4 mr-2" /> Reset
            </Button>
            <Button size="icon" onClick={increment}>
              <Plus className="w-4 h-4" />
            </Button>
          </div>

          <div className="p-4 bg-yellow-50 border border-yellow-100 rounded-lg text-sm text-yellow-800">
            <p className="font-bold mb-1 italic">
              Cobain Fitur Simpan Otomatis:
            </p>
            <p>
              Ubah angka atau tambah barang, terus refresh halamannya. Datanya
              nggak bakal hilang karena tersimpan di LocalStorage!
            </p>
          </div>
        </div>

        <ItemList />
      </div>

      <div className="p-8 bg-blue-50 border border-blue-100 rounded-xl">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">
          Kenapa pakai Zustand?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-blue-800">
          <div className="space-y-1">
            <p className="font-bold">Cepat & Ringan</p>
            <p className="text-sm">
              Ukurannya kecil banget dan performanya mantap.
            </p>
          </div>
          <div className="space-y-1">
            <p className="font-bold">Simpel Banget</p>
            <p className="text-sm">
              Nggak perlu kode ribet (boilerplate), cukup pakai hooks.
            </p>
          </div>
          <div className="space-y-1">
            <p className="font-bold">Fitur Lengkap</p>
            <p className="text-sm">
              Gampang kalau mau nambah fitur simpan otomatis atau logger.
            </p>
          </div>
          <div className="space-y-1">
            <p className="font-bold">Efisien</p>
            <p className="text-sm">
              Cuma komponen yang butuh data saja yang bakal di-update.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
