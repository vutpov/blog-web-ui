import { API } from "@/constant";
import { FileReponse } from "@/models/reponse/file.response";
import getAxiosConfig from ".";

class FileService {
  async upload(args: FormData): Promise<FileReponse> {
    const res = await getAxiosConfig({
      baseURL: process.env.NEXT_PUBLIC_API_BACKEND,
    }).post(`${API.FILE}`, args);
    const data = await res.data;

    return data;
  }
}

export default FileService;
