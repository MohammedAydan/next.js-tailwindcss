import Image from "next/image";
import undraw_online_test_re_kyfx from "../../../public/undraw_online_test_re_kyfx.svg";
import { PrimmaryBtn } from "../Header/componants";

const Hero = () => {
  return (
    <section id="hero">
      <div className="container mx-auto py-6 space-y-6 flex flex-col-reverse md:flex-row">
        <div className="md:w-1/2 flex flex-col space-y-5 py-8 text-center md:text-left justify-center text-slate-900 p-3">
          <h1 className=" font-bold text-3xl md:text-5xl">
            Rapidly build modern websites without ever leaving your HTML.
          </h1>
          <p>
            A utility-first CSS framework packed with classes like flex, pt-4,
            text-center and rotate-90 that can be composed to build any design,
            directly in your markup.
          </p>
          <PrimmaryBtn
            Location="#"
            Text="Get started"
            className=" self-center md:self-start"
          />
        </div>
        <div className="md:w-1/2 flex flex-col items-center px-4">
          <Image src={undraw_online_test_re_kyfx} width="100%" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
