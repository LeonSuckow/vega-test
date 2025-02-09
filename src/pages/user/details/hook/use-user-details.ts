import { toast } from "sonner";

import { useUserContext } from "@/hooks/use-user";
import { usersMock } from "@/mock/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import { z } from "zod";

export const useUserDetails = () => {
  const [canEditDetails, setCanEditDetails] = useState(false);
  const { isUserRole } = useUserContext();
  const { userId } = useParams();

  const navigate = useNavigate();

  const titleUserDetails = canEditDetails
    ? "Editar usuário"
    : "Visualizar usuário";

  const formSchema = z.object({
    username: z
      .string()
      .min(2, {
        message: "Username must be at least 2 characters.",
      })
      .max(50, {
        message: "Max characters are 50",
      }),
    email: z.string().email(),
    gender: z.string(),
    language: z.string(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    disabled: !canEditDetails,
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (!canEditDetails) {
      return toast.warning("User without permission");
    }

    toast.success("User updated");
    console.log(values);
  }

  useEffect(() => {
    if (isUserRole("Admin")) {
      setCanEditDetails(true);
    }

    const user = usersMock.find((user) => user.id === userId);
    if (user) form.reset(user);
  }, []);

  return {
    form,
    onSubmit,
    navigate,
    canEditDetails,
    titleUserDetails,
  };
};
