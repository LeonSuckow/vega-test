interface NavigationItemProps {
  text: string;
  link: string;
  iconSrc: string;
}
export const NavigationItem = ({
  text,
  link,
  iconSrc,
}: NavigationItemProps) => {
  return (
    <div className="w-full flex gap-2 py-3 px-4">
      <img src={iconSrc} />
      <a href={link} className="text-white font-vega-poppins text-xs">
        {text}
      </a>
    </div>
  );
};
