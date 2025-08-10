import Link from "next/link";
import css from "./TagsMenu.module.css";
import { NoteTags } from "@/types/note";

const categories: NoteTags[] = [
  "Todo",
  "Work",
  "Personal",
  "Meeting",
  "Shopping",
];

interface TagsMenuProps {
  tags?: NoteTags[];
}

const TagsMenu = ({ tags = categories }: TagsMenuProps) => {
  return (
    <div className={css.menuContainer}>
      <button className={css.menuButton}>Notes ▾</button>
      <ul className={css.menuList}>
        <li className={css.menuItem}>
          <Link href="/notes/filter" className={css.menuLink}>
            All notes
          </Link>
        </li>
        {tags.map((tag) => (
          <li key={tag} className={css.menuItem}>
            <Link href={`/notes/filter/${tag}`} className={css.menuLink}>
              {tag}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TagsMenu;
