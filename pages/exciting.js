import Nav from '../components/nav'
import CardGrid from '../components/card-grid'

const exciting_techs = [
    {
        href: "/exciting/one-click-mfg",
        title: "One-Click Manufacturing",
        text: "Take humans out of the loop and make hardware a little more like software"
    },
    {
        href: "/exciting/space-based-mfg",
        title: "Space Based Manufacturing",
        text: "There are materials and systems we can only make off-Earth, and they'll change the world."
    },
    {
        href: "/exciting/archimedes-drive",
        title: "Archimedes Drive",
        image: "/images/archimedes.webp",
    },
    {
        href: "/exciting/diaphragm-pistons",
        title: "Diaphragm pistons",
        text: "Loosely tolerance DIY-friendly pistons with low hysterisis"
    },
    {
        href:"/exciting/biomimetic-robotics",
        title: "Biomimetic Robotics",
        text: "Copying biological systems with materials and components biology can't use"
    },
    {
        href:"/exciting/neuromorphic-circuits",
        title: "Neuromorphic Circuits",
        text: "Jumbles of plastic-coated nanowires act slightly like brains"
    },
    {
        href:"/exciting/orbital-retirement",
        title:"Orbital Retirement Homes",
        text:"Septuagenarians in space."
    },
    {
        href:"/exciting/inflatable-structures",
        title:"Inflatable Structures",
        text:"We should build Mars habs on Earth, maybe"
    },
    {
        href:"/exciting/compact-fusion",
        title:"Compact Fusion Power",
        text:"I just want city-ships man"
    },
    {
        href:"/exciting/next-gen-medical-imaging",
        title:"Next-Gen Medical Imaging",
        text:"Cheap ubiquitous MRI and brain-computer interfaces"
    },
]

export default function Exciting() {
    return (
    <>
        <Nav/>
        <h1 className="title py-4">Exciting Tech</h1>
        <div className="text-left sm:text-xl md:text-2xl px-8">
            I love learning about new technology and talking about it with friends. This is a compilation of the new technologies I'm most excited about and
            <span className="italic"> my current understanding of them.</span> That means parts of it will be wrong - think of it like your school
            teacher viewed Wikipedia.
        </div>
        <CardGrid cards={exciting_techs}/>
    </>
    )
}