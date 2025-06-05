export function LoadingActivityCard() {
  return (
    <main className="flex gap-2 animate-pulse">
      <div className="relative h-6 min-w-6">
        <div className="h-6 w-6 rounded-full bg-[var(--gray)]"></div>
      </div>

      <aside className="flex flex-col gap-1 w-full relative">
        <header className="flex items-center gap-1.5">
          <div className="h-4 w-24 bg-[var(--gray)] rounded"></div>
          <div className="h-3 w-3 bg-[var(--gray)] rounded-full"></div>
          <div className="h-3 w-16 bg-[var(--gray)] rounded mr-auto"></div>
          <div className="h-4 w-4 bg-[var(--gray)] rounded"></div>
        </header>

        <section className="pr-7 space-y-1">
          <div className="h-3 w-full bg-[var(--gray)] rounded"></div>
          <div className="h-3 w-3/4 bg-[var(--gray)] rounded"></div>
        </section>

        <div className="h-8 w-24 bg-[var(--gray)] rounded mt-2"></div>
        <div className="absolute -left-5 bottom-0 h-[calc(100%-32px)] w-0.5 bg-[#EAECF0]"></div>
      </aside>
    </main>
  )
}