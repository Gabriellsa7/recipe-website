import React from "react";
import { BsCupHot } from "react-icons/bs";

import { IoLogoYoutube } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

export default function Footer() {
  return (
    <main className="flex w-screen justify-around bg-yellow-400 h-60 items-center mt-32 rounded-t-3xl">
      <section className="flex gap-5 items-center ">
        <BsCupHot size={34} />
        <h1 className="text-4xl font-bold text-slate-900">
          Delights at the table
        </h1>
      </section>
      <section className="flex flex-col gap-4">
        <h3 className="text-2xl font-medium text-slate-900">
          Recipe site social media
        </h3>
        <div className="flex gap-4 items-center">
          <IoLogoYoutube size={28} />
          <FaXTwitter size={28} />
          <FaPinterest size={28} />
          <FaInstagram size={28} />
        </div>
      </section>
    </main>
  );
}
