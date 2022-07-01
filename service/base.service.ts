import { ReponseData } from "../models/reponse/index.response";

interface BaseService<T> {
  getOne(id: any): Promise<ReponseData<T>>;

  getAll(args?: any): Promise<ReponseData<T[]>>;
}

export { type BaseService };
