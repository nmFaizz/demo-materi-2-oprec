"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowUpDown } from "lucide-react";

type User = {
  id: number;
  name: string;
  email: string;
  role: string;
  status: "Aktif" | "Non-aktif";
};

const defaultData: User[] = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com", role: "Admin", status: "Aktif" },
  { id: 2, name: "Bob Smith", email: "bob@example.com", role: "User", status: "Non-aktif" },
  { id: 3, name: "Charlie Brown", email: "charlie@example.com", role: "Editor", status: "Aktif" },
  { id: 4, name: "Diana Prince", email: "diana@example.com", role: "User", status: "Aktif" },
  { id: 5, name: "Ethan Hunt", email: "ethan@example.com", role: "Admin", status: "Non-aktif" },
];

const columns: ColumnDef<User>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-0 hover:bg-transparent"
        >
          Nama
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <span className="font-medium">{row.getValue("name")}</span>,
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "role",
    header: "Jabatan",
    cell: ({ row }) => (
      <span className="px-2 py-1 rounded-full text-xs font-semibold bg-gray-100">
        {row.getValue("role")}
      </span>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      return (
        <span
          className={`px-2 py-1 rounded-full text-xs font-semibold ${
            status === "Aktif"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {status}
        </span>
      );
    },
  },
];

export default function TanstackTableDemo() {
  const [data] = useState<User[]>(() => [...defaultData]);
  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable<User>({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div className="container mx-auto p-8 max-w-5xl">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold font-mono">Demo TanStack Table</h1>
          <p className="text-gray-500">Bikin tabel yang bisa diurutkan (sorting) dengan mudah</p>
        </div>
        <Link href="/demo/library">
          <Button variant="outline">Kembali</Button>
        </Link>
      </div>

      <div className="rounded-md border overflow-hidden font-mono">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-50 text-gray-700 uppercase text-xs">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className="px-6 py-4 font-semibold">
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="divide-y divide-gray-200">
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="hover:bg-gray-50 transition-colors bg-white">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-6 py-4">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-12 p-6 bg-green-50 rounded-lg border border-green-100 font-mono">
        <h2 className="text-xl font-bold mb-4 text-green-800">Apa yang dipelajari di sini:</h2>
        <ul className="list-disc list-inside space-y-2 text-green-900">
          <li><strong>Tanpa UI Bawaan (Headless):</strong> Kita yang kontrol penuh tampilannya pakai Tailwind.</li>
          <li><strong>Pola ColumnDef:</strong> Cara rapi buat nentuin kolom tabel.</li>
          <li><strong>Sorting:</strong> Klik kolom Nama buat urutin data.</li>
          <li><strong>Full Type Safety:</strong> Pakai TypeScript biar nggak gampang error.</li>
        </ul>
      </div>
    </div>
  );
}
