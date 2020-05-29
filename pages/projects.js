import Nav from '../components/nav'
import CardGrid from '../components/card-grid'

const projects = [
    {
        title: "Antique CNC Mill Retrofit",
        href: "/project/cnc-mill",
        text: "Converting a Shizuoka ST-N knee mill from the late 1970s to LinuxCNC and residential power"
    },
    {
        title: "5-Axis Tool-Switching FDM 3D Printer",
        href: "/project/praxis-printer",
        text: "The hardware behind Praxis Mfg."
    },
    // {
    //     title: "Audio Dinner Party",
    //     href: "/project/audio-dinner-party"
    // },
    {
        title: "Dinner Parties",
        href: "/project/dinner-parties",
        text: "I cook food for my friends and interesting strangers"
    },
    {
        title: "Student Hyperloop Team",
        href: "/project/hyperloop",
        text: "My friends and I build an 18 ft long air-bearing levitated near-vacuum sled"
    },
    {
        title: "e-NABLE Open Source Prosthetics",
        href: "/project/e-nable",
        text: "Crowdsourced 3D printed prosthetics and some public speaking"
    },
    {
        title: "Bread Non-planar FDM Slicer",
        href: "/project/bread",
        text: "Printing with curvy layers in an attempt to improve part strength"
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