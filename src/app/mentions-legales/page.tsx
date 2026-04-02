import Subtitle from "@/app/components/Subtitle";
import Title from "@/app/components/Title";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales — Antoine de Veyrac",
  description: "Mentions légales du site antoinedeveyrac.fr",
  alternates: {
    canonical: "/mentions-legales",
  },
  robots: { index: false },
};

export default function Page() {
  return (
    <div className="container px-6 sm:px-12">
      <Title>Mentions légales</Title>

      <section className="mt-10 mb-10">
        <Subtitle as="h3" className="mb-2">
          Éditeur du site
        </Subtitle>
        <ul className="font-neue text-xl font-normal">
          <li>Antoine de Veyrac</li>
          <li>Développeur freelance</li>
          <li>
            Contact :{" "}
            <a href="mailto:antoine.2vey@gmail.com" className="underline">
              antoine.2vey@gmail.com
            </a>
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <Subtitle as="h3" className="mb-2">
          Hébergement
        </Subtitle>
        <p className="font-neue text-xl">
          Ce site est hébergé sur un serveur dédié (nginx/Ubuntu).
        </p>
      </section>

      <section className="mb-10">
        <Subtitle as="h3" className="mb-2">
          Propriété intellectuelle
        </Subtitle>
        <p className="font-neue text-xl">
          L&apos;ensemble du contenu de ce site (textes, images, code) est la
          propriété d&apos;Antoine de Veyrac, sauf mention contraire. Toute
          reproduction est interdite sans autorisation préalable.
        </p>
      </section>

      <section className="mb-10">
        <Subtitle as="h3" className="mb-2">
          Données personnelles
        </Subtitle>
        <p className="font-neue text-xl">
          Ce site utilise Google Analytics pour mesurer l&apos;audience. Aucune
          donnée personnelle n&apos;est collectée à des fins commerciales. Vous
          pouvez désactiver le suivi via les paramètres de votre navigateur.
        </p>
      </section>
    </div>
  );
}
