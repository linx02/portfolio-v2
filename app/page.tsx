import Nav from "@/components/Nav";
import Landing from "@/components/blocks/Landing";
import ProjectShowcase from "@/components/blocks/ProjectShowcase";
import Contact from "@/components/blocks/Contact";
import Skills from "@/components/blocks/Skills";
import isMobileDevice from "./utils/isMobileDevice";

export default function Home() {

  return (
    <>
      <Nav />
      <main>
        <Landing />
        <div className="mb-[15vh]" id="work"></div>
        <ProjectShowcase />
        <div className="mb-[20vh]" id="skills"></div>
        <Skills />
        <Contact id="contact" />
      </main>
    </>
  );
}