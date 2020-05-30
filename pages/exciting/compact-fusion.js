import ExcitingPage from '../../components/exciting-page'

const the_drive = "https://www.thedrive.com/the-war-zone/29074/skunk-works-exotic-fusion-reactor-program-moves-forward-with-larger-more-powerful-design"
const merchant_marine = "https://en.wikipedia.org/wiki/Nuclear_marine_propulsion#Merchant_ships"
const hydrofoil = "https://en.wikipedia.org/wiki/Hydrofoil"
const ekranoplane = "https://en.wikipedia.org/wiki/Ground-effect_vehicle"
const antonov = "https://en.wikipedia.org/wiki/Antonov_An-225_Mriya"
const nepa = "https://en.wikipedia.org/wiki/Nuclear-powered_aircraft#NEPA_and_ANP"
const general_fusion = "https://generalfusion.com/technology-magnetized-target-fusion/"
const implosion = "https://en.wikipedia.org/wiki/Nuclear_weapon_design#Implosion-type_weapon"
const neutron = "https://en.wikipedia.org/wiki/Neutron_radiation#Effects_on_materials"

export default function p() {
    return (
        <ExcitingPage title="Compact Fusion Power">
            <p>
            Teams around the world are trying to build <i>compact</i> nuclear Fusion reactors. I'm in love with this
            mission for largely aesthetic reasons. I don't think we need fusion power to mitigate climate change, nor
            do I think we should bet much on it in that arena. However, if we want to escape "fusion is always 20 years
            away" small reactors that you can iterate fast on feel right to me. This <a href={the_drive}>article</a> says
            Lockheed Martin's Skunkworks has already built five iterations of their reactor. We formally agreed to build
            ITER - the crown jewel of the "make them bigger" approach - in 2006, and it won't be ready to test until 2025.
            </p>
            <p>
            For me, fusion power is romantic-verging-on-quixotic because it's not the solution<sup>[1]</sup> to our current problems: It's the
            key to new kinds of magic.
            </p>
            <p>
            <a href={merchant_marine}>Merchant marine nuclear power</a> has been a non-starter since we dropped the first bomb.
            Fission meltdowns, nuclear proliferation, and decommissioning are scary problems and we don't need giant ships badly
            enough to solve them. But, if Lockheed Martin <i>actually delivers</i> a fusion power plant in a shipping container,
            that completely flips the economics of shipping. I can't tell you what this looks like but I can tell you it's awesome.
            Maybe we'll see mind-bogglingly massive ships traveling at about the same speed. Maybe we'll sacrifice energy efficiency
            for higher speed <a href={hydrofoil}>hydrofoils</a> or <a href={ekranoplane}>wingships</a> to deliver faster and amortize
            the capital cost of the ship over more trips.
            </p>
            <p>
            Maybe we'll ditch ships entirely and fusion aircraft that dwarf the <a href={antonov}>AN-225</a> will take over
            all cargo service. Atomic Accidents by James Mahaffey has a great section on a 1950s <a href={nepa}>project</a> which
            tried to pull this off with early fission.
            </p>
            <p>
            I don't know who's going to pull this off, or when anyone will, but for aesthetic reasons <a href={general_fusion}>General Fusion</a> is
            my favorite contender. Their approach is satisfyingly physical: pistons, pressure, and a whirlpool of molten metal. I can viscerally
            imagine groaning about some banal problem with my <i>fusion reactor</i> like a bad carburetor on an old car. As I understand it, the
            three biggest issues for fusion reactors are 1) squeezing hydrogen plasma hard enough that the atoms fuse together, 2) safely capturing
            the heat of that fusion (thermonukes are not power plants) and 3) keeping the flood of neutrons released from destroying every material
            in the reactor.   
            </p>
            <p>
            General Fusion is building a sphere of molten lead and lithium a few meters in diameter and using pumps to spin the metal so a siphon
            forms along its vertical axis. The outer surface of the sphere is covered with what amount to steam driven hammers: 2 ton pistons slam
            into "anvils" - plugs in the sphere wall - which transmit the impact to the surface of the molten metal. These impacts create a spherical
            pressure wave in the metal which races inward, crushes the central siphon and compresses the hydrogen plasma to other-worldly temperature
            and pressure. The plasma fuses during the crush and blasts the inner wall of molten metal with intense heat and neutron flux. The siphon
            grows again and the whole process repeats.
            </p>
            <p>
            Here's the beautiful bit: Extracting heat and getting useful reactor lifetimes in spite of <a href={neutron}>neutron damage</a> are
            fairly open problems for most approaches. General Fusion has a thick layer of molten lead between the fusion and the nearest solid
            surface, so the neutrons just turn into extra heat. They're also already pumping that lead through a loop to establish their
            siphon, so adding a heat exchanger to make steam and run boring conventional turbines is dead simple. 


            </p>
            <p>
            There are asterisks on this: Making plasma stable enough to endure the time between injection and squeezing is hard but they say they've
            done that. Spherical implosion wave fronts are tricky and making them work in a spinning ball of molten metal seems hard too, but
            modulo the spinning this is a redux of the <a href={implosion}>implosion approach</a> used in Fat Man. But, the whole system makes sense.
            You can visualize it easily, and you can imagine a future where it's banal.
            </p>
            <br/>
            <div>
                [1]: If we actually got compact fusion working tomorrow it'd solve a <i>lot</i> of problems, when I say solution here I mean
                "safest satisficing solution." Fusion's pay-off curve is a huge swath of nothing, a narrow band of "oh yeah that fixed a
                few things but has limitations" and then utopia. I'm more comfortable betting most of the house on stuff like solar,
                where we know every marginal unit of effort has positive and increasing impact.
            </div>

        </ExcitingPage>
    )
}