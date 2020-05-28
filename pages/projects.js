import Nav from '../components/nav'
import CardGrid from '../components/card-grid'

const projects = [
    {
        title: "Antique CNC Mill Retrofit",
        href: "/project/cnc-mill"
    },
    {
        title: "5-Axis Tool-Switching FDM 3D Printer",
        href: "/project/praxis-printer"
    },
    // {
    //     title: "Audio Dinner Party",
    //     href: "/project/audio-dinner-party"
    // },
    {
        title: "Dinner Parties",
        href: "/project/dinner-parties"
    },
    {
        title: "Student Hyperloop Team",
        href: "/project/hyperloop"
    },
    {
        title: "e-NABLE Open Source Prosthetics",
        href: "/project/e-nable"
    }
]

export default function Projects() {
    return (
    <>
        <Nav/>
        <div>
            <h1 className="title py-4">Projects</h1>
            <CardGrid cards={projects}/>
        </div>
        </>
    )
}