import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: JSX.Element;
}
export const Card = ({ children, className }: CardProps) => {
  return (
    <div className={cn(className, "p-6 flex flex-col gap-6 shadow-md")}>
      {children}
    </div>
  );
};
