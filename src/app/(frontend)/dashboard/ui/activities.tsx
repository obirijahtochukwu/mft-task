"use client";
import { Buttons } from "@/components/buttons";
import { HighlightQuotedText } from "@/components/highlight-text";
import { Icons } from "@/components/icons";
import React, { useEffect, useState } from "react";
import { students } from "../mock-data";
import axios from "axios";
export default function Activities() {
  const [likes, setLikes] = useState([""]);

  const handleLike = (student: string) => {
    const isLiked = likes.find((name: string) => name == student);
    const removeLike = likes.filter((name: string) => name != student);
    if (isLiked) {
      setLikes(removeLike);
    } else {
      setLikes([...likes, student]);
    }
  };

  useEffect(() => {
    axios
      .get(
        "https://mft-api-hrl5-pzj53r1qb-obirijahtochukwus-projects.vercel.app/api/students/6840cf17179621b2c390ccf5?depth=2&draft=false&locale=undefined"
      )
      .then((r) => console.log(r))
      .catch((r) => console.log(r));
  }, []);

  return (
    <article className="border h-full col-span-7 lg:col-span-3 xl:col-span-2 border-[var(--grey)] rounded-md overflow-hidden">
      <div className="p-5 bg-[var(--activity-bg)] border-b border-[var(--grey)] relative text-[var(--black)] text-base font-semibold overflow-hidden">
        Recent Activities
        <img
          src="/images/activity-avatar.png"
          alt=""
          className="h-24 w-40 absolute rotate-6 right-1 -bottom-3"
        />
      </div>
      <div className="flex flex-col p-5 gap-6">
        <section className="flex flex-col gap-5">
          {students.map((student, idx) => (
            <main key={student.name} className="flex gap-2">
              <div className="relative h-6 min-w-6">
                <img
                  src={student.image}
                  alt=""
                  className="h-6 min-w-6 rounded-full"
                />
                {student.online && (
                  <div className="absolute border-1 border-white h-2 w-2 rounded-full bg-[var(--success)] bottom-0 -right-0.5" />
                )}
              </div>
              <aside className="flex flex-col gap-1 w-full relative">
                <header className="flex items-center gap-1.5">
                  <div className=" text-sm font-semibold text-[var(--black)]">
                    {student.name}
                  </div>
                  <div className="text-xs font-normal text-[var(--activity-text)]">
                    •
                  </div>
                  <div className=" mr-auto text-xs font-normal text-[var(--activity-text)]">
                    {student.date}
                  </div>
                  <Icons.heart
                    onClick={() => handleLike(student.name)}
                    color={likes.includes(student.name) ? "#CA3A31" : ""}
                    className=" cursor-pointer"
                  />
                </header>
                <section className=" pr-7">
                  <HighlightQuotedText text={student.comment} />
                </section>
                {idx == 0 || (
                  <Buttons.primary text={idx == 2 ? "Message" : "View Score"} />
                )}
                <div className=" absolute -left-5 bottom-0 h-[calc(100%-32px)] w-0.5 bg-[#EAECF0]" />
              </aside>
            </main>
          ))}
        </section>
        <Buttons.primary text={"View All"} isArrow />
      </div>
    </article>
  );
}
