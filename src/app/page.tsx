import Link from "next/link";
import projects from "@/app/data/projects.json"
import Title from "./components/Title";
import Subtitle from "./components/Subtitle";
import Project from "./components/Project";
import StyledLink from "./components/StyledLink";
import AllProjects from "./components/AllProjects";

export default function Page() {
  return (
    <>
      <div className="container px-12 mb-20">
        <Title>Antoine de Veyrac, <br/>
          développeur fullstack, spécialiste de React (7 ans d'expérience) ainsi que de multiples technologies relatives au web, web3 et applications mobiles.
          N'hésitez pas à me <StyledLink href="mailto:antoine.2vey@gmail.com">contacter</StyledLink> si vous souhaitez collaborer.
        </Title>
      </div>

      <div className="mb-20">
        <AllProjects />
      </div>

      <div className="container px-12 mb-20">
        <Title>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium odio illo aperiam illum nam sint, magni inventore. Necessitatibus distinctio labore excepturi quisquam recusandae! Alias porro error id, accusantium voluptatibus molestiae.</Title>
      </div>

      <div className="mb-20">
        <div className="grid grid-cols-4 px-12">
          <div>
            <Subtitle>Mes services</Subtitle>
            <ul className="font-neue text-xl font-normal">
              <li>site web</li>
              <li>web apps</li>
              <li>appli mobiles (ios & android)</li>
              <li>discord/telegram bots</li>
              <li>web3 frontend integration</li>
              <li>smart contract integrations</li>
            </ul>
          </div>

          <div>
            <Subtitle>Expertise</Subtitle>
            <ul className="font-neue text-xl font-normal">
              <li>react - 7ans</li>
              <li>react native - 5ans</li>
              <li>javascript - 9ans</li>
              <li>nodejs - 7ans</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}