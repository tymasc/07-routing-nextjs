"use client";

import { useRouter } from "next/navigation";
import Modal from "@/components/Modal/Modal";
import { useQuery } from "@tanstack/react-query";
import { fetchNoteById } from "@/lib/api";

interface NoteModalPreviewProps {
  id: string;
}

export default function NoteModalPreviewClient({ id }: NoteModalPreviewProps) {
  const router = useRouter();

  const { data, isLoading, error } = useQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
  });

  const handleClose = () => router.back();

  if (isLoading)
    return (
      <Modal onClose={handleClose}>
        <p>Loading...</p>
      </Modal>
    );

  if (error)
    return (
      <Modal onClose={handleClose}>
        <p>Failed to load note details.</p>
      </Modal>
    );

  return (
    <Modal onClose={handleClose}>
      <h2>{data?.title}</h2>
      <p>{data?.content}</p>
    </Modal>
  );
}
