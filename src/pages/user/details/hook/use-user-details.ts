import { GLOBAL_TEXT, replaceText } from "@/config/pt";
import { useUserContext } from "@/hooks/use-user";
import { zodResolver } from "@hookform/resolvers/zod";

import { useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import { toast } from "sonner";
import { z } from "zod";

const formSchema = z.object({
  username: z
    .string()
    .min(2, { message: "Username must be at least 2 characters." })
    .max(50, { message: "Max characters are 50" }),
  email: z.string().email(),
  gender: z.string(),
  language: z.string(),
});

type FormValues = z.infer<typeof formSchema>;

interface UseUserDetailsData {
  form: ReturnType<typeof useForm<FormValues>>;
  onSubmit: (values: FormValues) => void;
  navigate: ReturnType<typeof useNavigate>;
  canEditDetails: boolean;
  titleUserDetails: string;
}

export const useUserDetails = (): UseUserDetailsData => {
  const { userId } = useParams<{ userId: string }>();
  const { compareUserProfile, userRole, getUserById, updateUser } =
    useUserContext();
  const navigate = useNavigate();

  const canEditDetails = useMemo<boolean>(
    () => compareUserProfile("ADMIN"),
    [compareUserProfile]
  );

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    disabled: !canEditDetails,
  });

  const fillFormWithUserData = (): void => {
    if (!userId) return;
    const user = getUserById(userId);
    if (user) form.reset(user);
  };

  useEffect(() => {
    fillFormWithUserData();
  }, [userId, userRole]);

  const titleUserDetails = canEditDetails
    ? GLOBAL_TEXT.PAGES.USER.EDIT.TITLE
    : GLOBAL_TEXT.PAGES.USER.DETAILS.TITLE;

  const onSubmit = (values: FormValues): void => {
    if (!canEditDetails) {
      toast.warning(
        replaceText(
          { recurso: GLOBAL_TEXT.RESOURCE.USER },
          GLOBAL_TEXT.TOAST.WITHOUT_PERMISSION
        )
      );
      return;
    }

    updateUser({ id: userId!, ...values });
  };

  return {
    form,
    onSubmit,
    navigate,
    canEditDetails,
    titleUserDetails,
  };
};
