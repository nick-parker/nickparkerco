import BasicPage from '../../components/basic-page'

export default function p() {
    return (
        <BasicPage title="Bread Non-Planar FDM Slicer">
            <img className="w-1/2 mx-auto" src="/images/bread-test-print.jpg"/>
            My Freshman year at Cornell I developed <a href="https://github.com/nick-parker/bread">Bread</a>, a path-planning program for FDM 3D printers
            which allowed users to print with arbitrarily curved layers. I later added extremely rudimentary 5-axis support at the request of a few researchers.
            I developed Bread as an academic research project in Prof. Hod Lipson's <a href="https://www.creativemachineslab.com/">Creative Machines Lab</a> which was
            then at Cornell. My goal was to protect prints from crack propagation at layer interfaces and improve their ultimate failure strength. This was a key
            issue at the time because layer interfaces were 40-60% weaker than the bulk plastic material, unfortunately curved layers did not significantly improve
            it.
            <br/><br/>
            I stopped developing Bread to work on <a href="/project/hyperloop">Hyperloop</a> partly because Hod's lab moved to Columbia, and partly because
            curved layers on 3-axis machines aren't that useful. You can improve surface finish on shallow inclines but not much else. The diameter of the tip
            of an FDM nozzle is typically larger than the layer thickness, so at any significant ({">15 deg"}) incline the uphill edge 'plows' below the layer surface while
            the downhill edge leaves a raised 'furrow' above it. This leaves an arched top surface on uphill extrusion movements and a half-pipe surface on
            downhill movements, both of which ruin the surface finish.
            <br/><br/>
            A recent SigGraph paper (<a href="https://cims.nyu.edu/gcl/papers/2019-CurviSlicer.pdf">pdf</a>) called CurviSlicer is in my opinion the optimal
            implementation of curved layers on 3-axis FDM machines. They fit an R^3 {'->'} R^3 deformation function to each model to minimize the "slantedness" of
            its surfaces - IE they try to make all surfaces either flat or vertical. They then slice flat layers in the deformed space and apply the inverse
            function to those layers to produce smoothly curved layers which minimize the "stair step" aliasing pattern on angled surfaces. They prevent nozzle
            collisions and 'plowing' due to excessive angles by setting appropriate limitations on the deformation functions. It's a beautiful implementation, and
            funnily enough my Cornell application essay was an inchoate description of exactly that approach: Deform space based on your goals (strength or smoothness),
            slice flat, reverse the deformation. I've always suspected that essay got sent over to Hod and that's how I got in - because my high school grades didn't
            really merit it lol
            <br/><br/>
            My experience with Bread first led to my internship at <a href="https://madeinspace.us/">Made in Space</a> developing a slicer for their ESAMM system
            which prints arbitrarily long structures in orbit, and then to my 5-axis printer project which soon morphed into <a href="https://praxismfg.com">Praxis Mfg</a>.
        </BasicPage>
    )
}