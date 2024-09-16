import Project from "../Project";

export default function ProjectShowcase({lang}: {lang:'en' | 'sv'}) {

    const content = {
        en: {
            smartabilval: {
                description: "As a software development consultant, I was tasked with fixing bugs and adding new features to the existing website per the client's request. The website is a headless WordPress site with a Next.js frontend."
            },
            sokonekt: {
                description: "As part of a team of developers, I was part of the beginning stages of the development of Sokonekt, which is a platform for social media management and marketing. As a Full Stack Developer, I was responsible for frontend and backend development of the website."
            },
            arvidbil: {
                description: "As a software development consultant, I was tasked with fixing bugs and adding new features to the existing website per the client's request. The website is built with WordPress."
            },
            elvius: {
                description: "Built from the ground up by me, elvius.se is an ecommerce platform complete with stripe integration, user authentication, admin dashboard, and unique features such as 3D product previews."
            }
        },
        sv: {
            smartabilval: {
                description: "Som konsult inom mjukvaruutveckling fick jag i uppdrag att fixa buggar och lägga till nya funktioner på den befintliga webbplatsen enligt kundens önskemål. Webbplatsen är en headless WordPress-webbplats med en Next.js frontend."
            },
            sokonekt: {
                description: "Som en del av ett agilt utvecklingsteam var jag med i början av utvecklingen av Sokonekt, som är en plattform för marknadsföring och hantering av sociala medier. Som Full Stack Developer var jag ansvarig för frontend- och backend-utvecklingen av webbappen."
            },
            arvidbil: {
                description: "Som konsult inom mjukvaruutveckling fick jag i uppdrag att fixa buggar och lägga till nya funktioner på den befintliga webbplatsen enligt kundens önskemål. Webbplatsen är byggd med WordPress."
            },
            elvius: {
                description: "Byggd från grunden av mig, elvius.se är en e-handelsplattform komplett med stripe-integration, användarautentisering, admin-dashboard och unika funktioner som 3D-produktförhandsgranskningar."
            }
        }
    }


    return (
        <>
        <div className="flex flex-col space-y-36 my-12">
            <Project
                title="Smartabilval.se"
                description={content[lang].smartabilval.description}
                image="/images/smartabilval.png"
                technologies={["html", "css", "js", "next", "wordpress"]}
            />
            <Project
                title="Sokonekt"
                description={content[lang].sokonekt.description}
                image="/images/sokonekt.png"
                reverse={true}
                technologies={["html", "js", "python", "tailwind", "next", "flask"]}
            />
            <Project
                title="Arvidbil.se"
                description={content[lang].arvidbil.description}
                image="/images/arvidbil.png"
                technologies={["php", "wordpress"]}
            />
            <Project
                title="Elvius.se"
                description={content[lang].elvius.description}
                image="/images/elvius.png"
                reverse={true}
                technologies={["html", "js", "python", "tailwind", "next", "flask"]}
            />
        </div>
        { lang == 'en' ?
        <p className="mt-24 text-center">These are a few projects, but make sure to check out my <a className="text-blue border-b-2 border-blue" href="https://github.com/linx02">GitHub</a> to see more of my work!</p>
        :
        <p className="mt-24 text-center">Dessa är några projekt, men se till att kolla in min <a className="text-blue border-b-2 border-blue" href="https://github.com/linx02">GitHub</a> för att se mer av mitt arbete!</p>
        }
        </>
    )
}