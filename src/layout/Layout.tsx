import { ScrollArea } from "@/components/ui/scroll-area";
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
    </div>
  );
};
