"use client";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  AiOutlineClose,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FiArrowRightCircle } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { MdOutlinePhone, MdOutlineMail } from "react-icons/md";
import { digitalSeven, plusJakartaSans } from "./fonts";
import Speaker1 from "@/public/assets/images/speaker-1.svg";
import Speaker2 from "@/public/assets/images/speaker-2.svg";
import Speaker3 from "@/public/assets/images/speaker-3.svg";
import Speaker4 from "@/public/assets/images/speaker-4.svg";
import Tickets from "@/public/assets/images/ticket.svg";

type Countdown = {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
};

export default function Home() {
  const [countdown, setCountdown] = useState<Countdown>({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const calculateCountdown = (endDate: Date) => {
    const diffInSeconds = Math.floor((endDate.getTime() - Date.now()) / 1000);

    const days = Math.floor(diffInSeconds / 86400);
    const hours = Math.floor((diffInSeconds % 86400) / 3600);
    const minutes = Math.floor((diffInSeconds % 3600) / 60);
    const seconds = diffInSeconds % 60;

    const paddedDays = days.toString().padStart(2, "0");
    const paddedHours = hours.toString().padStart(2, "0");
    const paddedMinutes = minutes.toString().padStart(2, "0");
    const paddedSeconds = seconds.toString().padStart(2, "0");

    if (diffInSeconds <= 0) {
      setCountdown({
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      });
    }

    setCountdown({
      days: paddedDays,
      hours: paddedHours,
      minutes: paddedMinutes,
      seconds: paddedSeconds,
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      calculateCountdown(new Date("2024-05-24"));
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <main className="container mx-auto">
      <nav className="bg-black fixed w-full z-20 top-0 start-0 border-b border-gray-700">
        <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto px-4 py-4">
          <Link href="/" className="flex items-center">
            <div className="hidden md:block">
              <Image
                src="/assets/images/grama-logo.svg"
                width={80}
                height={60}
                alt="MSSN Grama Logo"
              />
            </div>
            <div className="block md:hidden">
              <Image
                src="/assets/images/grama-logo.svg"
                width={50}
                height={40}
                alt="MSSN Grama Logo"
              />
            </div>
            <span className="self-center w-10 font-extrabold text-primary text-base/4 md:text-2xl/5">
              GRAMA LAGOS
            </span>
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="bg-primary hover:bg-primary-600 font-bold rounded-2xl text-black md:text-xl text-sm leading-6 px-6 py-2.5 text-center"
            >
              Register
            </button>
          </div>
        </div>
      </nav>

      <section className="bg-auto bg-no-repeat bg-hero bg-black/80 bg-blend-multiply">
        <div className="px-4 mx-auto max-w-screen-xl text-center pt-32 pb-16 lg:pt-52 lg:pb-36">
          <div className="bg-primary/10 max-w-2xl backdrop-blur-2xl mx-auto shadow-inner-hero px-12 py-10">
            <div className="flex items-center justify-center">
              <div className="flex space-x-4 items-center text-primary">
                <div className="flex-col  justify-center">
                  <div
                    className={`${digitalSeven.className} text-5xl md:text-9xl`}
                  >
                    {countdown.days}
                  </div>
                  <div className="text-xs md:text-base text-white">Days</div>
                </div>
                <div className="self-start text-3xl md:text-8xl mt-1 md:mt-3">
                  :
                </div>
                <div className="flex-col  justify-center">
                  <div
                    className={`${digitalSeven.className} text-5xl md:text-9xl`}
                  >
                    {countdown.hours}
                  </div>
                  <div className="text-xs md:text-base text-white">Hours</div>
                </div>
                <div className="self-start text-3xl md:text-8xl mt-1 md:mt-3">
                  :
                </div>
                <div className="flex-col  justify-center">
                  <div
                    className={`${digitalSeven.className} text-5xl md:text-9xl`}
                  >
                    {countdown.minutes}
                  </div>
                  <div className="text-xs md:text-base text-white">Minutes</div>
                </div>
                <div className="self-start text-3xl md:text-8xl mt-1 md:mt-3">
                  :
                </div>
                <div className="flex-col  justify-center">
                  <div
                    className={`${digitalSeven.className} text-5xl md:text-9xl`}
                  >
                    {countdown.seconds}
                  </div>
                  <div className="text-xs md:text-base text-white">Seconds</div>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <p className="text-white text-sm/4 md:text-xl/4 tracking-widest pt-6 md:pt-10 font-semibold">
              Are You Ready To Attend The GRAMA CONFERENCE’24
            </p>
          </div>
          <div className="flex items-center space-x-3 justify-center mt-10">
            <div className="bg-black shadow-md shadow-primary px-5 py-3 md:px-8 md:py-4">
              <p className="text-primary text-xs md:text-base/4 font-bold tracking-wider">
                24TH OF MAY 2024
              </p>
            </div>
            <div className="bg-black shadow-md shadow-primary px-5 py-3 md:px-8 md:py-4">
              <p className="text-primary text-xs md:text-base/4 font-bold tracking-wider">
                Tayo Aderinokun Hall, Unilag
              </p>
            </div>
          </div>

          <div className="mt-10">
            <Button
              color="primary"
              size="lg"
              radius="md"
              className="text-black md:text-xl/4 text-sm tracking-wide font-extrabold py-4 px-6"
              endContent={
                <FiArrowRightCircle className="md:w-6 md:h-6 w-4 h-4" />
              }
            >
              Get Your Tickets
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-content bg-primary/50 bg-blend-multiply drop-shadow-xl">
        <div className="w-full h-full bg-[#0C0D0E]/95 bg-blend-multiply py-10 md:py-16">
          <div className="max-w-screen-xl mx-auto px-4 md:px-6">
            <div className="flex items-center space-x-4 max-w-sm justify-center mx-auto">
              <div className="">
                <div className="flex items-center w-28 md:w-44">
                  <div className="hidden md:block">
                    <Image
                      src="/assets/images/grama-logo.svg"
                      width={80}
                      height={60}
                      alt="MSSN Grama Logo"
                    />
                  </div>
                  <div className="block md:hidden">
                    <Image
                      src="/assets/images/grama-logo.svg"
                      width={50}
                      height={40}
                      alt="MSSN Grama Logo"
                    />
                  </div>
                  <span className="w-10 font-extrabold text-primary text-base/4 md:text-2xl/5">
                    GRAMA LAGOS
                  </span>
                </div>
              </div>
              <div className="">
                <AiOutlineClose className="w-4 h-4 text-primary" />
              </div>
              <div className="">
                <Image
                  src="/assets/images/mssn@70.svg"
                  width={120}
                  height={70}
                  alt="MSSN @ 70 Logo"
                />
              </div>
            </div>
            <div className="py-7 md:py-14">
              <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row items-center">
                <div className="">
                  <div className="block md:hidden">
                    <Image
                      src="/assets/images/professionals.svg"
                      width={533}
                      height={300}
                      alt="GRAMA 2024"
                    />
                  </div>
                  <div className="hidden md:block">
                    <Image
                      src="/assets/images/professionals.svg"
                      width={533}
                      height={690}
                      alt="GRAMA 2024"
                    />
                  </div>
                </div>
                <div className="bg-black self-center max-w-2xl py-6 px-8 md:px-20 md:py-16">
                  <div className="md:space-y-6 space-y-4">
                    <div className="">
                      <h4 className="text-primary text-base/5 md:text-xl/5 tracking-wider font-extrabold">
                        About GRAMA Conference Twenty’ 24
                      </h4>
                    </div>
                    <div className="">
                      <p
                        className={`${plusJakartaSans.className} text-white md:text-base/6 font-normal text-sm/6 tracking-normal max-w-md`}
                      >
                        The GRAMA Conference is a professional focused
                        conference For muslim graduates Under the MSSN LSAU ,
                        That gathers Young Adults Around Lagos For an educative,
                        informative and Networking Session, to foster knowledge
                        sharing and capacity building, aiming to strengthen The
                        professional workspace amongst it Members.
                      </p>
                    </div>
                    <div className="text-center md:text-start">
                      <Button
                        color="primary"
                        size="lg"
                        radius="md"
                        className="text-black md:text-lg/4 text-sm tracking-wide font-extrabold py-3 px-5"
                        endContent={
                          <FiArrowRightCircle className="md:w-6 md:h-6 w-4 h-4" />
                        }
                      >
                        Reserve Seat
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-primary py-4 md:py-8 mt-6 md:mt-12">
            <div className="space-x-3 md:space-y-5 text-black text-center max-w-2xl mx-auto">
              <h3 className="md:text-4xl/6 text-xl/6 tracking-wider font-extrabold">
                Conference Highlights
              </h3>
              <p className="capitalize text-xs/5 md:text-base/5 font-normal px-4 md:px-0 tracking-wide">
                The conference aims to equip participants with all-around
                enriching experiences, combining educational sessions,
                networking opportunities and lots more
              </p>
            </div>
          </div>
          <div className="max-w-screen-2xl mx-auto px-6 py-8 md:px-12 md:py-16">
            <div className="pt-4 pb-10 md:pt-8 md:pb-16">
              <h4 className="text-primary text-center md:text-3xl/6 text-xl/6 font-extrabold tracking-wider">
                Event Speakers
              </h4>
            </div>
            <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-12 mx-auto">
              <div className="space-y-2 md:space-y-4">
                <div className="">
                  <Image src={Speaker1} className="mx-auto" alt="Speaker 1" />
                </div>
                <div className="text-center space-y-1">
                  <h6 className="md:text-2xl/5 text-base/5 font-extrabold text-white tracking-widest">
                    MUSTAPHA KELANI
                  </h6>
                  <p className="text-primary text-xs/4 md:text-base/4 font-normal tracking-normal">
                    Group Head of HR at Dentsu Nigeria
                  </p>
                </div>
              </div>
              <div className="space-y-2 md:space-y-4">
                <div className="">
                  <Image src={Speaker2} className="mx-auto" alt="Speaker 2" />
                </div>
                <div className="text-center space-y-1">
                  <h6 className="md:text-2xl/5 text-base/5 font-extrabold text-white tracking-wide">
                    ABDUL-LATEEF ADEDEJI
                  </h6>
                  <p className="text-primary text-xs/4 md:text-base/4 font-normal tracking-normal">
                    The Progressive Teacher Expertise
                  </p>
                </div>
              </div>
              <div className="space-y-2 md:space-y-4">
                <div className="">
                  <Image src={Speaker3} className="mx-auto" alt="Speaker 3" />
                </div>
                <div className="text-center space-y-1">
                  <h6 className="md:text-2xl/5 text-base/5 font-extrabold text-white tracking-wide">
                    RILIWAN AKEYEWALE
                  </h6>
                  <p className="text-primary text-xs/4 md:text-base/4 font-normal tracking-normal">
                    Founder, TechPlan Africa
                  </p>
                </div>
              </div>
              <div className="space-y-2 md:space-y-4">
                <div className="">
                  <Image src={Speaker4} className="mx-auto" alt="Speaker 4" />
                </div>
                <div className="text-center space-y-1">
                  <h6 className="md:text-2xl/5 text-base/5 font-extrabold text-white tracking-wide">
                    AZEEZAH MUSE-SADIQ
                  </h6>
                  <p className="text-primary text-xs/4 md:text-base/4 font-normal tracking-normal">
                    Partner, Banwo & Ighodalo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-8 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-20 items-center">
            <div className="">
              <div className="space-y-4 md:space-y-6">
                <div className="text-primary">
                  <h3 className="font-extrabold text-2xl md:text-5xl max-w-sm tracking-normal">
                    Get your ticket, do not miss out!
                  </h3>
                </div>
                <div className="max-w-md space-y-2 md:space-y-4">
                  <p className="text-white text-sm/7 md:text-lg/7 font-medium tracking-wide">
                    Lorem ipsum dolor sit amet consectetur. Dui sed sed mattis
                    id elit. Morbi pharetra sagittis non massa iaculis neque
                    cras aliquet. At vulputate vomsan velit.
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-primary text-sm/6 md:text-lg/6 tracking-wide font-extrabold">
                      Early bird - N 2000
                    </p>
                    <p className="text-primary text-sm/6 md:text-lg/6 tracking-wide font-extrabold">
                      Regular - N2,500
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8 md:mt-16">
                <Button
                  color="primary"
                  size="lg"
                  radius="md"
                  className="text-black md:text-sm/4 text-xs tracking-wide font-extrabold py-1 px-6"
                  endContent={
                    <FiArrowRightCircle className="md:w-6 md:h-6 w-4 h-4" />
                  }
                >
                  Buy Ticket
                </Button>
              </div>
            </div>
            <div className="">
              <Image src={Tickets} alt="Tickets GRAMA 2024" />
            </div>
          </div>
        </div>
      </section>

      <footer className="">
        <div className="relative z-0 h-[480px]">
          <div className="absolute z-0 w-full h-full bg-[#1C1909] [clip-path:polygon(0%_0%,_100%_0%,_100%_100%)]"></div>
          <div className="absolute z-0 w-full h-full bg-[#2E2802] [clip-path:polygon(0%_0%,_0%_100%,_100%_100%)]"></div>
          <footer className="bg-transparent absolute z-50 w-full h-full px-4 md:px-12 py-10 lg:py-20">
            <div className="mx-auto w-full max-w-screen-xl">
              <div className="grid grid-cols-2 gap-4 items-center px-4 md:px-6 sm:gap-6 sm:grid-cols-3">
                <div className="space-y-4 md:space-y-6">
                  <div className="space-y-3 md:space-y-5">
                    <div className="flex items-center w-28 md:w-44">
                      <div className="hidden md:block">
                        <Image
                          src="/assets/images/grama-logo.svg"
                          width={50}
                          height={30}
                          alt="MSSN Grama Logo"
                        />
                      </div>
                      <div className="block md:hidden">
                        <Image
                          src="/assets/images/grama-logo.svg"
                          width={35}
                          height={25}
                          alt="MSSN Grama Logo"
                        />
                      </div>
                      <span className="w-10 font-extrabold text-primary text-sm/4 md:text-2xl/7">
                        GRAMA LAGOS
                      </span>
                    </div>
                    <div className="w-32 md:w-52">
                      <h5 className="text-white md:text-2xl text-lg/5 font-extrabold tracking-wide">
                        Let’s Work Together
                      </h5>
                    </div>
                    <div className="max-w-xs">
                      <p
                        className={`${plusJakartaSans.className} text-white text-sm/6 font-normal md:text-lg/6`}
                      >
                        For Sponsorship and Advert Placement Please Reach Out to
                        us
                      </p>
                    </div>
                  </div>
                  <div className="">
                    <Button
                      color="primary"
                      radius="full"
                      className="text-black md:text-lg/4 text-sm tracking-wide font-extrabold py-0.5 px-8"
                    >
                      Contact Now
                    </Button>
                  </div>
                </div>
                <div className="space-y-3 md:space-y-5">
                  <div className="text-white">
                    <h4 className="text-lg/6 md:text-2xl/6 font-extrabold tracking-widest">
                      Contact Us
                    </h4>
                  </div>
                  <div className="flex items-center space-x-2 md:space-x-4">
                    <div className="">
                      <MdOutlinePhone className="text-primary w-5 h-5 md:w-7 md:h-7" />
                    </div>
                    <div className="text-white">
                      <p
                        className={`${plusJakartaSans.className} text-sm md:text-lg/6 font-medium tracking-wide`}
                      >
                        0813 346 5044
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 md:space-x-4">
                    <div className="">
                      <MdOutlineMail className="text-primary w-5 h-5 md:w-7 md:h-7" />
                    </div>
                    <div className="text-white">
                      <p
                        className={`${plusJakartaSans.className} text-sm md:text-lg/6 font-medium tracking-wide`}
                      >
                        grama@mssnlagos.net
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-2 md:space-y-4">
                  <div className="text-white">
                    <h4 className="text-lg/6 md:text-2xl/6 font-extrabold tracking-widest">
                      Social Media
                    </h4>
                  </div>
                  <div className="flex items-center space-x-2 md:space-x-4">
                    <div className="flex justify-center items-center w-5 h-5 bg-white rounded-full md:w-7 md:h-7">
                      <AiOutlineInstagram className="text-black w-3 h-3 md:w-5 md:h-5" />
                    </div>
                    <div className="text-primary">
                      <Link href="/" className="text-sm md:text-xl/6 font-extrabold tracking-wide">
                        /Grama lagos
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 md:space-x-4">
                    <div className="flex justify-center items-center w-5 h-5 bg-white rounded-full md:w-7 md:h-7">
                      <AiOutlineTwitter className="text-black w-3 h-3 md:w-5 md:h-5" />
                    </div>
                    <div className="text-primary">
                      <Link href="/" className="text-sm md:text-xl/6 font-extrabold tracking-wide">
                        /Grama lagos
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 md:space-x-4">
                    <div className="flex justify-center items-center w-5 h-5 bg-white rounded-full md:w-7 md:h-7">
                      <FaFacebookF className="text-black w-3 h-3 md:w-5 md:h-5" />
                    </div>
                    <div className="text-primary">
                      <Link href="/" className="text-sm md:text-xl/6 font-extrabold tracking-wide">
                        /Grama lagos
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="border-primary sm:mx-auto mb-2 mt-6 md:mt-10" />
              <div className="flex justify-end">
                <span className="text-sm text-primary text-center md:text-right">
                  Copyright @2024
                  <Link href="/" className="hover:underline">
                    GRAMA LAGOS
                  </Link>
                </span>
              </div>
            </div>
          </footer>
        </div>
      </footer>
    </main>
  );
}
