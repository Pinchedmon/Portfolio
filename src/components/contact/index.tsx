import Link from "next/link";

const Contact = () => {
  return (
    <section className=" text-white z-10 gap-[20px] flex w-full h-[450px] ">
      <div className="border border-white/10 bg-black/20 basis-1/3 rounded-3xl"></div>
      <div className="border border-white/10 bg-black/60 flex-col  basis-2/3 rounded-3xl p-[40px]">
        <h1 className="font-semibold text-[32px]">Contacts</h1>
        <div className="flex gap-4 text-[18px]">
          <p className="font-light  my-[20px]">github:</p>
          <Link
            href="https://github.com/Pinchedmon"
            className="font-light bg-orange px-3 rounded-3xl text-[18px] my-[20px]"
          >
            open
          </Link>
        </div>
        <div className="flex gap-4 text-[18px]">
          <p className="font-light">email:</p>
          <Link
            href="mailto:temnikovalx@gmail.com"
            type="email"
            className="font-light bg-orange px-3 rounded-3xl text-[18px] mb-[20px]"
          >
            temnikovalx@gmail.com
          </Link>
        </div>
        <div className="flex gap-4 text-[18px]">
          <p className="font-light">telegram:</p>
          <Link
            href="https://webk.telegram.org/#@Pinchedmon"
            className="font-light bg-orange px-3 rounded-3xl text-[18px] mb-[20px]"
          >
            @pinchedmon
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
