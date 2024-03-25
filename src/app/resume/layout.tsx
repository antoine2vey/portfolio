import Header from "@/app/components/Header"

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header /> 
      <section>{children}</section>
    </>
  )
}