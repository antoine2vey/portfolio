import Header from "@/components/Header";
import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_withHeader")({
  component: WithHeaderLayout,
});

function WithHeaderLayout() {
  return (
    <div className="px-6 sm:px-12">
      <Header />
      <section>
        <Outlet />
      </section>
    </div>
  );
}
