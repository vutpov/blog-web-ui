import { PaginationRequest } from "..";

export interface ListPostRequest extends PaginationRequest {
  categoryId: any;
}

export interface PostRequest {
  attachment?: string;
  categoryId: string;
  description: string;
  title: string;
}

export interface UpdatePostRequest extends PostRequest {
  id?: string;
}
