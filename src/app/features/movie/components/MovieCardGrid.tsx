export const MovieCardGrid = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-6">
      {children}
    </section>
  )
}
