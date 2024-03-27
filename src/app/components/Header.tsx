import Link from "next/link";
import StyledLink from "./StyledLink";
import Title from "./Title";

export default function Header() {
  return (
    <header className="mb-5 sm:mb-20">
      <Title>
        <StyledLink href="/">antoinedeveyrac.io</StyledLink>
      </Title>
    </header>
  )
}