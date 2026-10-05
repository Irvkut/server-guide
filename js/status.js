document.addEventListener("DOMContentLoaded", () => {

  const target = document.querySelector("[data-status-list]");

  if (!target) return;

  target.innerHTML =
    SITE_CONFIG.servers.map(server => {

      const online =
        String(server.status).toLowerCase() === "online";

      return `
        <article class="status-card">

          <div>

            <div class="status-title">
              ${escapeHTML(server.name)}
            </div>

            <div class="status-details">

              <span>
                ${escapeHTML(server.game)}
              </span>

              <span>
                ${escapeHTML(server.mode)}
              </span>

              <span>
                ${escapeHTML(server.players)}
              </span>

              <span>
                ${escapeHTML(server.map)}
              </span>

            </div>

          </div>

          <span class="status-badge ${online ? "" : "offline"}">
            ${online ? "Operational" : "Offline"}
          </span>

        </article>
      `;

    }).join("");

});
