import BasicPage from '../components/basic-page'
import Head from 'next/head'


export default function InfoDiet() {
    return (
    <BasicPage>
    <h1 className="title py-4">Info Diet</h1>
    <Head>
        <title>Info Diet</title>
    </Head>
    <div className="text-left sm:text-xl md:text-2xl px-8">
        This is my best-attempt at cataloguing where the info in my head comes from. Most of it's imported you know.
        <h2 className="section-header">Chats</h2>
        I keep <a href="https://theprepared.org/">The Prepared</a> subscriber Slack open most of the time, and my DMs are open on <a href="https://twitter.com/NickParkerPrint">Twitter</a>
        <h2 className="section-header">Aggregators</h2>
        I read Twitter, HackerNews, and Reddit in that order, and I have a growing list of Google Alerts for topics that interest me. Google Alerts 
        are under-rated.
        <h2 className="section-header">Blogs and Newsletters</h2>
        <ul>
            <li><a href="https://theprepared.org/">The Prepared</a></li>
            <li><a href="https://diff.substack.com/">The Diff</a></li>
            <li><a href="https://orbitalindex.com/">Orbital Index</a></li>
            <li><a href="http://www.caseyhandmer.com/">Casey Handmer</a></li>
            <li><a href="https://fakepixels.com/">Fake Pixels</a></li>
            <li><a href="https://wheelhouse.substack.com/">Wheelhouse</a></li>
            <li><a href="https://hipcityreg.substack.com/">Product Lost</a></li>
            <li><a href="https://divinations.substack.com/">Divinations</a></li>
            <li><a href="https://stratechery.com/">Stratechery</a></li>
        </ul>
        <h2 className="section-header">Papers and Reference Material</h2>
        <ul>
            <li><a href="https://web.mit.edu/2.75/fundamentals/FUNdaMENTALS.html" >Fundamentals of Design</a> by Prof. Alexander Slocum</li>
            <li><a href="https://dspace.mit.edu/handle/1721.1/9414">Principles and Techniques for Designing Precision Machines</a> by Dr Layton Hale</li>
        </ul>
        <h2 className="section-header">Books</h2>
        <h3 className="section-header sm:text-xl md:text-2xl">Nonfiction</h3>
        <ul>
            <li><a href="https://www.amazon.com/Beginning-Infinity-Explanations-Transform-World/dp/0143121359">Beginning of Infinity by David Deutsch</a></li>
            <li><a href="https://www.amazon.com/Dream-Machine-M-Mitchell-Waldrop/dp/1732265119">The Dream Machine</a></li>
            <li><a href="https://www.amazon.com/Infinite-Resource-Power-Finite-Planet/dp/161168255X">The Infinite Resource</a></li>
            <li><a href="https://www.amazon.com/Understanding-Michael-Porter-Essential-Competition-ebook/dp/B005OVTMAY">Understanding Michael Porter</a></li>
            <li><a href="https://www.amazon.com/Charisma-Myth-Science-Personal-Magnetism-ebook/dp/B005GSZZ24">The Charisma Myth</a></li>
            <li><a href="https://www.amazon.com/Never-Split-Difference-Negotiating-Depended-ebook/dp/B014DUR7L2">Never Split the Difference</a></li>
            <li><a href="https://www.amazon.com/Men-Explain-Things-Rebecca-Solnit-ebook/dp/B00IWGQ8PU">Men Explain Things to Me</a></li>
            <li><a href="https://www.amazon.com/Paradise-Built-Hell-Extraordinary-Communities-ebook/dp/B003XQEVLM">A Paradise Built in Hell</a></li>
            <li><a href="https://www.amazon.com/High-Frontier-Human-Colonies-Space/dp/1686872720">The High Frontier by Gerard K O'Neill</a></li>
            <li><a href="https://www.amazon.com/Elegant-Puzzle-Systems-Engineering-Management-ebook/dp/B07QYCHJ7V">An Elegant Puzzle by Will Larson</a></li>
            <li><a href="https://www.amazon.com/Concrete-Economics-Hamilton-Approach-Economic/dp/1422189813">Concrete Economics by Stephen S Cohen and J Bradford DeLong</a></li>
            <li><a href="https://www.amazon.com/Mom-Test-customers-business-everyone-ebook/dp/B01H4G2J1U">The Mom Test by Rob Fitzpatrick</a></li>
            <li><a href="https://www.amazon.com/Zero-One-Notes-Startups-Future-ebook/dp/B00J6YBOFQ">Zero to One by Peter Thiel</a></li>
            <li><a href="https://www.amazon.com/Hard-Thing-About-Things-Building-ebook/dp/B00DQ845EA">The Hard Thing about Hard Things by Ben Horowitz</a></li>
            <li><a href="https://www.amazon.com/Skunk-Works-Personal-Memoir-Lockheed-ebook/dp/B00A2DIW3C">Skunkworks by Ben R Rich</a></li>
            <li><a href="https://www.amazon.com/Surely-Youre-Joking-Mr-Feynman-ebook/dp/B003V1WXKU">Surely You're Joking, Mr Feynman! by Richard Feynman</a></li>
            <li><a href="https://www.amazon.com/Making-Atomic-Bomb-Richard-Rhodes-ebook/dp/B008TRU7SQ">The Making of the Atomic Bomb by Richard Rhodes</a></li>
        </ul>
        <h3 className="section-header sm:text-xl md:text-2xl">Science Fiction / Fantasy</h3>
        <ul>
            <li><a href="https://www.amazon.com/Red-Mars-Trilogy-Book-ebook/dp/B000QCS914">Red Mars Trilogy by Kim Stanley Robertson</a></li>
            <li><a href="https://www.amazon.com/Player-Games-Culture-Novel-Book-ebook/dp/B002WM3HC2">Culture Series by Ian M Banks</a></li>
            <li><a href="https://www.amazon.com/Nexus-Trilogy-Book-1-ebook/dp/B00TOZI7FM">Nexus Series by Ramez Naam</a></li>
            <li><a href="https://www.amazon.com/Foundation-Isaac-Asimov-ebook/dp/B000FC1PWA">Foundation Series by Isaac Asimov</a></li>
            <li><a href="https://www.amazon.com/Infomocracy-Book-One-Centenal-Cycle-ebook/dp/B0151U75ME">Infomocracy Trilogy by Malka Older</a></li>
            <li><a href="https://www.amazon.com/Color-Magic-Novel-Discworld-ebook/dp/B000W9399S">Discworld</a> by Terry Pratchett</li>
            <li><a href="https://www.amazon.com/Ringworld-Larry-Niven-ebook/dp/B01513ZIL6">Ringworld</a> by Larry Niven</li>
            <li><a href="https://www.amazon.com/Exhalation-Stories-Ted-Chiang-ebook/dp/B07GD46PQZ">Exhalation: Stories</a> by Ted Chiang</li>
            <li><a href="https://www.amazon.com/Exhalation-Stories-Ted-Chiang-ebook/dp/B07GD46PQZ">Stories of Your Life and Others</a> by Ted Chiang</li>
            <li><a href="https://www.amazon.com/Neuromancer-Sprawl-Trilogy-William-Gibson-ebook/dp/B000O76ON6">Neuromancer Trilogy by William Gibson</a></li>
            <li><a href="https://www.amazon.com/Agency-William-Gibson-ebook/dp/B072NXSB14">Agency by William Gibson</a></li>
            <li><a href="https://www.amazon.com/Best-All-Possible-Worlds-Novel-ebook/dp/B009CE5Z2I">The Best of ALl Possible Worlds by Karen Lord</a></li>
            <li><a href="https://www.amazon.com/Fifth-Season-Broken-Earth-Book-ebook/dp/B00H25FCSQ">Broken Earth Trilogy</a></li>
            <li><a href="https://www.amazon.com/Three-Body-Problem-Remembrance-Earths-Past-ebook/dp/B00IQO403K">Three Body Problem Trilogy</a></li>
            <li><a href="https://www.amazon.com/Aurora-Kim-Stanley-Robinson-ebook/dp/B00NERQRPI">Aurora by Kim Stanley Robinson</a></li>
            <li><a href="https://www.amazon.com/Delta-v-Daniel-Suarez-ebook/dp/B07FLX8V84">Delta-V by Daniel Suarez</a></li>
            <li><a href="https://www.amazon.com/Influx-Daniel-Suarez-ebook/dp/B00DMCPOBI">Influx</a> by Daniel Suarez</li>
            <li><a href="https://www.amazon.com/Burning-Chrome-William-Gibson-ebook/dp/B00ICMWZH4">Burning Chrome by William Gibson</a></li>
            <li><a href="https://www.amazon.com/Everything-Belongs-Future-Laurie-Penny-ebook/dp/B01BBX5WFM">Everything Belongs to the Future by Laurie Penny</a></li>
            <li><a href="https://www.amazon.com/Autonomous-Novel-Annalee-Newitz-ebook/dp/B01N4P14CI">Autonomous by Analee Newitz</a></li>
            <li><a href="https://www.amazon.com/Sirens-Titan-Novel-Kurt-Vonnegut-ebook/dp/B0012RMVCK">The Sirens of Titan by Kurt Vonnegut</a></li>
            <li><a href="https://www.amazon.com/Cats-Cradle-Novel-Kurt-Vonnegut-ebook/dp/B000SEH13C">Cat's Cradle by Kurt Vonnegut</a></li>
            <li><a href="https://www.amazon.com/Martian-Novel-Andy-Weir-ebook/dp/B00EMXBDMA">The Martian by Andy Weir</a></li>
            <li><a href="https://www.amazon.com/Dune-Frank-Herbert-ebook/dp/B00B7NPRY8">Dune series by Frank Herbert</a></li>
            <li><a href="https://www.amazon.com/Revelation-Space-Inhibitor-Trilogy-Book-ebook/dp/B0819W19WD">Revelation Space by Alastair Reynolds</a></li>
            <li><a href="https://www.amazon.com/Unit-Ninni-Holmqvist-ebook/dp/B002CFQ6UO">The Unit by Ninni Holmqvist</a></li>
        </ul>
    </div>
    </BasicPage>
    )
}