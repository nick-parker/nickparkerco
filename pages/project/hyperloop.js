import BasicPage from '../../components/basic-page'
import Link from 'next/link'

export default function Hyperloop() {
    return (
        <BasicPage title="OpenLoop Student Hyperloop Team">
            My sophomore year at Cornell I started a team to compete in SpaceX's Hyperloop competition. Based on my experience with <Link href="/project/e-nable">
            collaboratively designed prosthetics</Link> I decided to form an alliance with five other campuses: Northeastern University, Memorial University
            of Newfoundland, Harvey Mudd, University of Michigan, and Princeton.
            <br/><br/>
            I did an impressively bad job leading the Cornell contingent of the alliance. I didn't know how to delegate work and I thought I knew more than I did
            about engineering so I did a frightening fraction of the design myself. In spite of that, the team pulled together over $150,000 in
            sponsorships, fixed my mistakes, and built a functional 18 ft long air-levitated Hyperloop pod in time for competition. Unfortunately SpaceX's test
            track had technical difficulties so only three of ten test-ready teams got to run their vehicles at the first competition weekend, and we can only lay
            claim to a nebulous "top 10" place. In the second year of the competition the improved OpenLoop pod placed 2nd under the new banner
            of <Link href="https://paradigmhyperloop.com/">Paradigm Hyperloop</Link>.
            <br/><br/>
            Many of my best friends and hardest-fought lessons came from this project, and I'm enormously thankful for the engineering and leadership
            experience it provided even though I wasn't ready for it. OpenLoop is also featured in
            a <Link href="https://www.amazon.com/The-Design/dp/B07Q8J3K3Z">documentary</Link> by Legendary Pictures so you can see my 19-year-old blunders in high
            definition.
            <br/><br/>
            Lastly, OpenLoop led me to take a systems engineering internship with <Link href="https://hyperloop-one.com/">Hyperloop One</Link> after my Junior year which 
            was a fantastic experience. My team was brilliant and they paid me to learn tons of new skills.

        </BasicPage>
    )
}