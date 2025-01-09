/* eslint-disable @typescript-eslint/no-explicit-any */
import { PaginationInterface } from "./pagination";

export type GenderType = {
  Male: "Masculino";
  Female: "Feminino";
  "Non-binary": "Não-binário";
};

export type LanguageType = {
  Portuguese: "Português";
  English: "English";
  Spanish: "Español";
  German: "Deutsch";
  Italian: "Italiano";
  French: "Français";
  Chinese: "Chines";
};

export interface User {
  username: string;
  email: string;
  language: string;
  gender: string;
}

export interface UserListProps {
  users: User[];
}

export interface UserPageProps {}
export interface UserPageData {
  pagination: PaginationInterface;
  users: any[];
  onPageChange: (page: number) => void;
}
