import { useTranslations } from "next-intl";
import Link from "next/link";

const Home = () => {
  const t = useTranslations("HomePage");
  return (
    <section className=" text-white z-10 gap-[20px] flex w-full h-[86vh]  md:h-[450px] ">
      <div className="border border-white/10 bg-black/60 flex-col flex  md:basis-2/3 rounded-3xl p-[40px]">
        <h1 className="mt-auto font-semibold text-3xl md:text-[32px]">
          {t("title1")} <br /> {t("title2")} <br />
          {t("title3")}
        </h1>
        <p className="font-light text-2xl  md:text-[24px]   my-[20px]">
          {t("subtitle1")} <br /> {t("subtitle2")}
        </p>
        <div className="flex gap-2">
          <Link
            className="bg-orange text-lg px-[20px] py-[18px] md:px-[12px] md:text-base md:py-[6px] rounded-[30px] md:rounded-3xl"
            href="#contact"
          >
            {t("link")}
          </Link>
          <div className="bg-white md:w-[36px] rounded-[100%] md:rounded-3xl"></div>
          <div className="bg-white   md:w-[36px] rounded-[100%] md:rounded-3xl"></div>
        </div>
      </div>
      <div className="hidden md:block border border-white/10 bg-black/20 basis-1/3 rounded-3xl"></div>
    </section>
  );
};

export default Home;
