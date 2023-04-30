import Logo from "@/components/brand/Logo";
import machineImg from "@/assets/images/washing-machine.png";
import Image from "next/image";

const Landing = () => {
  return (
    <div className="h-screen text-center justify-center items-center px-2 sm:px-0">
      <section className="mt-10 sm:mt-40">
        <div className="flex items-center flex-wrap justify-center gap-2 sm:gap-4">
          <h1 className="text-4xl">Welcome to</h1>
          <Logo />
        </div>
        <p>We are one of the best laundry service networks in Nigeria</p>
      </section>
      <section className="flex justify-between inline-flex mt-0 sm:mt-10">
        <Image src={machineImg} alt="" height={200} className="m-auto" />
      </section>
      <section className=" flex justify-center flex-wrap items-center gap-4">
        <span className="font-bold p-2 bg-white text-black-400 rounded-lg">
          #N.B
        </span>
        <p className="text-slate-400">
          There will be no waiting list as our services would only be available
          to a select clientele within Enugu
        </p>
      </section>
    </div>
  );
};

export default Landing;
