import React from "react";

export default function NotesFilterLayout({
  children,
  sidebar,
}: {
  children: React.ReactNode;
  sidebar: React.ReactNode;
}) {
  return (
    <div className="container">
      {children}
      <aside className="sidebar"> {sidebar} </aside>
    </div>
  );
}
