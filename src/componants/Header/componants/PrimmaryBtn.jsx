import Link from "next/link";

const PrimmaryBtn = ({ Location, Text, className }) => {
  return (
    <Link
      href={Location}
      className={`bg-orange-500 text-white hover:text-slate-900 py-2 px-6 rounded-full ${className} ease-in-out duration-300`}
    >
      {Text}
    </Link>
  );
};

export default PrimmaryBtn;
