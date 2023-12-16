import { LoadingStateType, SearchUserResponse } from "@/types/global";

export const actionTypes = {
  SEARCH_INPUT: "searchInput",
  USER_SEARCH_LIST: "userSearchList",
  IS_INPUT_FOCUSED: "isInputFocused",
  SEARCHING_USER_STATUS: "searchingUserStatus",
} as const;

export type SidebarState = {
  searchInput: string;
  userSearchList: SearchUserResponse | null;
  isInputFocused: boolean;
  searchingUserStatus: LoadingStateType;
};

export type SidebarAction =
  | { type: typeof actionTypes.SEARCH_INPUT; payload: string }
  | {
      type: typeof actionTypes.USER_SEARCH_LIST;
      payload: SearchUserResponse | null;
    }
  | { type: typeof actionTypes.IS_INPUT_FOCUSED; payload: boolean }
  | {
      type: typeof actionTypes.SEARCHING_USER_STATUS;
      payload: LoadingStateType;
    };

export const sidebarReducer = (state: SidebarState, action: SidebarAction): SidebarState => {
  switch (action.type) {
    case "searchInput":
      return { ...state, searchInput: action.payload };

    case "isInputFocused":
      return { ...state, isInputFocused: action.payload };

    case "searchingUserStatus":
      return { ...state, searchingUserStatus: action.payload };

    case "userSearchList":
      return { ...state, userSearchList: action.payload };

    default:
      return state;
  }
};
