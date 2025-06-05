"use client";
import { Icons } from "@/components/icons";
import React, { useEffect, useState } from "react";
import { student } from "../mock-data";
import { Buttons } from "@/components/buttons";
import axios from "axios";
import { LoadingStudentCard } from "./loading-student-card";
import Student from "./student";

export default function Students() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/api/students")
      .then((res) => {
        setData(res.data.docs);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <article className=" col-span-7 lg:col-span-4 xl:col-span-5 border border-[var(--gray)] rounded-lg shadow-[var(--box-shadow)] p-5 flex flex-col gap-[26px]">
      <main className=" flex flex-col gap-[26px]">
        <header className="flex items-center h-[26px] justify-between">
          <div className=" flex items-center gap-1.5 text-base font-semibold text-[var(--black)]">
            Students
            <span className=" py-0.5 px-1 rounded-[20px] bg-[var(--gray)] text-xs font-medium">
              ({data?.length})
            </span>
          </div>
          <Buttons.primary text="View All" />
        </header>
        <section className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-[18px] sm:gap-5">
          {isLoading
            ? [...Array(4)].map((_, i) => <LoadingStudentCard key={i} />)
            : data.map((prop: student) => (
                <Student key={prop.name} prop={prop} />
              ))}
        </section>
      </main>
      <footer className="mt-auto p-3 rounded-md flex max-sm:flex-col gap-2 bg-[var(--passess-bg)]">
        <section className="flex gap-2 mr-auto">
          <div>
            <Icons.passess className="mt-[2.5px]" />
          </div>
          <div>
            <div className=" text-xs font-semibold text-[var(--passess-text)]">
              Passes
            </div>
            <div className=" text-xs font-normal text-[var(--passess-text)]">
              Manage your existing passes, renew them, or buy new ones.
            </div>
          </div>
        </section>
        <Buttons.primary
          text="Class Passes"
          isArrow
          style={{ marginLeft: "auto" }}
        />
      </footer>
    </article>
  );
}
