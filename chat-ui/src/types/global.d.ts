export type ISearchedUser = {
  _id: string;
  username: string;
  email: string;
};

export type SearchUserResponse = {
  users: ISearchedUser[];
  currentPage: number;
  totalPages: number;
  totalUsers: number;
};

export type LoadingStateType = "loading" | "success" | "error" | "idle";
