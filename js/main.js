function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, c => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  }[c]));
}

function serverIcon(server) {
  if (server.icon && (server.icon.includes("/") || server.icon.includes("."))) {
    return `<img src="${escapeHTML(server.icon)}" alt="">`;
  }

  return escapeHTML(server.icon || "SV");
}

function serverCard(server) {
  const online = String(server.status).toLowerCase() === "online";
  const connect = `steam://connect/${server.address}`;

  return `
    <article class="server-card ${online ? "online" : "offline"}">

      <div class="server-top">

        <div class="server-icon">
          ${serverIcon(server)}
        </div>

        <div>
          <div class="server-name">
            ${escapeHTML(server.name)}
          </div>

          <div class="server-desc">
            ${escapeHTML(server.description)}
          </div>
        </div>

        <div class="status">
          <span class="dot"></span>
          ${online ? "Online" : "Offline"}
        </div>

      </div>

      <div class="server-meta">

        <div class="meta">
          <small>Game</small>
          <span>${escapeHTML(server.game)}</span>
        </div>

        <div class="meta">
          <small>Mode</small>
          <span>${escapeHTML(server.mode)}</span>
        </div>

        <div class="meta">
          <small>Players</small>
          <span>${escapeHTML(server.players)}</span>
        </div>

      </div>

      <div class="server-actions">

        <span class="address">
          ${escapeHTML(server.address)}
        </span>

        ${
          online
            ? `<a class="connect" href="${connect}">CONNECT ›</a>`
            : `<span class="connect disabled">OFFLINE</span>`
        }

      </div>

    </article>
  `;
}

function renderCommon() {

  document.querySelectorAll("[data-site-name]")
    .forEach(e => e.textContent = SITE_CONFIG.site.name);

  document.querySelectorAll("[data-site-tagline]")
    .forEach(e => e.textContent = SITE_CONFIG.site.tagline);

  document.querySelectorAll("[data-site-mark]")
    .forEach(e => e.textContent = SITE_CONFIG.site.mark);

  const nav = document.querySelector("[data-nav]");

  if (nav) {

    const current = document.body.dataset.page;

    nav.innerHTML = SITE_CONFIG.navigation.map(item => {

      const active =
        (current === "home" && item.page === "index.html") ||
        item.page.replace(".html", "") === current;

      return `
        <a
          class="${active ? "active" : ""}"
          href="${item.page}">
          ${escapeHTML(item.name)}
        </a>
      `;

    }).join("");
  }

  const footer = document.querySelector("[data-footer]");

  if (footer) {
    footer.innerHTML = `
      <span>${escapeHTML(SITE_CONFIG.site.footerLeft)}</span>
      <span>${escapeHTML(SITE_CONFIG.site.footerRight)}</span>
    `;
  }

  const label = document.querySelector("[data-hero-label]");
  const title = document.querySelector("[data-hero-title]");
  const description = document.querySelector("[data-hero-description]");

  if (label) label.textContent = SITE_CONFIG.site.heroLabel;
  if (title) title.textContent = SITE_CONFIG.site.heroTitle;
  if (description) description.textContent = SITE_CONFIG.site.heroDescription;

  const featured = document.querySelector("[data-featured-servers]");

  if (featured) {
    featured.innerHTML =
      SITE_CONFIG.servers
        .slice(0, 2)
        .map(serverCard)
        .join("");
  }

  const info = document.querySelector("[data-home-info]");

  if (info) {
    info.innerHTML =
      SITE_CONFIG.information.map(item => `
        <article class="info-card">

          <span class="eyebrow">
            INFO
          </span>

          <h3>
            ${escapeHTML(item.title)}
          </h3>

          <p>
            ${escapeHTML(item.text)}
          </p>

        </article>
      `).join("");
  }

  const community = document.querySelector("[data-community]");

  if (community) {
    community.innerHTML =
      SITE_CONFIG.community.map(item => `
        <article class="content-card">

          <span class="eyebrow">
            COMMUNITY
          </span>

          <h3>
            ${escapeHTML(item.title)}
          </h3>

          <p>
            ${escapeHTML(item.text)}
          </p>

          <a class="button" href="${escapeHTML(item.url)}">
            ${escapeHTML(item.button)}
            <span>›</span>
          </a>

        </article>
      `).join("");
  }

  const downloads = document.querySelector("[data-downloads]");

  if (downloads) {
    downloads.innerHTML =
      SITE_CONFIG.downloads.map(item => `
        <article class="content-card">

          <span class="eyebrow">
            RESOURCE
          </span>

          <h3>
            ${escapeHTML(item.title)}
          </h3>

          <p>
            ${escapeHTML(item.text)}
          </p>

          <a class="button" href="${escapeHTML(item.url)}">
            ${escapeHTML(item.button)}
            <span>›</span>
          </a>

        </article>
      `).join("");
  }

  const rules = document.querySelector("[data-rules]");

  if (rules) {
    rules.innerHTML =
      SITE_CONFIG.rules.map((rule, index) => `
        <article class="rule">

          <div class="rule-num">
            ${String(index + 1).padStart(2, "0")}
          </div>

          <div>

            <h3>
              ${escapeHTML(rule.title)}
            </h3>

            <p>
              ${escapeHTML(rule.text)}
            </p>

          </div>

        </article>
      `).join("");
  }
}

document.addEventListener("DOMContentLoaded", renderCommon);
