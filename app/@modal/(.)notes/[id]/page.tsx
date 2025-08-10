"use client";

import Modal from "@/components/Modal/Modal";
import { useRouter } from "next/navigation";
import NotePreview from "@/components/NotePreview/NotePreview";

const id = "";

const NoteModalPage = () => {
  const router = useRouter();

  const handleClose = () => {
    router.back();
  };

  return (
    <Modal onClose={handleClose}>
      <NotePreview id={id} />
    </Modal>
  );
};

export default NoteModalPage;
