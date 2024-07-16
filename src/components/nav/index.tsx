import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="border border-white/10 fixed w-[1024px] top-[20px]   flex px-[30px]  items-center text-white bg-black/20 text-base z-20 h-[80px] backdrop-blur-xl rounded-3xl">
      <div className=" flex justify-between gap-4 items-center">
        <Image
          src="/ava.jpeg"
          alt="ava"
          width={40}
          height={40}
          className="rounded-3xl "
        />
        <p>Alexey Temnikov</p>
        <Select>
          <SelectTrigger className="w-[60px]">
            <SelectValue placeholder="En" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="en">En</SelectItem>
            <SelectItem value="ru">Ru</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="ml-auto gap-6 flex font-light">
        <Link href="#home">Home</Link>
        <Link href="#about">About</Link>
        <Link href="#works">Works</Link>
        <Link href="#contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Nav;
