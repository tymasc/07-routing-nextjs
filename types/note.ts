export type NoteTags = "Todo" | "Work" | "Personal" | "Meeting" | "Shopping";

export interface Note {
  id: string;
  title: string;
  content: string;
  tag: NoteTags;
  createdAt: string;
  updatedAt: string;
}
