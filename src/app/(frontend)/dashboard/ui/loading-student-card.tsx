
export function LoadingStudentCard() {
  return (
    <article className="border border-[var(--grey)] rounded-md flex-col flex animate-pulse">
      {/* Header Loading */}
      <header className="border-b border-[var(--grey)] flex items-center gap-3 p-3.5">
        <div className="flex items-center gap-2 mr-auto">
          <div className="relative">
            <div className="h-8 w-8 rounded-full bg-[var(--grey)]"></div>
          </div>
          <div className="space-y-2">
            <div className="h-4 w-24 bg-[var(--grey)] rounded"></div>
            <div className="h-3 w-16 bg-[var(--grey)] rounded"></div>
          </div>
        </div>
        <div className="h-5 w-5 bg-[var(--grey)] rounded-sm"></div>
      </header>

      {/* Content Loading */}
      <section className="flex flex-col h-full w-full p-3.5">
        {/* Grid Headers */}
        <div className="grid grid-cols-8 min-w-full gap-3 text-[#374151] font-normal text-xs">
          <div className="col-span-4 h-3 bg-[var(--grey)] rounded"></div>
          <div className="col-span-2 h-3 bg-[var(--grey)] rounded"></div>
          <div className="col-span-2 h-3 bg-[var(--grey)] rounded"></div>
        </div>

        {/* Subjects Loading - 3 placeholder rows */}
        <main className="flex flex-col mb-auto gap-4 mt-4">
          {[...Array(3)].map((_, idx) => (
            <div key={idx} className="grid grid-cols-8 gap-3 min-w-full">
              <div className="col-span-4 flex items-center gap-1.5">
                <div className="h-5 w-5 bg-[var(--grey)] rounded-full"></div>
                <div className="h-4 w-16 bg-[var(--grey)] rounded"></div>
              </div>
              <div className="col-span-2 h-6 bg-[var(--grey)] rounded-sm mx-auto w-full"></div>
              <div className="col-span-2 h-6 bg-[var(--grey)] rounded-sm mx-auto w-full"></div>
            </div>
          ))}
        </main>

        {/* Button Loading */}
        <div className="mt-5 h-8 w-full bg-[var(--grey)] rounded-lg"></div>
      </section>
    </article>
  )
}