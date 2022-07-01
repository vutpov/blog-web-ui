interface ReponseData<T> {
  data: T;
  status: {
    message: string;
    code: number;
  };
}

export { type ReponseData };
