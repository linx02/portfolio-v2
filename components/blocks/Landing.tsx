import Glyph from "../elements/Glyph"
import Profile from "../elements/Profile"
import isMobileDevice from "@/app/utils/isMobileDevice"

export default function Landing() {

    const isMobile = isMobileDevice()

    if (!isMobile) {
        return (
            <div className="flex justify-evenly items-center h-[90vh]">
                <div>
                    <h1 className="text-6xl font-bold leading-snug">Hi,<br />I am <span className="text-blue">Linus</span><br />Software Dev</h1>
                    <a href="#contact"><button className="my-12 bg-blue px-8 py-3 border-2 border-blue rounded-3xl text-white font-semibold text-xl hover:bg-white hover:text-blue transition duration-300 ease-in-out">Contact</button></a>
                    <div className="flex space-x-4 mt-8">
                        <a href="https://github.com/linx02" target="_blank"><Glyph icon="github" /></a>
                        <a href="https://linkedin.com/in/linus-elvius" target="_blank"><Glyph icon="linkedin" /></a>
                    </div>
                </div>
                <Profile />
            </div>
        )
    }
    else {
        return (
        <div className="flex flex-col justify-evenly items-center h-[70vh] mt-4">
            <Profile />
            <h1 className="text-2xl font-bold leading-snug text-center mt-12">Hi,<br />I am <span className="text-blue">Linus</span><br />Software Developer</h1>
            <a href="#contact"><button className="bg-blue px-4 mt-4 py-2 border-2 border-blue rounded-3xl text-white font-semibold text-xl hover:bg-white hover:text-blue transition duration-300 ease-in-out">Contact</button></a>
            <div className="flex space-x-4 mt-6">
                <a href="https://github.com/linx02" target="_blank"><Glyph icon="github" /></a>
                <a href="https://linkedin.com/in/linus-elvius" target="_blank"><Glyph icon="linkedin" /></a>
            </div>
        </div>
        )
    }

}