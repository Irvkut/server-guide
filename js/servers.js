document.addEventListener("DOMContentLoaded", () => {

  const target = document.querySelector("[data-server-list]");

  if (!target) return;

  target.innerHTML =
    SITE_CONFIG.servers
      .map(serverCard)
      .join("");

});
