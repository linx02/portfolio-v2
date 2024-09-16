import Glyph from "../elements/Glyph"

export default function Contact({ id, lang } : { id: string, lang: 'en' | 'sv' }) {
    return (
        <div className="h-screen flex flex-col justify-center items-center" id={id}>
            {lang == 'en' ?
            <>
            <h2 className="font-bold sm:text-5xl text-3xl">Get in touch with me</h2>
            <p className={`pt-6 pb-12 font-semibold sm:text-xl text-sm text-center mx-12`}>I'm currently <span className="text-blue">open</span> for job opportunities and freelance work!<br />Let's connect and explore how my skills can contribute to your next endeavor.</p>
            </>
            :
            <>
            <h2 className="font-bold sm:text-5xl text-3xl">Kom i kontakt med mig</h2>
            <p className={`pt-6 pb-12 font-semibold sm:text-xl text-sm text-center mx-12`}>Jag är för närvarande <span className="text-blue">öppen</span> för jobbmöjligheter och frilansuppdrag!<br />Låt oss komma i kontakt och se hur jag kan bidra till ditt nästa projekt.</p>
            </>
            }
            <div className="flex sm:flex-row flex-col sm:space-x-8 sm-space-y-0 space-y-8 h-24 sm:items-end items-center">
                <a href="mailto:elvius.linus@gmail.com">
                    <div className="flex flex-col items-center h-full justify-evenly">
                        <Glyph icon="mail" />
                        <p className="font-semibold pt-2">elvius.<span className="text-blue">linus</span>@gmail.com</p>
                    </div>
                </a>
                <a href="https://github.com/linx02" target="_blank">
                    <div className="flex flex-col items-center h-full justify-evenly">
                        <Glyph icon="github" />
                        <p className="font-semibold pt-2">github.com/<span className="text-blue">linx02</span></p>
                    </div>
                </a>
                <a href="https://linkedin.com/in/linus-elvius" target="_blank">
                    <div className="flex flex-col items-center h-full justify-evenly">
                        <Glyph icon="linkedin" />
                        <p className="font-semibold pt-2">linkedin.com/in/<span className="text-blue">linus-elvius</span></p>
                    </div>
                </a>
            </div>
        </div>
    )
}