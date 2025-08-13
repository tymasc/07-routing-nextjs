import React from "react";
import css from "./LayoutNotes.module.css";

export default function NotesFilterLayout({
  children,
  sidebar,
}: {
  children: React.ReactNode;
  sidebar: React.ReactNode;
}) {
  return (
    <div className={css.container}>
      <main>
        <div className={css.notesWrapper}> {children}</div>
      </main>
      <aside className={css.sidebar}> {sidebar} </aside>
    </div>
  );
}
