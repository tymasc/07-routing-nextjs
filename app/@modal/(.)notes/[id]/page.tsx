import NoteModalClient from "./NotePreview.client";

interface NotePageProps {
  params: Promise<{ id: string }>;
}

export default async function NotePage({ params }: NotePageProps) {

  const { id } = await params;
  return <NoteModalClient id={id} />;
}
