interface ReponseData<T> {
  data: T;
  status: {
    message: string;
    code: number;
  };
}

interface PaginationReponseData<T> extends ReponseData<T> {
  pages: {
    totalPage: number;
    page: number;
    totalCount: number;
    pageSize: number;
  };
}

export { ReponseData, PaginationReponseData };
