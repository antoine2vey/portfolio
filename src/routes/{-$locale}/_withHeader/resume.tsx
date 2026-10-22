import Subtitle from "@/components/Subtitle";
import Title from "@/components/Title";
import { localeFromParams } from "@/lib/i18n";
import { seo } from "@/lib/seo";
import { messages, useMessages } from "@/messages";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/{-$locale}/_withHeader/resume")({
  head: ({ params }) => {
    const locale = localeFromParams(params);
    const m = messages[locale].resume.seo;
    return seo({
      title: m.title,
      description: m.description,
      locale,
      path: "/resume",
      openGraph: {
        title: m.socialTitle,
        description: m.socialDescription,
      },
    });
  },
  component: Page,
});

function Page() {
  const m = useMessages().resume;
  return (
    <div className="sm:max-w-[80%]">
      <Title>{m.title}</Title>

      <section className="mt-10 mb-16">
        <Subtitle className="mb-6">{m.headings.experiences}</Subtitle>
        <div className="space-y-10">
          {m.experiences.map((exp) => (
            <div key={exp.company} className="border-t border-current pt-5">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                <h3 className="font-parnaso text-2xl sm:text-3xl">
                  {exp.title}
                </h3>
                <span className="font-neue text-sm uppercase tracking-wider text-neutral-500">
                  {exp.period}
                </span>
              </div>
              <p className="font-neue text-lg font-medium">
                {exp.company}{" "}
                <span className="text-neutral-500 font-normal">
                  · {exp.location}
                </span>
              </p>
              <p className="font-neue text-base text-neutral-600 dark:text-neutral-400 mt-2 leading-relaxed">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-3 mb-3">
                {exp.techs.map((tech) => (
                  <span
                    key={tech}
                    className="font-neue text-xs uppercase tracking-wider border border-current px-2 py-0.5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <ul className="font-neue text-base space-y-1.5">
                {exp.missions.map((mission) => (
                  <li key={mission} className="flex gap-2">
                    <span className="text-green-400 mt-1 shrink-0">•</span>
                    <span>{mission}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <Subtitle className="mb-6">{m.headings.education}</Subtitle>
        <div className="space-y-8">
          {m.education.map((edu) => (
            <div key={edu.school} className="border-t border-current pt-5">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                <h3 className="font-parnaso text-2xl sm:text-3xl">
                  {edu.title}
                </h3>
                <span className="font-neue text-sm uppercase tracking-wider text-neutral-500">
                  {edu.period}
                </span>
              </div>
              <p className="font-neue text-lg font-medium">
                {edu.school}{" "}
                <span className="text-neutral-500 font-normal">
                  · {edu.location}
                </span>
              </p>
              <ul className="font-neue text-base mt-3 space-y-1">
                {edu.details.map((detail) => (
                  <li key={detail} className="flex gap-2">
                    <span className="text-green-400 mt-1 shrink-0">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <Subtitle className="mb-6">{m.headings.skills}</Subtitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {m.skills.map(({ category, items }) => (
            <div key={category}>
              <h3 className="font-neue text-sm uppercase tracking-wider font-medium mb-2">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="font-neue text-sm border border-current px-2 py-0.5"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <Subtitle className="mb-6">{m.headings.languages}</Subtitle>
        <div className="grid grid-cols-3 gap-4 max-w-md">
          {m.languages.map((lang) => (
            <div key={lang.name}>
              <p className="font-neue text-lg">{lang.name}</p>
              <p className="font-neue text-sm text-neutral-500">{lang.level}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
