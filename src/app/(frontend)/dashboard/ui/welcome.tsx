import { Icons } from "@/components/icons";
import React from "react";

export default function Welcome() {
  return (
    <article className=" bg-[var(--light-green)] p-5 rounded-md relative max-sm:z-10 max-md:overflow-hidden">
      <section className="flex flex-col gap-4">
        <div>
          {" "}
          <div className=" text-lg font-semibold text-black">
            Good evening, Falguni!
          </div>
          <div className="text-xs sm:text-sm font-normal leading-5 text-[var(--light)]">
            See your students’ progress and today’s activities.
          </div>
        </div>
        <button className=" flex items-center h-8 bg-[var(--success)] text-white rounded-lg w-fit text-sm font-semibold px-3 gap-1 cursor-pointer">
          Students’ Progress <Icons.arrow />
        </button>
      </section>
      <img
        src="/images/welcome-avatar.png"
        alt=""
        className="h-20 md:hidden -z-10 w-32 absolute -right-7 -bottom-6"
      />
      <aside className=" max-md:hidden">
        <img
          src="/images/welcome-avatar.png"
          alt=""
          className="h-[120px] w-48 absolute right-3 bottom-0"
        />
        <img
          src="/images/Student 3.png"
          alt=""
          className="h-11 w-11 absolute right-[90px] bottom-20"
        />
        <img
          src="/images/Student 2.png"
          alt=""
          className="h-10 w-10 absolute right-14 bottom-2.5"
        />
        <img
          src="/images/gpt.png"
          alt=""
          className="h-[71px] w-[71px] absolute right-[126px] bottom-8"
        />
        <img
          src="/images/Student 2.png"
          alt=""
          className="h-10 w-10 absolute right-52 bottom-10"
        />
      </aside>
    </article>
  );
}
