import TagsMenu from "@/components/TagsMenu/TagsMenu";
import Notes from "./Notes.client";
import { fetchNotes, fetchCategories } from "@/lib/api";

interface NotesPageProps {
  params: Promise<{ slug?: string[] }>;
}

const NotesPage = async ({ params }: NotesPageProps) => {
  const { slug } = await params;
  const categories = await fetchCategories();

  const tag = slug?.[0] ?? "";

  const fetchOptions = tag && tag !== "All" ? { page: 1, tag } : { page: 1 };

  const { notes, totalPages } = await fetchNotes(fetchOptions);

  return (
    <div>
      <TagsMenu tags={categories} />
      <Notes notes={notes} totalPages={totalPages} />
    </div>
  );
};

export default NotesPage;
