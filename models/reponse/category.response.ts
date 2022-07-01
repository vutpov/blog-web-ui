import { Post } from "./post.response";

interface Category {
  id: any;
  name: string;
  notes: string;
  posts: Post[];
}

export { type Category };
