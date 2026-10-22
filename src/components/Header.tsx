import { localizedPath, useLocale } from "@/lib/i18n";
import StyledLink from "./StyledLink";
import Title from "./Title";

export default function Header() {
  const locale = useLocale();
  return (
    <header className="mb-5 sm:mb-20">
      <Title as="span">
        <StyledLink href={localizedPath("/", locale)}>
          antoinedeveyrac.fr
        </StyledLink>
      </Title>
    </header>
  );
}
