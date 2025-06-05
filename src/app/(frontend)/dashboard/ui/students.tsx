import { Icons } from '@/components/icons'
import React from 'react'
import { students } from '../mock-data'
import { Buttons } from '@/components/buttons'

export default function Students() {
  return (
    <article className=" col-span-7 lg:col-span-4 xl:col-span-5 border border-[var(--gray)] rounded-lg shadow-[var(--box-shadow)] p-5 flex flex-col gap-[26px]">
      <main className=" flex flex-col gap-[26px]">
        <header className="flex items-center h-[26px] justify-between">
          <div className=" flex items-center gap-1.5 text-base font-semibold text-[var(--black)]">
            Students
            <span className=" py-0.5 px-1 rounded-[20px] bg-[var(--gray)] text-xs font-medium">
              ({students?.length})
            </span>
          </div>
          <Buttons.primary text="View All" />
        </header>
        <section className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-[18px] sm:gap-5">
          {students.map((prop) => (
            <article
              key={prop.name}
              className="border border-[var(--grey)] rounded-md flex-col flex"
            >
              <header className="border-b border-[var(--grey)] flex items-center gap-3 p-3.5">
                <div className="flex items-center gap-2 mr-auto">
                  <div className=" relative">
                    <img src={prop.image} alt="" className="h-8 w-8" />
                    {prop.online && (
                      <div className="absolute border-2 border-white h-3 w-3 rounded-full bg-[var(--success)] bottom-0 -right-0.5" />
                    )}
                  </div>{' '}
                  <div>
                    <div className=" text-sm font-medium text-[var(--black)]">{prop.name}</div>
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
                      <div className=" col-span-4 flex items-center gap-1.5 text-sm font-normal text-[var(--black)]">
                        <subject.Icon /> {subject.name}
                      </div>
                      <div className="col-span-2 text-xs font-medium text-[var(--black)] mx-auto px-1 py-0.5 rounded-sm bg-[var(--gray)] flex items-center justify-center">
                        {subject.lessons}
                      </div>
                      <div
                        className={`col-span-2 text-xs font-medium  mx-auto px-1 py-0.5 rounded-sm  flex items-center justify-center ${
                          subject.score < 51
                            ? 'bg-[var(--warning-bg)] text-[var(--warning-text)]'
                            : 'text-[var(--success)] bg-[#E2FBE8]'
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
          ))}
        </section>
      </main>
      <footer className="mt-auto p-3 rounded-md flex max-sm:flex-col gap-2 bg-[var(--passess-bg)]">
        <section className="flex gap-2 mr-auto">
          <div>
            <Icons.passess className="mt-[2.5px]" />
          </div>
          <div>
            <div className=" text-xs font-semibold text-[var(--passess-text)]">Passes</div>
            <div className=" text-xs font-normal text-[var(--passess-text)]">
              Manage your existing passes, renew them, or buy new ones.
            </div>
          </div>
        </section>
        <Buttons.primary text="Class Passes" isArrow style={{ marginLeft: 'auto' }} />
      </footer>
    </article>
  )
}
