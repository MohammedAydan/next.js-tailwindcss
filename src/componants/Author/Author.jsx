import Card from "./Card/Card";

const Author = () => {
  return (
    <section id="author">
      <div className="container px-5 mx-auto my-32 py-6 text-center">
        <h2 className="font-bold text-4xl">
          “Best practices” don’t actually work.
        </h2>

        <p className="mt-8 max-w-5xl mx-auto">
          I’ve written a few thousand words on why traditional “semantic class
          names” are the reason CSS is hard to maintain, but the truth is you’re
          never going to believe me until you actually try it. If you can
          suppress the urge to retch long enough to give it a chance, I really
          think you’ll wonder how you ever worked with CSS any other way.
        </p>

        <div className="mt-10 flex flex-col md:flex-row space-x-0 md:space-x-5 space-y-9 md:space-y-0">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </section>
  );
};

export default Author;
