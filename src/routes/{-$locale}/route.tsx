import { parseLocaleParam } from "@/lib/i18n";
import { createFileRoute, notFound } from "@tanstack/react-router";

export const Route = createFileRoute("/{-$locale}")({
  beforeLoad: ({ params }) => {
    if (!parseLocaleParam(params.locale)) throw notFound();
  },
});
