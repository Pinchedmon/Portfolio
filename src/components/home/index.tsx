import Link from "next/link";

const Home = () => {
  return (
    <section className=" text-white z-10 gap-[20px] flex w-full h-[450px] ">
      <div className="border border-white/10 bg-black/60 flex-col flex basis-2/3 rounded-3xl p-[40px]">
        <h1 className="mt-auto font-semibold text-[32px]">
          Hey, I`m Alexey, a frontend <br /> developer with 2 years of <br />
          experience
        </h1>
        <p className="font-light text-[24px] my-[20px]">
          I take great care to ensure that the product <br /> has no glitches
          and the quality is complete
        </p>
        <div className="flex gap-2">
          <Link
            className="bg-orange px-[12px] py-[6px] rounded-3xl"
            href="#contact"
          >
            Contact me
          </Link>
          <div className="bg-white w-[36px] rounded-3xl "></div>
          <div className="bg-white w-[36px] rounded-3xl "></div>
        </div>
      </div>
      <div className="border border-white/10 bg-black/20 basis-1/3 rounded-3xl"></div>
    </section>
  );
};

export default Home;
