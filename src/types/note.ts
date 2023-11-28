import { ITag } from "./tag";

export type INote = {
  id: string;
  title: string;
  description: string;
  tags: ITag[];
}