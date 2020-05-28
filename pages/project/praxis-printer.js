import BasicPage from '../../components/basic-page.js'

export default function PraxisPrinter() {
    return (
        <BasicPage title="Praxis 3D Printer">
            I've designed and built two major iterations and dozens of minor iterations of an advanced FDM 3D printer for my 
            company <a href="https://praxismfg.com">Praxis Mfg</a>. The current version has automatically switched tool heads similar to E3D's system,
            a touch probe measurement tool I built from scratch, a novel 5-axis motion platform uniquely suited to FDM, and a robust softare calibration
            routine for that platform. The calibration routine allows an inexpensive precise-but-inaccurate system to achieve {"< 0.05 mm"} positioning
            accuracy throughout a 280 mm x 280 mm cylindrical working volume.
            <br/><br/>
            This page will be more interesting after I get around to filing IP protections for Praxis.
        </BasicPage>
    )
}
