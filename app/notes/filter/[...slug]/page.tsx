import TagsMenu from "@/components/TagsMenu/TagsMenu";
import Notes from "./Notes.client";
import { fetchNotes, fetchCategories } from "@/lib/api";

const NotesPage = async () => {
  const categories = await fetchCategories();
  const { notes, totalPages } = await fetchNotes({ page: 1 });

  return (
    <div>
      <TagsMenu tags={categories} />
      <Notes notes={notes} totalPages={totalPages} />
    </div>
  );
};

export default NotesPage;
