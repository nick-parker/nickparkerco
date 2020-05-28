import Nav from '../components/nav'
import CardGrid from '../components/card-grid'

const exciting_techs = [
    {
        href: "/exciting/one-click-mfg",
        title: "One-Click Manufacturing"
    },
    {
        href: "/exciting/space-based-mfg",
        title: "Space Based Manufacturing"
    },
    {
        href: "/exciting/archimedes-drive",
        title: "Archimedes Drive",
        image: "/images/archimedes.webp",
    },
    {
        href: "/exciting/diaphragm-pistons",
        title: "Diaphragm pistons",
        text: "Test text"
    },
    {
        href:"/exciting/biomimetic-robotics",
        title: "Biomimetic Robotics"
    },
    {
        href:"/exciting/neuromorphic-circuits",
        title: "Neuromorphic Circuits"
    },
    {
        href:"/exciting/orbital-retirement",
        title:"Orbital Retirement Homes"
    },
    {
        href:"/exciting/inflatable-structures",
        title:"Inflatable Structures"
    },
    {
        href:"/exciting/compact-fusion",
        title:"Compact Fusion Power"
    },
    {
        href:"/exciting/next-gen-medical-imaging",
        title:"Next-Gen Medical Imaging"
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