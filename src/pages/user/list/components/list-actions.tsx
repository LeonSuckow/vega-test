import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { GLOBAL_TEXT } from "@/config/pt";
import { useUserContext } from "@/hooks/use-user";
import { User } from "@/interface/user";
import { MoreHorizontal } from "lucide-react";
import { useNavigate } from "react-router";

interface UserListActions {
  user: User;
}

const useListAction = () => {
  const { compareUserProfile } = useUserContext();

  const textUserDetails = compareUserProfile("ADMIN")
    ? GLOBAL_TEXT.PAGES.USER.LIST.DATATABLE.ACTIONS.EDIT
    : GLOBAL_TEXT.PAGES.USER.LIST.DATATABLE.ACTIONS.DETAILS;

  const navigate = useNavigate();

  return { textUserDetails, navigate };
};

export const UserListActions = ({ user }: UserListActions) => {
  const { textUserDetails, navigate } = useListAction();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => navigate("/user/details/" + user.id)}>
          {textUserDetails}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
