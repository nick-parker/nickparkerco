import ExcitingPage from '../../components/exciting-page'
import Footnote from '../../components/footnote'

const the_drive = "https://www.thedrive.com/the-war-zone/29074/skunk-works-exotic-fusion-reactor-program-moves-forward-with-larger-more-powerful-design"
const merchant_marine = "https://en.wikipedia.org/wiki/Nuclear_marine_propulsion#Merchant_ships"
const hydrofoil = "https://en.wikipedia.org/wiki/Hydrofoil"
const ekranoplane = "https://en.wikipedia.org/wiki/Ground-effect_vehicle"
const antonov = "https://en.wikipedia.org/wiki/Antonov_An-225_Mriya"
const nepa = "https://en.wikipedia.org/wiki/Nuclear-powered_aircraft#NEPA_and_ANP"
const general_fusion = "https://generalfusion.com/technology-magnetized-target-fusion/"
const neutron = "https://en.wikipedia.org/wiki/Neutron_radiation#Effects_on_materials"
const mhd_modeling = "https://generalfusion.com/2018/11/modeling-highly-unsteady-current-driven-liquid-metal-free-surface-mhd-flows/"
const lead = "https://en.wikipedia.org/wiki/Isotopes_of_lead"

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
            <figure className="mx-auto w-3/4">
                <img src="/images/carrier-small.jpeg" alt="US Supercarrier Gerald R. Ford"/>
                <figcaption className="text-center text-sm">Imagine ships like this, but not just for killing. Source: Wikimedia</figcaption>
            </figure>
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
            Maybe we'll ditch ships entirely and fusion powered aircraft that dwarf the <a href={antonov}>AN-225</a> will take over
            all cargo service. Atomic Accidents by James Mahaffey has a great section on a 1950s <a href={nepa}>project</a> which
            tried to pull this off with early fission.
            </p>
            <p>
            I don't know who's going to pull this off, or when anyone will, but for aesthetic reasons <a href={general_fusion}>General Fusion</a> is
            my favorite contender. Their approach is satisfyingly physical: pistons, pressure, and a whirlpool of molten metal. I can viscerally
            imagine groaning about some tedious problem with my <i>fusion reactor</i> like a bad carburetor on an old car. As I understand it, the
            three biggest issues for fusion reactors are 1) squeezing hydrogen plasma hard enough that the atoms fuse together, 2) safely capturing
            the heat of that fusion (thermonukes are not power plants) and 3) keeping the flood of neutrons released from <a href={neutron}>destroying</a> every
            material in the reactor.   
            </p>
            <figure className="mx-auto w-3/4">
                <img src="/images/general-fusion.png" alt="General fusion reactor diagram"/>
                <figcaption className="text-center text-sm">General Fusion reactor diagram. Source: Wikimedia</figcaption>
            </figure>
            <p>
            General Fusion is building a sphere of molten lead and lithium a few meters in diameter and using pumps to spin the metal so a siphon
            forms along its vertical axis. Hydrogen plasma is shot into the siphon, and pistons arrayed across the outer surface of the spherical
            chamber rapidly push in more molten lead. The additional metal crushes the central siphon to 1/1000th its original volume and adiabatic 
            compression of the hydrogen plasma takes it to other-worldly temperatures<sup>[2]</sup>. The plasma fuses during the crush and blasts
            the inner wall of molten metal with intense heat and neutron flux. The siphon grows again and the whole process repeats.
            </p>
            <p>
            Here's the beautiful bit: Extracting heat and getting useful reactor lifetimes in spite of neutron damage are
            fairly open problems for most approaches. General Fusion has a thick layer of molten lead between the fusion and the nearest solid
            surface, so the neutrons just turn into extra heat<sup>[3]</sup>. They're also already pumping that lead through a loop to establish their
            siphon, so adding a heat exchanger to make steam and run boring conventional turbines is dead simple. 


            </p>
            <p>
            There are asterisks on this: Making plasma stable enough to endure the time between injection and squeezing is hard but they say they've
            done that. The <a href="https://xkcd.com/1851/">magnetohydrodynamics</a> of the spinning, shrinking internal surface of the molten metal
            are <a href={mhd_modeling}>difficult to predict</a>. But, the whole system makes sense. You can visualize it, and you can imagine
            a future where it's banal.
            </p>
            <Footnote num={1}>
                If we actually got compact fusion working tomorrow it'd solve a <i>lot</i> of problems, when I say solution here I mean
                "safest satisficing solution." Fusion's pay-off curve is a huge swath of nothing, a narrow band of "oh yeah that fixed a
                few things but has limitations" and then utopia. I'm more comfortable betting most of the house on stuff like solar,
                where we know every marginal unit of effort has positive and increasing impact.
            </Footnote>
            <Footnote num={2}>
                It surprises me that fusion can occur at pressures compatible with physical pistons, and a physical pressure vessel for that matter.
                The lead is incompressible so the entire surface of the vessel and the head of each piston sees the same pressure as the <i>fusion reaction</i>.
                Fusion in stars like our sun happens at an absurd 250 billion times atmospheric pressure. It turns out we <i>totally can't achieve that</i> and
                all our fusion plans revolve around temperatures far hotter than the core of the sun and paltry pressures. The record plasma pressure was set
                by <a href="https://www.psfc.mit.edu/news/2016/pressure-record-faq#q_4_6">Alcator C-Mod</a> and it's just over 2 atmospheres. I'm
                not sure plasma pressure is the same as "how hard it pushes against a tangible surface" but it seems to be.
            </Footnote>
            <Footnote num={3}>
                This is a bit of a hand-wave. The lead absorbs the neutrons, turning into other isotopes of lead and releasing EM radiation in the process.
                You can go through the <a href={lead}>list</a> of isotopes yourself to follow that process - each time a lead atom absorbs a neutron
                its atomic weight increases by 1. The nice thing about lead is the overwhelming majority of lead atoms are 206, 207, and 208, which are all
                stable. 209 is terrifyingly violently unstable with a half-life of 3 hours, but it decays into Bismuth-209 which is effectively
                stable with a halflife of 10<sup>19</sup> years. 210 is actually bad with a 22 year halflife and worrying decay products, but you only get
                it in "double captures" where a 208 atom first captures a neutron to become 209, and then captures a <i>second</i> neutron in the handful
                of hours before it decays to Bismuth. Even lead-210 has a halflife of 22 years and all its decay products are less than half a year, so within
                a single lifetime almost all your lead-210 will turn back into stable lead-206. This is why General Fusion says they'll produce "no long lived waste."

                The other interesting bit related to neutron capture is <a href="https://en.wikipedia.org/wiki/Breeding_blanket">tritrium breeding</a> which General
                Fusion plans to achieve by mixing molten lithium into their molten lead. This will also improve the capture cross section of the mixture, further
                protecting the solid components from neutron damage. 
            </Footnote>

        </ExcitingPage>
    )
}