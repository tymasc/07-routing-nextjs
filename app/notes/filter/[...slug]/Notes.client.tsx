"use client";
import { Note } from "@/types/note";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchNotes } from "@/lib/api";
import SearchBox from "@/components/SearchBox/SearchBox";
import Pagination from "@/components/Pagination/Pagination";
import Modal from "@/components/Modal/Modal";
import NoteForm from "@/components/NoteForm/NoteForm";
import NoteList from "@/components/NoteList/NoteList";
import { useDebounce } from "@/hooks/useDebounce";

type Props = {
  notes: Note[];
  totalPages: number;
};

export default function Notes({ notes, totalPages }: Props) {
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const debouncedSearch = useDebounce(searchQuery, 500);

  const { data, isLoading } = useQuery({
    queryKey: ["notes", page, debouncedSearch],
    queryFn: () => fetchNotes({ page, search: debouncedSearch }),
    initialData: { notes, totalPages },
    placeholderData:(prev) => prev,
  });

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setPage(1);
  };

  const toggleModal = () => setIsModalOpen((prevv) => !prevv);

  const noteData = data ?? { notes: [], totalPages: 1 };

  return (
    <div>
      <div>
        <button onClick={toggleModal}>Add Note</button>
      </div>

      <SearchBox value={searchQuery} onChange={handleSearchChange} />

      {isLoading ? <p>Loading...</p> : <NoteList notes={data?.notes || []} />}
      {noteData.totalPages > 1 && (
        <Pagination
          currentPage={page}
          pageCount={noteData.totalPages}
          onPageChange={handlePageChange}
        />
      )}

      {isModalOpen && (
        <Modal onClose={toggleModal}>
          <NoteForm onSuccess={toggleModal} onCancel={toggleModal} />
        </Modal>
      )}
    </div>
  );
}
