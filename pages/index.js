import Nav from '../components/nav'
import Head from 'next/head'

export default function IndexPage() {
  return (
    <div>
      <Head>
        <title>Nick Parker</title>
      </Head>
      <Nav />
      <div className="lg:flex lg:flex-row justify-around">
        <div className="lg:w-1/3 px-18 flex flex-col">
          <img className="profile mx-auto py-10 w-1/2 lg:w-3/4" src="images/profile.jpg"/>
          <h1 className="title">Nick Parker </h1>
          <h3 className="subtitle">Lead System Architect at <a href="https://www.aon3d.com/">AON3D</a> </h3>
          <h3 className="subtitle">Generalist Engineer</h3>
        </div>
        <div className="lg:w-2/3 text-left text-xl lg:text-2xl pl-8 pr-20">
          <h3 className="section-header">About</h3>
            <div className="pb-1">
            I'm a full stack generalist: I do everything from front-end web dev to precision mechanical engineering 
            and analog circuit design. My best work spans several skillsets, where I tend to see trade-offs others miss.
            </div>
            <div>
            I also have an infectious passion for new technology which sometimes helps start teams and projects.
            </div>
          <h3 className="section-header">Work</h3>
          I work at <a href="https://www.aon3d.com/">AON3D</a> in Montreal building the next generation of thermoplastic and composite manufacturing.
          <h3 className="section-header">Contact</h3>
          You can reach me via <a href="https://twitter.com/NickParkerPrint">Twitter</a> or <a href="mailto:hi@nickparker.co">email</a>.
        </div>
      </div>
    </div>
  )
}
