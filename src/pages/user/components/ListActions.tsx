import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User } from "@/interface/user";
import { MoreHorizontal } from "lucide-react";
import { useNavigate } from "react-router";

interface UserListActions {
  user: User;
}

const useListAction = () => {
  let canEdit = false;
  const userRole = localStorage.getItem("vega-user-role");
  if (userRole === "admin") canEdit = true;
  const textUserDetails = canEdit ? "Editar" : "Visualizar";
  const navigate = useNavigate();

  return { textUserDetails, navigate };
};

export const UserListActions = ({ user }: UserListActions) => {
  const { textUserDetails, navigate } = useListAction();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
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
