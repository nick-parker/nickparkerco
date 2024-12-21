import BasicPage from '../components/basic-page'
import Head from 'next/head'

function BookListItem({ href, title, author }) {
  return (
    <li>
      <a href={href} className="text-blue-500 hover:underline">
        {title}
      </a>
      {author && ` by ${author}`}
    </li>
  );
}

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
          <BookListItem href="https://theprepared.org/" title="The Prepared" />
          <BookListItem href="https://diff.substack.com/" title="The Diff" />
          <BookListItem href="https://orbitalindex.com/" title="Orbital Index" />
          <BookListItem href="http://www.caseyhandmer.com/" title="Casey Handmer" />
          <BookListItem href="https://wheelhouse.substack.com/" title="Wheelhouse" />
          <BookListItem href="https://noahpinion.substack.com/" title="Noahpinion" />
       </ul>
        <h2 className="section-header">Papers and Reference Material</h2>
        <ul>
          <BookListItem href="https://web.mit.edu/2.75/fundamentals/FUNdaMENTALS.html" title="Fundamentals of Design" author="Prof. Alexander Slocum" />
          <BookListItem href="https://dspace.mit.edu/handle/1721.1/9414" title="Principles and Techniques for Designing Precision Machines" author="Dr Layton Hale" />
          <BookListItem href="https://www.wired.com/1996/12/ffglass/" title="Mother Earth Mother Board" author="Neal Stephenson" />
        </ul>
        <h2 className="section-header">Books</h2>
        <h3 className="section-header sm:text-xl md:text-2xl">Nonfiction</h3>
        <ul>
          <BookListItem href="https://www.amazon.com/Beginning-Infinity-Explanations-Transform-World/dp/0143121359" title="Beginning of Infinity" author="David Deutsch" />
          <BookListItem href="https://www.amazon.com/Surfing-Uncertainty-Prediction-Action-Embodied/dp/0190217014" title="Surfing Uncertainty" author="Andy Clark" />
          <BookListItem href="https://direct.mit.edu/books/oa-monograph/5299/Active-InferenceThe-Free-Energy-Principle-in-Mind" title="Active Inference" author="Thomas Parr, Giovanni Pezzulo, and Karl J. Friston" />
          <BookListItem href="https://www.amazon.com/Dream-Machine-M-Mitchell-Waldrop/dp/1732265119" title="The Dream Machine" author="M. Mitchell Waldrop" />
          <BookListItem href="https://www.amazon.com/Infinite-Resource-Power-Finite-Planet/dp/161168255X" title="The Infinite Resource" author="Ramez Naam" />
          <BookListItem href="https://www.amazon.com/Understanding-Michael-Porter-Essential-Competition-ebook/dp/B005OVTMAY" title="Understanding Michael Porter" author="Joan Magretta" />
          <BookListItem href="https://www.amazon.com/Charisma-Myth-Science-Personal-Magnetism-ebook/dp/B005GSZZ24" title="The Charisma Myth" author="Olivia Fox Cabane" />
          <BookListItem href="https://www.amazon.com/Never-Split-Difference-Negotiating-Depended-ebook/dp/B014DUR7L2" title="Never Split the Difference" author="Chris Voss" />
          <BookListItem href="https://www.amazon.com/Men-Explain-Things-Rebecca-Solnit-ebook/dp/B00IWGQ8PU" title="Men Explain Things to Me" author="Rebecca Solnit" />
          <BookListItem href="https://www.amazon.com/Paradise-Built-Hell-Extraordinary-Communities-ebook/dp/B003XQEVLM" title="A Paradise Built in Hell" author="Rebecca Solnit" />
          <BookListItem href="https://www.amazon.com/High-Frontier-Human-Colonies-Space/dp/1686872720" title="The High Frontier" author="Gerard K O'Neill" />
          <BookListItem href="https://www.amazon.com/Elegant-Puzzle-Systems-Engineering-Management-ebook/dp/B07QYCHJ7V" title="An Elegant Puzzle" author="Will Larson" />
          <BookListItem href="https://www.amazon.com/Concrete-Economics-Hamilton-Approach-Economic/dp/1422189813" title="Concrete Economics" author="Stephen S Cohen and J Bradford DeLong" />
          <BookListItem href="https://www.amazon.com/Mom-Test-customers-business-everyone-ebook/dp/B01H4G2J1U" title="The Mom Test" author="Rob Fitzpatrick" />
          <BookListItem href="https://www.amazon.com/Zero-One-Notes-Startups-Future-ebook/dp/B00J6YBOFQ" title="Zero to One" author="Peter Thiel" />
          <BookListItem href="https://www.amazon.com/Hard-Thing-About-Things-Building-ebook/dp/B00DQ845EA" title="The Hard Thing about Hard Things" author="Ben Horowitz" />
          <BookListItem href="https://www.amazon.com/Skunk-Works-Personal-Memoir-Lockheed-ebook/dp/B00A2DIW3C" title="Skunkworks" author="Ben R Rich" />
          <BookListItem href="https://www.amazon.com/Surely-Youre-Joking-Mr-Feynman-ebook/dp/B003V1WXKU" title="Surely You're Joking, Mr Feynman!" author="Richard Feynman" />
          <BookListItem href="https://www.amazon.com/Making-Atomic-Bomb-Richard-Rhodes-ebook/dp/B008TRU7SQ" title="The Making of the Atomic Bomb" author="Richard Rhodes" />
          <BookListItem href="https://www.amazon.com/Boom-Bubbles-Stagnation-Byrne-Hobart/dp/1953953476" title="Boom: Bubbles and the End of Stagnation" author="Byrne Hobart and Tobias Hubert" />

        </ul>
        <h3 className="section-header sm:text-xl md:text-2xl">Fiction</h3>
        <ul>
          <BookListItem href="https://www.amazon.com/Red-Mars-Trilogy-Book-ebook/dp/B000QCS914" title="Red Mars Trilogy" author="Kim Stanley Robertson" />
          <BookListItem href="https://www.amazon.com/Player-Games-Culture-Novel-Book-ebook/dp/B002WM3HC2" title="Culture Series" author="Ian M Banks" />
          <BookListItem href="https://www.amazon.com/Nexus-Trilogy-Book-1-ebook/dp/B00TOZI7FM" title="Nexus Series" author="Ramez Naam" />
          <BookListItem href="https://www.amazon.com/Foundation-Isaac-Asimov-ebook/dp/B000FC1PWA" title="Foundation Series" author="Isaac Asimov" />
          <BookListItem href="https://www.amazon.com/Infomocracy-Book-One-Centenal-Cycle-ebook/dp/B0151U75ME" title="Infomocracy Trilogy" author="Malka Older" />
          <BookListItem href="https://www.amazon.com/Color-Magic-Novel-Discworld-ebook/dp/B000W9399S" title="Discworld" author="Terry Pratchett" />
          <BookListItem href="https://www.amazon.com/Ringworld-Larry-Niven-ebook/dp/B01513ZIL6" title="Ringworld" author="Larry Niven" />
          <BookListItem href="https://www.amazon.com/Exhalation-Stories-Ted-Chiang-ebook/dp/B07GD46PQZ" title="Exhalation: Stories" author="Ted Chiang" />
          <BookListItem href="https://www.amazon.com/Exhalation-Stories-Ted-Chiang-ebook/dp/B07GD46PQZ" title="Stories of Your Life and Others" author="Ted Chiang" />
          <BookListItem href="https://www.amazon.com/Neuromancer-Sprawl-Trilogy-William-Gibson-ebook/dp/B000O76ON6" title="Neuromancer Trilogy" author="William Gibson" />
          <BookListItem href="https://www.amazon.com/Agency-William-Gibson-ebook/dp/B072NXSB14" title="Agency" author="William Gibson" />
          <BookListItem href="https://www.amazon.com/Best-All-Possible-Worlds-Novel-ebook/dp/B009CE5Z2I" title="The Best of All Possible Worlds" author="Karen Lord" />
          <BookListItem href="https://www.amazon.com/Fifth-Season-Broken-Earth-Book-ebook/dp/B00H25FCSQ" title="Broken Earth Trilogy" author="N. K. Jemisin" />
          <BookListItem href="https://www.amazon.com/Three-Body-Problem-Remembrance-Earths-Past-ebook/dp/B00IQO403K" title="Three Body Problem Trilogy" author="Liu Cixin" />
          <BookListItem href="https://www.amazon.com/Aurora-Kim-Stanley-Robinson-ebook/dp/B00NERQRPI" title="Aurora" author="Kim Stanley Robinson" />
          <BookListItem href="https://www.amazon.com/Delta-v-Daniel-Suarez-ebook/dp/B07FLX8V84" title="Delta-V" author="Daniel Suarez" />
          <BookListItem href="https://www.amazon.com/Influx-Daniel-Suarez-ebook/dp/B00DMCPOBI" title="Influx" author="Daniel Suarez" />
          <BookListItem href="https://www.amazon.com/Burning-Chrome-William-Gibson-ebook/dp/B00ICMWZH4" title="Burning Chrome" author="William Gibson" />
          <BookListItem href="https://www.amazon.com/Everything-Belongs-Future-Laurie-Penny-ebook/dp/B01BBX5WFM" title="Everything Belongs to the Future" author="Laurie Penny" />
          <BookListItem href="https://www.amazon.com/Autonomous-Novel-Annalee-Newitz-ebook/dp/B01N4P14CI" title="Autonomous" author="Analee Newitz" />
          <BookListItem href="https://www.amazon.com/Sirens-Titan-Novel-Kurt-Vonnegut-ebook/dp/B0012RMVCK" title="The Sirens of Titan" author="Kurt Vonnegut" />
          <BookListItem href="https://www.amazon.com/Cats-Cradle-Novel-Kurt-Vonnegut-ebook/dp/B000SEH13C" title="Cat's Cradle" author="Kurt Vonnegut" />
          <BookListItem href="https://www.amazon.com/Martian-Novel-Andy-Weir-ebook/dp/B00EMXBDMA" title="The Martian" author="Andy Weir" />
          <BookListItem href="https://www.amazon.com/Dune-Frank-Herbert-ebook/dp/B00B7NPRY8" title="Dune series" author="Frank Herbert" />
          <BookListItem href="https://www.amazon.com/Revelation-Space-Inhibitor-Trilogy-Book-ebook/dp/B0819W19WD" title="Revelation Space" author="Alastair Reynolds" />
          <BookListItem href="https://www.amazon.com/Unit-Ninni-Holmqvist-ebook/dp/B002CFQ6UO" title="The Unit" author="Ninni Holmqvist" />
          <BookListItem href="https://www.amazon.com/Fire-Upon-Deep-Zones-Thought-ebook/dp/B000FBJAGO/" title="A Fire Upon the Deep" author="Vernor Vinge" />
          <BookListItem href="https://www.amazon.com/Diamond-Age-Illustrated-Primer-Spectra-ebook/dp/B000FBJCKI" title="The Diamond Age" author="Neal Stephenson" />
          <BookListItem href="https://www.amazon.com/Fine-Structure-Sam-Hughes-ebook/dp/B07DW2PMS6" title="Fine Structure" author="qntm" />
          <BookListItem href="https://www.amazon.com/Ra-Sam-Hughes-ebook/dp/B07L9KLYPK" title="Ra" author="qntm" />
          <BookListItem href="https://www.amazon.com/Theft-Fire-Orbital-Space-1-ebook/dp/B0CJHQ4LZN" title="Theft of Fire" author="Devon Eriksen" />
          <BookListItem href="https://www.amazon.com/Children-Time-Adrian-Tchaikovsky/dp/0316452505" title="Children of Time trilogy" author="Adrian Tchaikovsky" />



        </ul>
      </div>
    </BasicPage>
  )
}