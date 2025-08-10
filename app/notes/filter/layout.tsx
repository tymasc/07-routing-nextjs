import React from "react";

export default function NotesFilterLayout({
  children,
  sidebar,
}: {
  children: React.ReactNode;
  sidebar: React.ReactNode;
}) {
  return (
    <div>
      {children}
      {sidebar}
    </div>
  );
}
