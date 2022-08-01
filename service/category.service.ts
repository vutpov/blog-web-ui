import { API } from "@/constant";
import getAxiosConfig from ".";
import { Category } from "../models/reponse/category.response";
import { PaginationReponseData } from "../models/reponse/index.response";
import { BaseService } from "./base.service";

class CategoryService implements BaseService<Category> {
  async getOne(id: any) {
    throw new Error("Method not implemented.");
  }
  async getAll(args?: any): Promise<PaginationReponseData<Category[]>> {
    const res = await getAxiosConfig().get(API.ALL_CATEGORY);
    const data = await res.data;

    return data;
  }
}

export default CategoryService;
