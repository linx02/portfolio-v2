import Project from "../Project";

export default function ProjectShowcase() {
    return (
        <>
        <div className="flex flex-col space-y-36 my-12">
            <Project
                title="Smartabilval.se"
                description="As a software development consultant, I was tasked with fixing bugs and adding new features to the existing website per the client's request. The website is a headless WordPress site with a Next.js frontend."
                image="/images/smartabilval.png"
                technologies={["html", "css", "js", "next", "wordpress"]}
            />
            <Project
                title="Sokonekt"
                description="As part of a team of developers, I was part of the beginning stages of the development of Sokonekt, which is a platform for social media management and marketing. As a Full Stack Developer, I was responsible for frontend and backend development of the website."
                image="/images/sokonekt.png"
                reverse={true}
                technologies={["html", "js", "python", "tailwind", "next", "flask"]}
            />
            <Project
                title="Arvidbil.se"
                description="As a software development consultant, I was tasked with fixing bugs and adding new features to the existing website per the client's request. The website is built with WordPress."
                image="/images/arvidbil.png"
                technologies={["php", "wordpress"]}
            />
            <Project
                title="Elvius.se"
                description="Built from the ground up by me, elvius.se is an ecommerce platform complete with stripe integration, user authentication, admin dashboard, and unique features such as 3D product previews."
                image="/images/elvius.png"
                reverse={true}
                technologies={["html", "js", "python", "tailwind", "next", "flask"]}
            />
        </div>
        <p className="mt-24 text-center">These are a few projects, but make sure to check out my <a className="text-blue border-b-2 border-blue" href="https://github.com/linx02">GitHub</a> to see more of my work!</p>
        </>
    )
}