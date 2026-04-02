import Header from "@/app/components/Header";

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="px-6 sm:px-12">
      <Header />
      <section>{children}</section>
    </div>
  );
}
