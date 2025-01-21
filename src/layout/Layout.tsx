import { ScrollArea } from "@/components/ui/scroll-area";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "../components/navigation/Navbar";

interface LaouyProps {
  children: JSX.Element;
}
export const Layout = ({ children }: LaouyProps) => {
  return (
    <div className="flex h-full w-full">
      <Navbar />
      <ScrollArea className="flex-1 px-[3.125rem] py-[2.25rem] max-h-full h-full">
        {children}
      </ScrollArea>
      <Toaster
        position="top-right"
        toastOptions={{
          classNames: {
            error: "bg-red-400",
            success: "text-green-400",
            warning: "text-yellow-400",
            info: "bg-blue-400",
          },
        }}
      />
    </div>
  );
};
