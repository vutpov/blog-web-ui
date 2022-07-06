import getAxiosConfig from ".";
import { PaginationReponseData } from "../models/reponse/index.response";
import { Post } from "../models/reponse/post.response";
import { ListPostRequest } from "../models/request/post.request";
import { BaseService } from "./base.service";

class PostService implements BaseService<Post> {
  async getOne(id: any) {
    throw new Error("Method not implemented.");
  }
  async getAll(args: ListPostRequest): Promise<PaginationReponseData<Post[]>> {
    const { categoryId } = args;
    const res = await getAxiosConfig().get(`/frontend/post/all/${categoryId}`);
    const data = await res.data;

    return data;
  }
}

export default PostService;
