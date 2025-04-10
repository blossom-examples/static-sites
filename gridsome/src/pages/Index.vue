<template>
  <Layout>
    <section class="intro-section">
      <div class="container">
        <h2>Welcome to Your Gridsome-Powered Site</h2>
        <p>This site is built using <a href="https://gridsome.org/" target="_blank">Gridsome</a> and deployed with <a href="https://blossom-cloud.com" target="_blank">Blossom</a>. See how easily you can deploy your own site.</p>
      </div>
    </section>

    <section class="hero">
      <div class="container">
        <h1>Let Your Apps Blossom</h1>
        <p>Deploy any application to your own servers. Save time and money.</p>
        <div class="cta-buttons">
          <a href="https://docs.blossom-cloud.com" class="cta-button">📖 Documentation</a>
          <a href="https://www.blossom-cloud.com/quickstarts" class="cta-button" target="_blank">🚀 Quickstarts</a>
        </div>
      </div>
    </section>

    <section class="cost-savings">
      <div class="container">
        <h2>Discover Your Savings 💵</h2>
        <p>See how much you can save with the cost calculator. Compare deployment costs and optimize your budget.</p>
        <a href="https://www.blossom-cloud.com/pricing/calculator" class="cta-button">💰 Calculate Savings</a>
      </div>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Blossom - Modern App Deploy Platform'
  }
}
</script>

<style>
.intro-section {
  text-align: center;
  padding: 2rem;
  background-color: #f8fafc;
  border-bottom: 1px solid #e5e7eb;
  margin-bottom: 2rem;
}

.intro-section h2 {
  margin-bottom: 0.5rem;
  font-size: 1.75rem;
  color: var(--primary);
}

.intro-section p {
  font-size: 1rem;
  color: var(--text-light);
}

.hero {
  text-align: center;
  padding: 4rem 0;
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  margin: -2rem -2rem -2rem -2rem;
  border-radius: 3px 3px 0 0;
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero p {
  font-size: 1.5rem;
  color: var(--text-light);
  max-width: 800px;
  margin: 0 auto 2rem;
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1.5rem;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  background: var(--primary);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.2s;
}

.cta-button:hover {
  background: var(--primary-dark);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.2);
}

.cost-savings {
  text-align: center;
  padding: 4rem 0;
  background: white;
  margin: 2rem 0;
  border-radius: 3px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.cost-savings h2 {
  color: var(--primary);
}

.cost-savings p {
  padding: 1.5rem 0;
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2.5rem;
  }

  .hero p {
    font-size: 1.25rem;
  }

  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }

  .cta-button {
    width: 100%;
    max-width: 300px;
    justify-content: center;
  }
}
</style>
