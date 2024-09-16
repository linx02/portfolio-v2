import ProgressBar from "../elements/ProgressBar"
import Glyph from "../elements/Glyph"
import Image from "next/image"
import isMobileDevice from "@/app/utils/isMobileDevice"
import EmblaCarousel from "../EmblaCarousel"
import { EmblaOptionsType } from 'embla-carousel'
import '../embla.css'

const skills = [
    { icon: "html", progress: 100 },
    { icon: "css", progress: 75 },
    { icon: "js", progress: 70 },
    { icon: "python", progress: 85 },
    { icon: "csharp", progress: 30 },
    { icon: "golang", progress: 10 },
]

const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true }
const SLIDE_COUNT = 6
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export default function Skills({lang}: {lang:'en' | 'sv'}) {
    const isMobile = isMobileDevice()

    const content = {
        en: {
            certifications: "Certifications",
            codeInstitute: "Diploma in Full Stack Development",
            sololearn: "C# Intermediate",
            fccMicrosoft: "Foundational C#",
            disclaimer: "*At the time of writing, in proportion to eachother, according to me"
        },
        sv: {
            certifications: "Certifikat",
            codeInstitute: "Diplom i Full Stack Utveckling",
            sololearn: "C# Intermediate",
            fccMicrosoft: "Grundläggande C#",
            disclaimer: "*Vid skrivandets tidpunkt, i proportion till varandra, enligt mig"
        },
    }

    return (
        <>
        <div className="grid sm:grid-cols-2 grid-cols-1 mt-48 sm:mx-24 mx-12 gap-24">
            <div className="grid grid-rows-6 gap-12">
                {
                    skills.map((skill, index) => (
                        <div key={index} className="flex items-center space-x-4">
                            <Glyph icon={skill.icon} />
                            <ProgressBar progress={skill.progress} />
                        </div>
                    ))
                }
            </div>
            {isMobile && <p className="mt-12 text-sm">{content[lang].disclaimer}</p>}
            {/* <div className="flex flex-col sm:items-end items-center justify-between sm:space-y-0 space-y-8"> 
                <h3 className="text-center text-3xl sm:my-0 my-12">{content[lang].certifications}</h3>
                <a href="https://www.credential.net/e68b4087-87ee-4c84-9c9e-ee546a191bbb">
                    <div className="flex flex-col sm:items-end items-center px-6 py-4 rounded-3xl shadow-[0_5px_10px_rgba(0,0,0,0.25)] hover:scale-[1.02] transition duration-300 ease-in-out">
                    <Image src="/images/logos/ci.png" alt="Code Institute Logo" width={100} height={100} />
                    <h4 className="sm:text-md text-sm">{content[lang].codeInstitute}</h4>
                </div>
                </a>
                <a href="https://www.sololearn.com/en/certificates/CC-UZKOVLEP">
                    <div className="flex flex-col sm:items-end items-center px-6 py-4 rounded-3xl shadow-[0_5px_10px_rgba(0,0,0,0.25)] hover:scale-[1.02] transition duration-300 ease-in-out">
                    <Image src="/images/logos/sololearn.png" alt="Sololearn Logo" width={100} height={100} />
                    <h4 className="sm:text-md text-sm pt-2">{content[lang].sololearn}</h4>
                </div>
                </a>
                <a href="https://www.freecodecamp.org/certification/linx02/foundational-c-sharp-with-microsoft">
                    <div className="flex flex-col sm:items-end items-center px-6 py-4 rounded-3xl shadow-[0_5px_10px_rgba(0,0,0,0.25)] hover:scale-[1.02] transition duration-300 ease-in-out">
                    <div className="flex">
                        <Image src="/images/logos/fcc.svg" alt="FreeCodeCamp Logo" width={50} height={50} />
                        <Image src="/images/logos/microsoft.webp" alt="Microsoft Logo" width={100} height={100} />
                    </div>
                    <h4 className="sm:text-md text-sm">{content[lang].fccMicrosoft}</h4>
                </div>
                </a>
            </div> */}
            <div className="flex flex-col space-y-6">
                <h3 className="text-center text-3xl sm:my-0">{content[lang].certifications}</h3>
                <EmblaCarousel slides={SLIDES} options={OPTIONS} />
            </div>
        </div>
        {!isMobile && <p className="mt-12 ml-24">{content[lang].disclaimer}</p>}
        </>
    )
}