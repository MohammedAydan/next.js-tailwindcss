import Image from "next/image";
import Img from "../../../../public/photo.jpg";

const Card = () => {
  return (
    <div className=" md:w-1/3 bg-slate-100 flex flex-col p-6 space-y-2 rounded-lg items-center border border-slate-200">
      <Image src={Img} className="w-16 h-16 rounded-full -mt-12 border border-slate-200" />
      <h5 className="font-bold text-lg text-slate-900">Adam Sandler</h5>
      <p className=" leading-5 text-sm">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta alias
        quam mollitia dignissimos aliquam architecto praesentium nulla maxime
        harum fuga.
      </p>
    </div>
  );
};

export default Card;
