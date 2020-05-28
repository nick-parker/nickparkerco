import BasicPage from '../../components/basic-page'

export default function Prosthetics() {
    return (
        <BasicPage title="Open Source 3D Printed Prosthetics">
            I spent my last two years of high school hanging around a Google+ community which crowdsourced the design and production of 3D printed prosthetic
            hands and arms. The original e-NABLE community (now defunct along with Google+) was <span className="italic">just</span> a Google+ community with
            no formal structure or institutional support.
            <br/><br/>
            I happened to be the most active member in the SF bay area and also a marketable high school student, so I was invited to various conferences
            and corporate summits to speak about our community and the promise of distributed manufacturing. At one of those events I ended my talk with 
            "I'm pretty sure I'm the only person in this room without a legal team, and we have no idea if any of this is legal so, can I borrow one?"
            and <a href="https://www.linkedin.com/in/jeffmango/">Jeff Mango</a> then a VP at Verizon generously lent us their outside counsel to
            establish <a href="https://www.autodesk.com/customer-stories/limbforge">LimbForge</a>.
            <br/><br/>
            After High School I spent my Summer in <a href="https://bioengineering.rice.edu/jordan-miller">Dr Jordan Miller</a>'s Advanced Manufacturing
            Research Institute designing new prostheses around the concept of under-actuation. At the time all of our devices harnessed a single motion
            on the wearer's body to pull a cable which actuated a single degree of freedom in the hand. I designed the first tension-distributing system
            to allow all the fingers to move independently, and others improved my idea into the Whipple Tree system still used in
            most <a href="https://hub.e-nable.org/s/e-nable-devices/wiki/overview/list-categories">e-NABLE prostheses</a>.
            I also built a hand which closely mimicked the skeletal structure of human hands using plastic 'bones', string 'tendons' and rubber/string 'ligaments.'
            That didn't work - I was still a kid - but IRIM Lab Koreatech's more 
            recent <a href="https://www.youtube.com/watch?v=PpH71c6ziw0">FLEXX hand</a> is <span className="italic">exactly</span> what I was going for.
            <br/><br/>

        </BasicPage>
    )
}