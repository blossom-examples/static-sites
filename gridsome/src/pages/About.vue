<template>
  <Layout>
    <section class="about-section">
      <div class="container">
        <h1>About Blossom Cloud</h1>
        <p class="lead">A modern app deployment platform that helps you deploy any application to your own servers.</p>

        <div class="features">
          <div class="feature">
            <h3>🚀 Easy Deployment</h3>
            <p>Deploy your applications with just a few clicks. No complex configuration needed.</p>
          </div>

          <div class="feature">
            <h3>💰 Cost Effective</h3>
            <p>Save money by using your own infrastructure instead of expensive cloud providers.</p>
          </div>

          <div class="feature">
            <h3>🔒 Secure</h3>
            <p>Your data stays on your servers. You have full control over your infrastructure.</p>
          </div>

          <div class="feature">
            <h3>🔄 CI/CD Integration</h3>
            <p>Seamlessly integrate with your existing CI/CD pipelines for automated deployments.</p>
          </div>
        </div>

        <div class="cta-section">
          <h2>Ready to get started?</h2>
          <p>Join thousands of developers who are already using Blossom Cloud to deploy their applications.</p>
          <a href="https://www.blossom-cloud.com/signup" class="cta-button">Get Started Today</a>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'About - Blossom Cloud'
  }
}
</script>

<style>
.about-section {
  padding: 4rem 0;
}

.about-section h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: var(--primary);
  text-align: center;
}

.lead {
  font-size: 1.25rem;
  color: var(--text-light);
  text-align: center;
  max-width: 800px;
  margin: 0 auto 3rem;
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.feature {
  background: white;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}

.feature:hover {
  transform: translateY(-5px);
}

.feature h3 {
  margin-bottom: 1rem;
  color: var(--primary);
}

.cta-section {
  text-align: center;
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  padding: 3rem;
  border-radius: 0.5rem;
  margin-top: 2rem;
}

.cta-section h2 {
  margin-bottom: 1rem;
  color: var(--primary);
}

.cta-section p {
  margin-bottom: 2rem;
  color: var(--text-light);
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

@media (max-width: 768px) {
  .features {
    grid-template-columns: 1fr;
  }

  .about-section h1 {
    font-size: 2rem;
  }
}
</style>
