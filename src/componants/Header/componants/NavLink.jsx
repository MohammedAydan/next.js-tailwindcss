import Link from "next/link";

const NavLink = ({ Location, Text }) => {
  return (
    <Link href={Location} className="text-slate-900 hover:text-orange-500">
      {Text}
    </Link>
  );
};

export default NavLink;
