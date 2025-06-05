import React from "react";
import Welcome from "./ui/welcome";
import Students from "./ui/students";
import Activities from "./ui/activities";

export default function DashboardPage() {
  return (
    <article className="px-4 md:px-12 pb-20 sm:pb-24 flex flex-col gap-8 mt-6 sm:mt-5">
      <Welcome />
      <section className=" grid grid-cols-7  gap-[26px]">
        <Students />
        <Activities />
      </section>
    </article>
  );
}
