import * as React from "react"
import "@fontsource/inter"

const containerStyles = {
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "0 2rem",
}

const introSectionStyles = {
  textAlign: "center",
  padding: "2rem",
  backgroundColor: "#f8fafc",
  borderBottom: "1px solid #e5e7eb",
  marginBottom: "2rem",
}

const heroStyles = {
  textAlign: "center",
  padding: "4rem 0",
  background: "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)",
  margin: "-2rem -2rem -2rem -2rem",
  borderRadius: "3px 3px 0 0",
}

const heroHeadingStyles = {
  fontSize: "3rem",
  marginBottom: "1rem",
  background: "linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
}

const heroParagraphStyles = {
  fontSize: "1.5rem",
  color: "#6b7280",
  maxWidth: "800px",
  margin: "0 auto 2rem",
}

const ctaButtonStyles = {
  display: "inline-flex",
  alignItems: "center",
  background: "#6366f1",
  color: "white",
  padding: "0.75rem 1.5rem",
  borderRadius: "0.5rem",
  textDecoration: "none",
  fontWeight: "600",
  transition: "all 0.2s",
  margin: "0 0.5rem",
}

const ctaButtonHoverStyles = {
  background: "#4f46e5",
  transform: "translateY(-2px)",
  boxShadow: "0 4px 12px rgba(99, 102, 241, 0.2)",
}

const costSavingsStyles = {
  textAlign: "center",
  padding: "4rem 0",
  background: "white",
  margin: "2rem 0",
  borderRadius: "3px",
  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
}

const costSavingsHeadingStyles = {
  color: "#6366f1",
}

const IndexPage = () => {
  return (
    <main style={containerStyles}>
      <section style={introSectionStyles}>
        <div>
          <h2>Welcome to Your Gatsby-Powered Site</h2>
          <p>This site is built using <a href="https://www.gatsbyjs.com/" target="_blank">Gatsby</a> and deployed with <a href="https://blossom-cloud.com" target="_blank">Blossom</a>. See how easily you can deploy your own site.</p>
        </div>
      </section>

      <section style={heroStyles}>
        <div>
          <h1 style={heroHeadingStyles}>Let Your Apps Blossom</h1>
          <p style={heroParagraphStyles}>Deploy any application to your own servers. Save time and money.</p>
          <div>
            <a href="https://docs.blossom-cloud.com" style={ctaButtonStyles} onMouseOver={e => e.currentTarget.style = ctaButtonHoverStyles} onMouseOut={e => e.currentTarget.style = ctaButtonStyles}>📖 Documentation</a>
            <a href="https://www.blossom-cloud.com/quickstarts" style={ctaButtonStyles} target="_blank" onMouseOver={e => e.currentTarget.style = ctaButtonHoverStyles} onMouseOut={e => e.currentTarget.style = ctaButtonStyles}>🚀 Quickstarts</a>
          </div>
        </div>
      </section>

      <section style={costSavingsStyles}>
        <div>
          <h2 style={costSavingsHeadingStyles}>Discover Your Savings 💵</h2>
          <p>See how much you can save with the cost calculator. Compare deployment costs and optimize your budget.</p>
          <a href="https://www.blossom-cloud.com/pricing/calculator" style={ctaButtonStyles} onMouseOver={e => e.currentTarget.style = ctaButtonHoverStyles} onMouseOut={e => e.currentTarget.style = ctaButtonStyles}>💰 Calculate Savings</a>
        </div>
      </section>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
