"use client";
import { Icons } from "@/components/icons";
import React from "react";
import { student } from "../mock-data";

export default function Students({ prop }: { prop: student }) {
  return (
    <article className="border border-[var(--grey)] rounded-md flex-col flex">
      <header className="border-b border-[var(--grey)] flex items-center gap-3 p-3.5">
        <div className="flex items-center gap-2 mr-auto">
          <div className=" relative">
            <img
              src={prop.image}
              alt=""
              className="h-8 w-8 bg-[var(--gray)] rounded-full"
            />
            {prop.online && (
              <div className="absolute border-2 border-white h-3 w-3 rounded-full bg-[var(--success)] bottom-0 -right-0.5" />
            )}
          </div>{" "}
          <div>
            <div className=" text-sm font-medium text-[var(--black)]">
              {prop.name}
            </div>
            <div className=" text-xs font-normal text-[#374151]">
              {prop.subjects?.length} Subjects
            </div>
          </div>
        </div>
        <Icons.edit className=" cursor-pointer" />
      </header>
      <section className="flex flex-col h-full w-full p-3.5">
        <div className="grid grid-cols-8 min-w-full gap-3 text-[#374151] font-normal text-xs">
          <div className=" col-span-4">Subject</div>
          <div className=" col-span-2 text-center">Lessons</div>
          <div className=" col-span-2 text-center">Score</div>
        </div>
        <main className="flex flex-col mb-auto gap-4 mt-4">
          {prop.subjects.map((subject, idx) => (
            <div key={idx} className="grid grid-cols-8 gap-3 min-w-full">
              <div className=" col-span-4 flex items-center gap-1.5 text-sm font-normal capitalize text-[var(--black)]">
                {subject.name == "grammer" ? (
                  <Icons.grammer />
                ) : subject.name == "math" ? (
                  <Icons.math />
                ) : (
                  <Icons.science />
                )}{" "}
                {subject.name}
              </div>
              <div className="col-span-2 text-xs font-medium text-[var(--black)] mx-auto px-1 py-0.5 rounded-sm bg-[var(--gray)] flex items-center justify-center">
                {subject.lessons}
              </div>
              <div
                className={`col-span-2 text-xs font-medium  mx-auto px-1 py-0.5 rounded-sm  flex items-center justify-center ${
                  subject.score < 51
                    ? "bg-[var(--warning-bg)] text-[var(--warning-text)]"
                    : "text-[var(--success)] bg-[#E2FBE8]"
                }`}
              >
                {subject.score}%
              </div>
            </div>
          ))}
        </main>
        <button className="text-[var(--black)] mt-5 text-sm font-medium h-8 w-full border rounded-lg border-[var(--grey)] cursor-pointer focus:outline-0">
          View Details
        </button>
      </section>
    </article>
  );
}
