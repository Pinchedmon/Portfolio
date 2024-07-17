import Image from "next/image";

import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { Link } from "@/lib/navigation";
const Nav = () => {
  const t = useTranslations("Nav");
  const name = usePathname();

  return (
    <nav className="border border-white/10 fixed w-[1024px] top-[20px] text-3xl     flex px-[30px]  items-center text-white bg-black/20 md:text-base z-20 h-[100px] md:h-[80px] backdrop-blur-xl rounded-3xl">
      <div className=" flex justify-between gap-4 items-center">
        <Image
          src="/ava.jpeg"
          alt="ava"
          width={40}
          height={0}
          className="w-[60px] md:w-[40px] rounded-3xl "
        />
        <p>{t("me")}</p>
      </div>

      <div className="ml-auto gap-6  flex font-light">
        {name == "/en" ? (
          <Link href="/" locale="ru">
            ru
          </Link>
        ) : (
          <Link href="/" locale="en">
            en
          </Link>
        )}

        <div className="hidden md:flex  gap-6">
          <Link href="#home">{t("home")}</Link>
          <Link href="#about">{t("about")}</Link>
          <Link href="#works">{t("works")}</Link>
          <Link href="#contact">{t("contact")}</Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
