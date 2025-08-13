import { NoteTags } from "@/types/note";
import css from "./SidebarNotes.module.css";
import Link from "next/link";

const categories: NoteTags[] = [
  "Todo",
  "Work",
  "Personal",
  "Meeting",
  "Shopping",
];

const SidebarNotes = () => {
  return (
    <aside>
      <ul className={css.menuList}>
        <li className={css.menuItem}>
          <Link href="/notes/filter/All" className={css.menuLink}>
            All notes
          </Link>
        </li>

        {categories.map((tag) => (
          <li key={tag} className={css.menuItem}>
            <Link href={`/notes/filter/${tag}`} className={css.menuLink}>
              {tag}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SidebarNotes;
