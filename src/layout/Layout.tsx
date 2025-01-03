import { Navbar } from "../components/navigation/Navbar";

interface LaouyProps {
  children: JSX.Element;
}
export const Layout = ({ children }: LaouyProps) => {
  return (
    <div className="flex h-full w-full">
      <Navbar />
      <main className="flex-1">{children}</main>
    </div>
  );
};
