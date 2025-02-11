import { GLOBAL_TEXT, replaceText } from "@/config/pt";
import { Profile } from "@/constants/role";
import { User } from "@/interface/user";
import { usersMock } from "@/mock/user";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "sonner";
interface UserContextData {
  compareUserProfile: (role: Profile) => boolean;
  changeUserProfile: (role: Profile) => void;
  getUserById: (id?: string) => User | undefined;
  updateUser: (user: User) => void;
  userRole: Profile;
}
export interface UserProviderProps {
  children: ReactNode;
}

const UserContext = createContext({} as UserContextData);
const DEFAULT_PROFILE: Profile = "PUBLIC";

export const UserProvider = ({ children }: UserProviderProps) => {
  const [userRole, setUserRole] = useState<Profile>(DEFAULT_PROFILE);

  const getUserById = (id?: string) => usersMock.find((user) => user.id === id);

  const updateUser = (user: User) => {
    const index = usersMock.findIndex((u) => u.id === user.id);
    usersMock[index] = user;

    toast.success(
      replaceText(
        { recurso: GLOBAL_TEXT.RESOURCE.USER },
        GLOBAL_TEXT.TOAST.UPDATED
      )
    );
  };

  const compareUserProfile = (role: Profile) => {
    return userRole === role;
  };

  const changeUserProfile = (role: Profile) => {
    localStorage.setItem("vega-user-role", role);
    setUserRole(role);
    toast.success(
      replaceText(
        { recurso: GLOBAL_TEXT.RESOURCE.PROFILE },
        GLOBAL_TEXT.TOAST.CHANGED
      )
    );
  };

  useEffect(() => {
    const userRole = localStorage.getItem("vega-user-role") ?? DEFAULT_PROFILE;
    setUserRole(userRole as Profile);
  }, []);

  return (
    <UserContext.Provider
      value={{
        compareUserProfile,
        changeUserProfile,
        getUserById,
        updateUser,
        userRole,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context)
    throw new Error("useUserContext must be used within a <UserProvider />");
  return context;
};
