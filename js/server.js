document.addEventListener("DOMContentLoaded", () => {

  const params =
    new URLSearchParams(
      window.location.search
    );

  const id =
    params.get("id");


  const server =
    getServer(id) ||
    SITE_CONFIG.servers[0];


  if (!server) return;


  const online =
    String(server.status)
      .toLowerCase() === "online";


  const set =
    (selector,value) => {

      const element =
        document.querySelector(selector);

      if (element)
        element.textContent =
          value;

    };


  set(
    "[data-detail-name]",
    server.name
  );

  set(
    "[data-detail-description]",
    server.longDescription ||
      server.description
  );

  set(
    "[data-detail-icon]",
    server.shortName ||
      server.icon ||
      "SV"
  );

  set(
    "[data-detail-game]",
    server.game
  );

  set(
    "[data-detail-mode]",
    server.mode
  );

  set(
    "[data-detail-map]",
    server.map
  );

  set(
    "[data-detail-players]",
    server.players
  );

  set(
    "[data-detail-address]",
    server.address
  );


  const connect =
    document.querySelector(
      "[data-detail-connect]"
    );


  if (connect) {

    connect.href =
      `steam://connect/${server.address}`;

    connect.textContent =
      online
        ? "CONNECT TO SERVER ›"
        : "SERVER OFFLINE";

    connect.style.opacity =
      online ? "1" : ".45";

  }


  const tags =
    document.querySelector(
      "[data-detail-tags]"
    );


  if (tags) {

    tags.innerHTML =
      (server.tags || [])
        .map(
          tag =>
            `<span class="tag">${escapeHTML(tag)}</span>`
        )
        .join("");

  }


  document.title =
    `${server.name} — SERVER GUIDE`;

});
