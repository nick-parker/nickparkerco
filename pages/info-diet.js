import Nav from '../components/nav'


export default function InfoDiet() {
    return (
    <>
    <Nav/>
    <h1 className="title py-4">Info Diet</h1>
    <div className="text-left sm:text-xl md:text-2xl px-8">
        This is my best-attempt at cataloguing where the info in my head comes from. Most of it's imported you know.
        <h2 className="section-header">Chats</h2>
        I keep <a href="https://theprepared.org/">The Prepared</a> subscriber Slack and <a href="https://www.interintellect.com/">InterIntellect</a> Mattermost
        open most of the time.
        <h2 className="section-header">Aggregators</h2>
        I read Twitter, HackerNews, and Reddit in that order, and I have a growing list of Google Alerts for topics that interest me. Google Alerts 
        are under-rated.
        <h2 className="section-header">Blogs and Newsletters</h2>
        <ul>
            <li>The Prepared</li>
            <li>The Diff</li>
            <li>Orbital Index</li>
            <li>Casey Handmer</li>
            <li>Fake Pixels</li>
            <li>Wheelhouse</li>
            <li>Product Lost</li>
            <li>Divinations</li>
            <li>Stratechery</li>
        </ul>
        <h2 className="section-header">Papers and Reference Material</h2>
        <ul>
            <li><a href="https://web.mit.edu/2.75/fundamentals/FUNdaMENTALS.html" >Fundamentals of Design</a> by Prof. Alexander Slocum</li>
            <li><a href="https://dspace.mit.edu/handle/1721.1/9414">Principles and Techniques for Designing Precision Machines</a> by Dr Layton Hale</li>
        </ul>
        <h2 className="section-header">Books</h2>
        <h3 className="section-header sm:text-xl md:text-2xl">Nonfiction</h3>
        <ul>
            <li>Beginning of Infinity by David Deutsch</li>
            <li>The Dream Machine</li>
            <li>The Infinite Resource</li>
            <li>Understanding Michael Porter</li>
            <li>The Charisma Myth</li>
            <li>Never Split the Difference</li>
            <li>Men Explain Things to Me</li>
            <li>A Paradise Built in Hell</li>
            <li>The High Frontier by Gerard K O'Neill</li>
            <li>An Elegant Puzzle by Will Larson</li>
            <li>Concrete Economics by Stephen S Cohen and J Bradford DeLong</li>
            <li>The Mom Test by Rob Fitzpatrick</li>
            <li>Zero to One by Peter Thiel</li>
            <li>The Hard Thing about Hard Things by Ben Horowitz</li>
            <li>Skunkworks by Ben R Rich</li>
        </ul>
        <h3 className="section-header sm:text-xl md:text-2xl">Science Fiction / Fantasy</h3>
        <ul>
            <li>Red Mars Trilogy</li>
            <li>Culture Series</li>
            <li>Nexus Series</li>
            <li>Foundation Series</li>
            <li>Infomocracy Trilogy</li>
            <li>Discworld</li>
            <li>Ringworld</li>
            <li>Exhalation: Stories</li>
            <li>Stories of Your Life and Others</li>
            <li>Neuromancer Trilogy by William Gibson</li>
            <li>Agency by William Gibson</li>
            <li>The Best of ALl Possible Worlds by Karen Lord</li>
            <li>Broken Earth Trilogy</li>
            <li>Three Body Problem Trilogy</li>
            <li>Aurora by Kim Stanley Robinson</li>
            <li>Delta-V by Daniel Suarez</li>
            <li>Burning Chrome by William Gibson</li>
            <li>Everything Belongs to the Future by Laurie Penny</li>
            <li>Autonomous by Analee Newitz</li>
            <li>The Sirens of Titan by Kurt Vonnegut</li>
            <li>Cat's Cradle by Kurt Vonnegut</li>
            <li>The Martian by Andy Weir</li>
            <li>Dune series by Frank Herbert</li>
        </ul>
    </div>
    </>
    )
}