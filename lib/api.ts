import axios from "axios";
import { NoteTags, Note } from "@/types/note";

axios.defaults.baseURL = "https://notehub-public.goit.study/api/notes";
const API_TOKEN = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;

const instance = axios.create({
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,
  },
});

export interface FetchNotesParams {
  page: number;
  perPage?: number;
  search?: string;
  tag?: string;
}

export interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}

export const fetchNotes = async (
  params: FetchNotesParams
): Promise<FetchNotesResponse> => {
  const { page, search, tag } = params;

  const queryParams: Record<string, string | number> = {
    page,
  };

  if (search?.trim()) {
    queryParams.search = search;
  }

  if (tag && tag !== "All") {
    queryParams.tag = tag;
  }

  const response = await instance.get<FetchNotesResponse>("", {
    params: queryParams,
  });
  return response.data;
};

export const createNote = async (data: {
  title: string;
  content: string;
  tag: NoteTags;
}): Promise<Note> => {
  const response = await instance.post<Note>("", data);
  return response.data;
};

export const deleteNote = async (id: string): Promise<Note> => {
  const response = await instance.delete<Note>(`/${id}`);
  return response.data;
};

export const fetchNoteById = async (id: string): Promise<Note> => {
  const response = await instance.get<Note>(`/${id}`);
  return response.data;
};
