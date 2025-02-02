import { createContext, ReactNode, useContext } from "react";
import { useNavigate } from "react-router";
interface UserContextData {
  isUserRole: (role: string) => boolean;
  setUserRole: (role: string) => void;
}
export interface UserProviderProps {
  children: ReactNode;
}

const UserContext = createContext({} as UserContextData);

export const UserProvider = ({ children }: UserProviderProps) => {
  const navigate = useNavigate();
  const isUserRole = (role: string) => {
    const userRole = localStorage.getItem("vega-user-role");
    return userRole === role;
  };

  const setUserRole = (role: string) => {
    localStorage.setItem("vega-user-role", role);
    navigate(0);
  };

  return (
    <UserContext.Provider value={{ isUserRole, setUserRole }}>
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
