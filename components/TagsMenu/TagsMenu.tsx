"use client";

import { useState } from "react";
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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={css.menuContainer}>
      <button
        className={css.menuButton}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        Notes ▾
      </button>
      {isOpen && (
        <ul className={css.menuList}>
          <li className={css.menuItem}>
            <Link
              href="/notes/filter/All"
              className={css.menuLink}
              onClick={() => setIsOpen(false)}
            >
              All notes
            </Link>
          </li>
          {tags.map((tag) => (
            <li key={tag} className={css.menuItem}>
              <Link
                href={`/notes/filter/${tag}`}
                className={css.menuLink}
                onClick={() => setIsOpen(false)}
              >
                {tag}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TagsMenu;
