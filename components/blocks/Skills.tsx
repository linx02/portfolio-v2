import ProgressBar from "../elements/ProgressBar"
import Glyph from "../elements/Glyph"
import Image from "next/image"
import isMobileDevice from "@/app/utils/isMobileDevice"

const skills = [
    { icon: "html", progress: 100 },
    { icon: "css", progress: 75 },
    { icon: "js", progress: 70 },
    { icon: "python", progress: 85 },
    { icon: "csharp", progress: 30 },
    { icon: "golang", progress: 10 },
]

export default function Skills() {
    const isMobile = isMobileDevice()
    return (
        <>
        <div className="grid sm:grid-cols-2 grid-cols-1 mt-48 sm:mx-24 mx-12">
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
            {isMobile && <p className="mt-12 text-sm">*At the time of writing, in proportion to eachother, according to me</p>}
            <div className="flex flex-col sm:items-end items-center justify-between sm:space-y-0 space-y-8">
                <h3 className="text-center text-3xl sm:my-0 my-12">Certifications</h3>
                <a href="">
                    <div className="flex flex-col sm:items-end items-center px-6 py-4 rounded-3xl shadow-[0_5px_10px_rgba(0,0,0,0.25)] hover:scale-[1.02] transition duration-300 ease-in-out">
                    <Image src="/images/logos/ci.png" alt="Code Institute Logo" width={100} height={100} />
                    <h4 className="sm:text-md text-sm">Diploma in Full Stack Development</h4>
                </div>
                </a>
                <a href="">
                    <div className="flex flex-col sm:items-end items-center px-6 py-4 rounded-3xl shadow-[0_5px_10px_rgba(0,0,0,0.25)] hover:scale-[1.02] transition duration-300 ease-in-out">
                    <Image src="/images/logos/sololearn.png" alt="Sololearn Logo" width={100} height={100} />
                    <h4 className="sm:text-md text-sm pt-2">C# Intermediate</h4>
                </div>
                </a>
                <a href="">
                    <div className="flex flex-col sm:items-end items-center px-6 py-4 rounded-3xl shadow-[0_5px_10px_rgba(0,0,0,0.25)] hover:scale-[1.02] transition duration-300 ease-in-out">
                    <div className="flex">
                        <Image src="/images/logos/fcc.svg" alt="FreeCodeCamp Logo" width={50} height={50} />
                        <Image src="/images/logos/microsoft.webp" alt="Microsoft Logo" width={100} height={100} />
                    </div>
                    <h4 className="sm:text-md text-sm">Foundational C#</h4>
                </div>
                </a>
            </div>
        </div>
        {!isMobile && <p className="mt-12 ml-24">*At the time of writing, in proportion to eachother, according to me</p>}
        </>
    )
}