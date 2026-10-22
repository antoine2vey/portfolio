import Subtitle from "@/components/Subtitle";
import Title from "@/components/Title";
import { localeFromParams, localizedPath } from "@/lib/i18n";
import { seo } from "@/lib/seo";
import { messages, useMessages } from "@/messages";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/{-$locale}/mentions-legales")({
  head: ({ params }) => {
    const locale = localeFromParams(params);
    const m = messages[locale].legal.seo;
    return seo({
      title: m.title,
      description: m.description,
      path: localizedPath("/mentions-legales", locale),
      noindex: true,
    });
  },
  component: Page,
});

function Page() {
  const m = useMessages().legal;
  return (
    <div className="container px-6 sm:px-12">
      <Title>{m.title}</Title>

      <section className="mt-10 mb-10">
        <Subtitle as="h3" className="mb-2">
          {m.publisher.heading}
        </Subtitle>
        <ul className="font-neue text-xl font-normal">
          {m.publisher.lines.map((line) => (
            <li key={line}>{line}</li>
          ))}
          <li>
            {m.publisher.contactLabel}{" "}
            <a href="mailto:antoine.2vey@gmail.com" className="underline">
              antoine.2vey@gmail.com
            </a>
          </li>
        </ul>
      </section>

      {m.sections.map((section) => (
        <section key={section.heading} className="mb-10">
          <Subtitle as="h3" className="mb-2">
            {section.heading}
          </Subtitle>
          <p className="font-neue text-xl">{section.text}</p>
        </section>
      ))}
    </div>
  );
}
