import { SearchUserResponse } from "@/types/global";
import { ChatTabs } from "./ChatTabs";
import UserSearchResults from "./UserSearchResults";
import { UserSearchSkeletons } from "../skeletons/UserSearchSkeleton";

type ChatsProps = {
  userSearchList: SearchUserResponse | null;
  isInputFocused: boolean;
  isSearchingUsers: string;
  searchInput: string;
  setUserSearchList: (val: SearchUserResponse | null) => void;
};

const Chats = ({
  userSearchList,
  isInputFocused,
  isSearchingUsers,
  searchInput,
  setUserSearchList,
}: ChatsProps) => {
  if (isInputFocused && isSearchingUsers === "loading") {
    return (
      <>
        <UserSearchSkeletons />
        <UserSearchSkeletons />
        <UserSearchSkeletons />
        <UserSearchSkeletons />
        <UserSearchSkeletons />
      </>
    );
  }
  return (
    <div>
      {isInputFocused || (userSearchList && userSearchList.users.length > 0) ? (
        <div className="h-[78vh]">
          {userSearchList ? (
            <UserSearchResults
              userSearchList={userSearchList}
              searchInput={searchInput}
              setUserSearchList={setUserSearchList}
            />
          ) : null}
        </div>
      ) : (
        <ChatTabs />
      )}
    </div>
  );
};

export default Chats;
