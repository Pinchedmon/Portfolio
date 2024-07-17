import Image from "next/image";

import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { Link } from "@/lib/navigation";
const Nav = () => {
  const t = useTranslations("Nav");
  const name = usePathname();

  return (
    <nav className="border inset-0  justify-center border-white/10 fixed w-[98%] mx-auto md:w-[1024px] top-[4px] md:top-[20px]   flex px-[30px]  items-center text-white bg-black/20 text-base z-20 h-[80px] backdrop-blur-xl rounded-3xl">
      <div className=" flex justify-between gap-4 items-center">
        <Image
          src="/ava.jpeg"
          alt="ava"
          width={40}
          height={40}
          className="rounded-3xl "
        />
        <p>{t("me")}</p>
      </div>

      <div className="ml-auto gap-6 flex font-light">
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
