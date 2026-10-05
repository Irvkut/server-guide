function escapeHTML(value) {

  return String(value ?? "").replace(
    /[&<>"']/g,

    char => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"
    }[char])
  );

}


function getServer(id) {

  return SITE_CONFIG.servers.find(
    server => server.id === id
  );

}


function serverIcon(server) {

  if (
    server.icon &&
    (
      server.icon.includes("/") ||
      server.icon.includes(".")
    )
  ) {

    return `
      <img
        src="${escapeHTML(server.icon)}"
        alt=""
      >
    `;

  }

  return escapeHTML(
    server.icon || "SV"
  );

}


function serverCard(server) {

  const online =
    String(server.status).toLowerCase() === "online";

  return `

    <article
      class="server-card ${online ? "online" : "offline"} ${server.featured ? "featured" : ""}"
      data-server-name="${escapeHTML(server.name)}"
      data-server-mode="${escapeHTML(server.mode)}"
      data-server-status="${online ? "online" : "offline"}"
    >

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

        <div class="server-status">

          <span class="status-dot"></span>

          ${online ? "ONLINE" : "OFFLINE"}

        </div>

      </div>


      <div class="server-meta">

        <div class="meta">
          <small>GAME</small>
          <span>${escapeHTML(server.game)}</span>
        </div>

        <div class="meta">
          <small>MODE</small>
          <span>${escapeHTML(server.mode)}</span>
        </div>

        <div class="meta">
          <small>PLAYERS</small>
          <span>${escapeHTML(server.players)}</span>
        </div>

      </div>


      <div class="server-actions">

        <span class="server-address">
          ${escapeHTML(server.address)}
        </span>

        <a
          class="connect-button"
          href="${online ? `steam://connect/${server.address}` : `server.html?id=${encodeURIComponent(server.id)}`}"
        >
          ${online ? "CONNECT" : "VIEW SERVER"}
        </a>

      </div>

    </article>

  `;

}


function renderNavigation() {

  const target =
    document.querySelector("[data-nav]");

  if (!target) return;

  const current =
    document.body.dataset.page;

  target.innerHTML =
    SITE_CONFIG.navigation
      .map(item => `

        <a
          class="${item.key === current ? "active" : ""}"
          href="${item.page}"
        >
          ${escapeHTML(item.name)}
        </a>

      `)
      .join("");

}


function renderBranding() {

  document
    .querySelectorAll("[data-site-name]")
    .forEach(
      el =>
        el.textContent =
          SITE_CONFIG.site.name
    );

  document
    .querySelectorAll("[data-site-tagline]")
    .forEach(
      el =>
        el.textContent =
          SITE_CONFIG.site.tagline
    );

  document
    .querySelectorAll("[data-site-mark]")
    .forEach(
      el =>
        el.textContent =
          SITE_CONFIG.site.mark
    );


  const footer =
    document.querySelector("[data-footer]");

  if (footer) {

    footer.innerHTML = `

      <span>
        ${escapeHTML(
          SITE_CONFIG.site.footer.left
        )}
      </span>

      <span>
        ${escapeHTML(
          SITE_CONFIG.site.footer.right
        )}
      </span>

    `;

  }

}


function renderHome() {

  const featured =
    SITE_CONFIG.servers.filter(
      server => server.featured
    )[0] ||
    SITE_CONFIG.servers[0];

  const label =
    document.querySelector(
      "[data-hero-label]"
    );

  const title =
    document.querySelector(
      "[data-hero-title]"
    );

  const description =
    document.querySelector(
      "[data-hero-description]"
    );

  const button =
    document.querySelector(
      "[data-hero-button]"
    );

  const art =
    document.querySelector(
      "[data-hero-art]"
    );


  if (featured) {

    if (label)
      label.textContent =
        "FEATURED SERVER";

    if (title)
      title.textContent =
        featured.name;

    if (description)
      description.textContent =
        featured.longDescription ||
        featured.description;

    if (button) {

      button.href =
        `server.html?id=${encodeURIComponent(featured.id)}`;

      button.textContent =
        "VIEW SERVER";

    }

    if (art)
      art.textContent =
        featured.shortName ||
        featured.icon ||
        "SV";

  }


  const carousel =
    document.querySelector(
      "[data-server-carousel]"
    );

  if (carousel) {

    carousel.innerHTML =
      SITE_CONFIG.servers
        .map(serverCard)
        .join("");

  }


  const news =
    document.querySelector(
      "[data-home-news]"
    );

  if (news) {

    news.innerHTML =
      SITE_CONFIG.news
        .slice(0,3)
        .map(newsCard)
        .join("");

  }

}


function newsCard(item) {

  return `

    <article class="news-card">

      <div class="news-date">
        ${escapeHTML(item.date)}
        ·
        ${escapeHTML(item.category)}
      </div>

      <h3>
        ${escapeHTML(item.title)}
      </h3>

      <p>
        ${escapeHTML(item.text)}
      </p>

    </article>

  `;

}


function renderCommunity() {

  const target =
    document.querySelector(
      "[data-community]"
    );

  if (!target) return;

  target.innerHTML =
    SITE_CONFIG.community
      .map(item => `

        <article class="content-card">

          <span class="eyebrow">
            COMMUNITY
          </span>

          <h3>
            ${escapeHTML(item.title)}
          </h3>

          <p>
            ${escapeHTML(item.description)}
          </p>

          <a
            class="store-button"
            href="${escapeHTML(item.url)}"
          >
            ${escapeHTML(item.button)}
            <span>›</span>
          </a>

        </article>

      `)
      .join("");

}


function renderDownloads() {

  const target =
    document.querySelector(
      "[data-downloads]"
    );

  if (!target) return;

  target.innerHTML =
    SITE_CONFIG.downloads
      .map(item => `

        <article class="content-card">

          <span class="eyebrow">
            RESOURCE
          </span>

          <h3>
            ${escapeHTML(item.title)}
          </h3>

          <p>
            ${escapeHTML(item.description)}
          </p>

          <a
            class="store-button"
            href="${escapeHTML(item.url)}"
          >
            ${escapeHTML(item.button)}
            <span>›</span>
          </a>

        </article>

      `)
      .join("");

}


function renderRules() {

  const target =
    document.querySelector(
      "[data-rules]"
    );

  if (!target) return;

  target.innerHTML =
    SITE_CONFIG.rules
      .map((rule,index) => `

        <article class="rule">

          <div class="rule-number">
            ${String(index + 1).padStart(2,"0")}
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

      `)
      .join("");

}


document.addEventListener(
  "DOMContentLoaded",
  () => {

    renderNavigation();
    renderBranding();
    renderHome();
    renderCommunity();
    renderDownloads();
    renderRules();

  }
);
