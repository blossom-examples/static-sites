<template>
  <div class="layout">
    <header class="header">
      <div class="container">
        <strong>
          <g-link to="/" class="logo">{{ $static.metadata.siteName }}</g-link>
        </strong>
        <nav class="nav">
          <g-link class="nav__link" to="/">Home</g-link>
          <g-link class="nav__link" to="/about/">About</g-link>
        </nav>
      </div>
    </header>
    <main>
      <slot/>
    </main>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
:root {
  --primary: #6366f1;
  --primary-dark: #4f46e5;
  --text: #1f2937;
  --text-light: #6b7280;
  --background: #ffffff;
}

body {
  font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
  color: var(--text);
  background: var(--background);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
}

.header {
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 1rem 0;
}

.header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  color: var(--primary);
  text-decoration: none;
  font-weight: 700;
}

.nav__link {
  margin-left: 1.5rem;
  color: var(--text);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}

.nav__link:hover {
  color: var(--primary);
}

.footer {
  background-color: #f8fafc;
  padding: 2rem 0;
  margin-top: 4rem;
  border-top: 1px solid #e5e7eb;
  color: var(--text-light);
  text-align: center;
}

@media (max-width: 768px) {
  .header .container {
    flex-direction: column;
    align-items: flex-start;
  }

  .nav {
    margin-top: 1rem;
  }

  .nav__link {
    margin-left: 0;
    margin-right: 1rem;
  }
}
</style>
