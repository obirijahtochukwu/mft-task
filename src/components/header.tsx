"use client";
import React, { useState } from "react";
import localFont from "next/font/local";
import { Icons } from "./icons";
import { pages } from "./mock-data";

const logoFont = localFont({
  src: "../../public/fonts/DrukWideBold.ttf",
  display: "swap",
  variable: "--font-logo",
});

export default function Header() {
  const [location, setLocation] = useState("dashboard");

  return (
    <>
      <article className=" px-5 flex gap-7 items-center h-[54px] sm:h-[62px] border-b border-[var(--gray)]">
        <section className="flex items-center gap-[22px]">
          <div
            className={`flex gap-[7.27px] items-center text-xl ${logoFont.className}`}
          >
            <img src="/images/logo.png" alt="" className="h-5 w-5" /> MFT
          </div>
          <div className="flex max-md:hidden items-center gap-2 h-8 w-52 rounded-lg border border-[var(--grey)] px-3">
            <Icons.search />
            <input
              type="text"
              placeholder="Search"
              className="h-full w-full bg-inherit focus:outline-0 text-sm font-normal"
            />
          </div>
        </section>
        {pages.map(({ name }) => (
          <div
            key={name}
            onClick={() => setLocation(name)}
            className={`${
              location == name ? "text-[var(--success)]" : "text-[var(--dark)]"
            } max-md:hidden capitalize h-full relative items-center text-sm font-semibold flex  cursor-pointer group hover:text-[var(--success)]`}
          >
            {name}{" "}
            <div
              className={`${
                location == name ? "w-full" : " w-0 "
              } absolute duration-300 bg-[var(--success)] h-1 bottom-0 left-1/2 -translate-x-1/2`}
            />
          </div>
        ))}
        <aside className="flex items-center ml-auto gap-[18px]">
          <div className="relative">
            <img src="/images/notification.png" alt="" className="h-4 w-4" />
            <div className="absolute border-3 border-white h-3 w-3 rounded-full bg-[var(--error)] -top-1.5 -right-1" />
          </div>
          <img src="/images/online-user.png" alt="" className="h-8 w-8" />
        </aside>
      </article>
      <footer className=" h-fit px-2 sm:hidden pb-2 w-full bg-white/85 fixed bottom-0 right-0 z-100 backdrop-blur-xs grid grid-cols-4 gap-2 justify-around border-t border-[#E5E5EA]">
        {pages.map(({ Icon, name }) => (
          <div
            key={name}
            className="flex items-center justify-center cursor-pointer h-14 hover:bg-[var(--light-green)] duration-300"
            onClick={() => setLocation(name)}
          >
            <Icon
              color={location == name ? "black" : "#8C8C8C"}
              className="w-5 h-5"
            />
          </div>
        ))}
      </footer>
      <aside
        className="flex items-center
       justify-center rounded-full w-8 h-8 cursor-pointer fixed bottom-8 right-8 bg-black max-sm:hidden drop-shadow-2xl z-10"
      >
        <Icons.question />
      </aside>
    </>
  );
}
