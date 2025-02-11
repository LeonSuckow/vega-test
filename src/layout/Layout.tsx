import { BreadCrumb } from "@/components/breadcrumb/breadcrumb";
import { AppSidebar } from "@/components/sidebar/app-sidebar";

import { ScrollArea } from "@/components/ui/scroll-area";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/sonner";
import { UserProvider } from "@/hooks/use-user";
import { getCookie } from "@/utils/cookies";
import { Separator } from "@radix-ui/react-separator";

interface LaouyProps {
  children: JSX.Element;
}

export const Layout = ({ children }: LaouyProps) => {
  const sidebarDefaultState =
    getCookie("sidebar:state") === "true" ? true : false;

  return (
    <UserProvider>
      <SidebarProvider defaultOpen={sidebarDefaultState}>
        <div className="flex h-full w-full">
          <AppSidebar />
          <SidebarInset>
            <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
              <div className="flex items-center gap-2 px-4 ">
                <SidebarTrigger className="-ml-1" />
                <Separator orientation="vertical" className="mr-2 h-4" />
                <BreadCrumb />
              </div>
            </header>
            <ScrollArea className="flex-1 px-[3.125rem] py-[2.25rem] max-h-full h-full">
              {children}
            </ScrollArea>
            <Toaster
              position="top-right"
              toastOptions={{
                classNames: {
                  error: "bg-red-400",
                  success: "bg-vega-green-800 text-white border-vega-green-800",
                  warning:
                    "bg-vega-yellow-800 text-white border-vega-yellow-800",
                  info: "bg-blue-400",
                },
              }}
            />
          </SidebarInset>
        </div>
      </SidebarProvider>
    </UserProvider>
  );
};
