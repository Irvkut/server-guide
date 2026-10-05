document.addEventListener("DOMContentLoaded", async () => {

  const target =
    document.querySelector("[data-server-list]");

  if (!target) return;


  /*
   * Load the authoritative server database.
   *
   * config/servers.json is managed by the admin system.
   * SITE_CONFIG.servers remains as a fallback so the
   * website still works if the JSON file cannot be loaded.
   */

  let servers = [];

  try {

    const response =
      await fetch(
        "config/servers.json?cache=" +
        Date.now()
      );

    if (!response.ok) {
      throw new Error(
        "HTTP " + response.status
      );
    }

    const data =
      await response.json();

    if (!Array.isArray(data)) {
      throw new Error(
        "servers.json is not an array"
      );
    }

    servers = data;

  } catch (error) {

    console.warn(
      "[Server Guide] Could not load config/servers.json:",
      error
    );

    servers =
      Array.isArray(SITE_CONFIG.servers)
        ? SITE_CONFIG.servers
        : [];

  }


  function render() {

    target.innerHTML =
      servers
        .map(serverCard)
        .join("");

    applyFilters();

  }


  const search =
    document.querySelector(
      "[data-server-search]"
    );


  const filterButtons =
    document.querySelectorAll(
      "[data-filter]"
    );


  let filter =
    "all";


  function applyFilters() {

    const query =
      (search?.value || "")
        .toLowerCase()
        .trim();


    target
      .querySelectorAll(".server-card")
      .forEach(card => {

        const name =
          (
            card.dataset.serverName || ""
          ).toLowerCase();


        const mode =
          (
            card.dataset.serverMode || ""
          ).toLowerCase();


        const status =
          (
            card.dataset.serverStatus || ""
          ).toLowerCase();


        const matchesSearch =
          !query ||
          name.includes(query) ||
          mode.includes(query);


        const matchesFilter =
          filter === "all" ||
          filter === status ||
          filter === mode;


        card.style.display =
          matchesSearch && matchesFilter
            ? ""
            : "none";

      });

  }


  search?.addEventListener(
    "input",
    applyFilters
  );


  filterButtons.forEach(button => {

    button.addEventListener(
      "click",
      () => {

        filter =
          button.dataset.filter;

        filterButtons.forEach(
          b =>
            b.classList.toggle(
              "active",
              b === button
            )
        );

        applyFilters();

      }
    );

  });


  /*
   * Initial render.
   */

  render();

});
