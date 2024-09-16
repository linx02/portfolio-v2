import Nav from "@/components/Nav";
import Landing from "@/components/blocks/Landing";
import ProjectShowcase from "@/components/blocks/ProjectShowcase";
import Contact from "@/components/blocks/Contact";
import Skills from "@/components/blocks/Skills";

export const metadata = {
  title: "Linus Elvius - Frilansande utvecklare",
  description: "Hej, jag är Linus Elvius, en frilansande webbutvecklare / systemutvecklare. Jag specialiserar mig på fullstack-utveckling med teknologier som Next.js, React och Python.",
};

export default function Home() {

  return (
    <>
      <Nav lang="sv" />
      <main>
        <Landing lang="sv" />
        <div className="mb-[15vh]" id="work"></div>
        <ProjectShowcase lang="sv" />
        <div className="mb-[20vh]" id="skills"></div>
        <Skills lang="sv" />
        <Contact id="contact" lang="sv" />
      </main>
    </>
  );
}