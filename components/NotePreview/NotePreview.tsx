"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchNoteById } from "@/lib/api";

export default function NotePreview({ id }: { id: string }) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Failed loading</p>;

  return (
    <div>
      <h2>{data?.title}</h2>
      <p>{data?.content}</p>
    </div>
  );
}
