import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next.js Static Site Example</title>
        <meta name="description" content="A Next.js static site example for Blossom" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="intro-section">
        <div className="container">
          <h2>Welcome to Your Next.js Static Site</h2>
          <p>This site is built using <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">Next.js</a> and deployed with <a href="https://blossom-cloud.com" target="_blank" rel="noopener noreferrer">Blossom</a>. See how easily you can deploy your own site.</p>
        </div>
      </div>

      <div className="hero">
        <div className="container">
          <h1>Let Your Apps Blossom</h1>
          <p>Deploy any application to your own servers. Save time and money.</p>
          <div className="cta-buttons">
            <a href="https://docs.blossom-cloud.com" className="cta-button">📖 Documentation</a>
            <a href="https://www.blossom-cloud.com/quickstarts" className="cta-button" target="_blank" rel="noopener noreferrer">🚀 Quickstarts</a>
          </div>
        </div>
      </div>

      <div className="cost-savings">
        <div className="container">
          <h2>Discover Your Savings 💵</h2>
          <p>See how much you can save with the cost calculator. Compare deployment costs and optimize your budget.</p>
          <a href="https://www.blossom-cloud.com/pricing/calculator" className="cta-button">💰 Calculate Savings</a>
        </div>
      </div>
    </div>
  )
}