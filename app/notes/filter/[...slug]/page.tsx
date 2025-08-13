import TagsMenu from "@/components/TagsMenu/TagsMenu";
import Notes from "./Notes.client";
import { fetchNotes } from "@/lib/api";

interface NotesPageProps {
  params: Promise<{ slug?: string[] }>;
}

const NotesPage = async ({ params }: NotesPageProps) => {
  const { slug } = await params;

  const tag = slug?.[0] ?? "";

  const fetchOptions = { page: 1, ...(tag && tag !== "All" ? { tag } : {}) };

  const { notes, totalPages } = await fetchNotes(fetchOptions);

  return (
    <div>
      <TagsMenu/>
      <Notes notes={notes} totalPages={totalPages} tag={ tag } />
    </div>
  );
};

export default NotesPage;
