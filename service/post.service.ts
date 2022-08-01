import { API } from "@/constant";
import { PaginationRequest } from "@/models";
import getAxiosConfig from ".";
import {
  PaginationReponseData,
  ReponseData,
} from "../models/reponse/index.response";
import { Post } from "../models/reponse/post.response";
import {
  ListPostRequest,
  PostRequest,
  UpdatePostRequest,
} from "../models/request/post.request";
import { BaseService } from "./base.service";

class PostService implements BaseService<Post> {
  async getOne(id: any): Promise<ReponseData<Post>> {
    const res = await getAxiosConfig({
      withToken: false,
    }).get(`${API.POST}/${id}`);
    const data = await res.data;

    return data;
  }
  async getAll(args: ListPostRequest): Promise<PaginationReponseData<Post[]>> {
    const { categoryId, ...rest } = args;

    const res = await getAxiosConfig().get(`${API.ALL_POST}/${categoryId}`, {
      params: rest,
    });
    const data = await res.data;

    return data;
  }

  async create(args: PostRequest): Promise<ReponseData<Post>> {
    const res = await getAxiosConfig().post(`${API.POST}`, args);
    const data = await res.data;

    return data;
  }

  async myPost(
    args: PaginationRequest
  ): Promise<PaginationReponseData<Post[]>> {
    const res = await getAxiosConfig().get(`${API.POST}/my-posts`, {
      params: args,
    });
    const data = await res.data;

    return data;
  }

  async update(args: UpdatePostRequest): Promise<ReponseData<Post>> {
    const { id, ...rest } = args;

    const res = await getAxiosConfig().put(`${API.POST}/${id}`, rest);
    const data = await res.data;

    return data;
  }

  async delete(id: number): Promise<ReponseData<any>> {
    const res = await getAxiosConfig().delete(`${API.POST}/${id}`);
    const data = await res.data;

    return data;
  }
}

export default PostService;
