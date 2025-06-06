type TOptions = {
  page?: number;
  limit?: number;
  skip?: number;
  sortBy?: string;
  sortOrder?: string;
};

type TResponse = {
  limit: number;
  page: number;
  skip: number;
  sortBy: string;
  sortOrder: string;
};

export const calculatePagination = (options: TOptions): TResponse => {
  const limit = options.limit ? Number(options.limit) : 10;
  const page = options.page ? Number(options.page) : 1;
  const skip = (page - 1) * limit;
  const sortBy = options.sortBy || "createdAt";
  const sortOrder = options.sortOrder || "desc";

  return {
    limit,
    page,
    skip,
    sortBy,
    sortOrder,
  };
};
