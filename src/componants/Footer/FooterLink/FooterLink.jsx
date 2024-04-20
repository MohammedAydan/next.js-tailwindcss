import Link from "next/link";

const FooterLink = ({ Location, Text }) => {
  return (
    <Link href={Location} className="hover:text-slate-300">
      {Text}
    </Link>
  );
};

export default FooterLink;
