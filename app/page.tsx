import Nav from "@/components/Nav";
import Landing from "@/components/blocks/Landing";
import ProjectShowcase from "@/components/blocks/ProjectShowcase";
import Contact from "@/components/blocks/Contact";
import Skills from "@/components/blocks/Skills";

export default function Home() {

  return (
    <>
      <Nav lang="en" />
      <main>
        <Landing lang="en" />
        <div className="mb-[15vh]" id="work"></div>
        <ProjectShowcase lang="en" />
        <div className="mb-[20vh]" id="skills"></div>
        <Skills lang="en" />
        <Contact id="contact" lang="en" />
      </main>
    </>
  );
}