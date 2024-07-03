type GlyphProps = {
    icon: string;
}

export default function Glyph({ icon }: GlyphProps) {
    switch (icon) {
        case "github":
            return <span className="icon-[grommet-icons--github] w-10 h-10" style={{color: "#333333"}}></span>
        case "linkedin":
            return <span className="icon-[akar-icons--linkedin-fill] w-10 h-10" style={{color: "#333333"}}></span>
        case "html":
            return <span className="icon-[flowbite--html-solid] w-11 h-11" style={{color: "#333333"}}></span>
        case "css":
            return <span className="icon-[flowbite--css-solid] w-11 h-11" style={{color: "#333333"}}></span>
        case "js":
            return <span className="icon-[akar-icons--javascript-fill] w-10 h-10" style={{color: "#333333"}}></span>
        case "wordpress":
            return <span className="icon-[grommet-icons--wordpress] w-10 h-10" style={{color: "#333333"}}></span>
        case "next":
            return <span className="icon-[akar-icons--nextjs-fill] w-10 h-10" style={{color: "#333333"}}></span>
        case "tailwind":
            return <span className="icon-[simple-icons--tailwindcss] w-10 h-10" style={{color: "#333333"}}></span>
        case "python":
            return <span className="icon-[akar-icons--python-fill] w-10 h-10" style={{color: "#333333"}}></span>
        case "flask":
            return <span className="icon-[simple-icons--flask] w-10 h-10" style={{color: "#333333"}}></span>
        case "php":
            return <span className="icon-[simple-icons--php] w-16 h-16" style={{color: "#333333"}}></span>
        case "mail":
            return <svg className="w-12 h-12" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 12"><path fill="#333333" d="M2 5.248V7.5A1.5 1.5 0 0 0 3.5 9h5A1.5 1.5 0 0 0 10 7.5V5.248L6.205 6.956a.5.5 0 0 1-.41 0zm.037-1.08L6 5.952l3.963-1.784A1.5 1.5 0 0 0 8.5 3h-5a1.5 1.5 0 0 0-1.463 1.168"/></svg>
        case "golang":
            return <span className="icon-[simple-icons--go] w-10 h-10" style={{color: "#333333"}}></span>
        case "csharp":
            return <span className="icon-[simple-icons--csharp] w-10 h-10" style={{color: "#333333"}}></span>
        default:
            return <span className="icon-[grommet-icons--github]" style={{color: "#333333"}}></span>
}
}