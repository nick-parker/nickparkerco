import Nav from '../components/nav'
import Head from 'next/head'

export default function IndexPage() {
  return (
    <div>
      <Head>
        <title>Nick Parker</title>
      </Head>
      <Nav />
      <div className="md:flex md:flex-row justify-around">
        <div className="md:w-1/3 px-20 flex flex-col">
          <img className="profile mx-auto py-10 w-3/4" src="images/profile.jpg"/>
          <h1 className="title">Nick Parker </h1>
          <h2 className="subtitle">Founder at <a href="https://praxismfg.com">Praxis Mfg</a> </h2>
          <h2 className="subtitle">Generalist Engineer</h2>
        </div>
        <div className="md:w-2/3 text-left sm:text-xl md:text-2xl px-8">
          <h3 className="section-header">About</h3>
            I'm a full stack generalist: I do everything from front-end web dev to precision mechanical engineering 
            and analog circuit design. My best work spans several skillsets, where I tend to see trade-offs others miss.
            <br/><br/>
            I also have an infectious passion for new technology which sometimes helps start teams and projects.
          <h3 className="section-header">Work</h3>
          I run <a href="https://praxismfg.com">Praxis Manufacturing</a> - an ultra fast and reliable 3D printing service for engineers.
          Praxis makes plastic copies of your design using advanced proprietary 3D printers, and delivers them via courier 0-2 days after you order.
          <h3 className="section-header">Contact</h3>
          You can reach me via <a href="https://twitter.com/NickParkerPrint">Twitter</a> or <a href="mailto:hi@nickparker.co">email</a>.
        </div>
      </div>
    </div>
  )
}
