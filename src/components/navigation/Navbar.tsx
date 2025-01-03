import { RxHamburgerMenu } from "react-icons/rx";
import { UserInfo } from "./NavbarUser";
import { NavigationItem } from "./NavitagionItem";
const routes = [
  { link: "/user", text: "Usuários", iconSrc: "/navbar/users-icon.svg" },
  { link: "/test", text: "Test", iconSrc: "/navbar/users-icon.svg" },
];

export const Navbar = () => {
  return (
    <nav className="h-full w-[12.4375rem] bg-vega-blue-800 p-8 flex flex-col gap-8 border-r-[.1875rem] border-vega-gray-400">
      {/* Icon */}
      <RxHamburgerMenu className="text-white" size={25} />
      <UserInfo />

      <div className="flex-1">
        {routes.map((route) => {
          return (
            <NavigationItem
              text={route.text}
              link={route.link}
              iconSrc={route.iconSrc}
            />
          );
        })}
      </div>
    </nav>
  );
};
