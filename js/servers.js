document.addEventListener("DOMContentLoaded", () => {

  const target =
    document.querySelector(
      "[data-server-list]"
    );

  if (!target) return;


  function render() {

    target.innerHTML =
      SITE_CONFIG.servers
        .map(serverCard)
        .join("");

  }


  render();


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
          card.dataset.serverName
            .toLowerCase();

        const mode =
          card.dataset.serverMode
            .toLowerCase();

        const status =
          card.dataset.serverStatus;


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

});
