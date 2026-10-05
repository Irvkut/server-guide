
/*
============================================================
 SERVER GUIDE — AUTHORITATIVE SERVER DATABASE
============================================================

The admin system stores servers in:

    config/servers.json

That file is the authoritative source.

The synchronous load here intentionally happens before
the SITE_CONFIG object is used by main.js, server.js,
status.js, etc. This keeps the existing frontend compatible
while allowing the admin system to control the site.

If the JSON cannot be loaded, the legacy SITE_CONFIG.servers
array remains available as a fallback.
============================================================
*/

let SERVER_DATABASE = null;

try {
    const xhr = new XMLHttpRequest();

    xhr.open(
        "GET",
        "config/servers.json?cache=" + Date.now(),
        false
    );

    xhr.setRequestHeader(
        "Cache-Control",
        "no-cache, no-store, must-revalidate"
    );

    xhr.send(null);

    if (
        xhr.status >= 200 &&
        xhr.status < 300
    ) {
        const parsed =
            JSON.parse(xhr.responseText);

        if (Array.isArray(parsed)) {
            SERVER_DATABASE = parsed;
        }
    }

} catch (error) {

    console.warn(
        "[SERVER GUIDE] Unable to load config/servers.json:",
        error
    );

}

/*
============================================================
 SERVER GUIDE 2.0 CONFIGURATION
============================================================

Most website changes should be made here.

You should NOT normally need to edit the HTML files.

============================================================
*/

const SITE_CONFIG = {

  site: {
    name: "SERVER GUIDE",
    tagline: "Game servers and community connections",
    mark: "SG",

    hero: {
      label: "FEATURED SERVER",
      title: "Combine War",
      description:
        "Enter the battlefield. Choose your side and join the fight.",
      button: "VIEW SERVER"
    },

    footer: {
      left: "SERVER GUIDE",
      right: "© 2026"
    }
  },


  /*
  ==========================================================
  NAVIGATION
  ==========================================================
  */

  navigation: [
    {
      name: "Home",
      page: "index.html",
      key: "home"
    },
    {
      name: "Servers",
      page: "servers.html",
      key: "servers"
    },
    {
      name: "Community",
      page: "community.html",
      key: "community"
    },
    {
      name: "News",
      page: "news.html",
      key: "news"
    },
    {
      name: "Status",
      page: "status.html",
      key: "status"
    },
    {
      name: "Downloads",
      page: "downloads.html",
      key: "downloads"
    },
    {
      name: "Rules",
      page: "rules.html",
      key: "rules"
    }
  ],


  /*
  ==========================================================
  SERVERS
  ==========================================================
  */

  servers: [

    {
      id: "combine-war",

      name: "Combine War",

      shortName: "CW",

      description:
        "Combine vs Rebels",

      longDescription:
        "A large-scale Combine versus Rebel warfare experience featuring objective-based combat and multiple game modes.",

      game:
        "Garry's Mod",

      mode:
        "Conquest",

      map:
        "Configure Me",

      players:
        "Configure Me",

      maxPlayers:
        "64",

      address:
        "YOUR.SERVER.IP:27015",

      status:
        "online",

      featured:
        true,

      icon:
        "CW",

      artwork:
        "",

      tags: [
        "Conquest",
        "Combine",
        "Rebels",
        "Garry's Mod"
      ],

      links: {
        workshop: "#",
        discord: "#",
        steam: "#"
      }
    }

    /*
    ==========================================================
    ADD ANOTHER SERVER LIKE THIS
    ==========================================================

    ,{

      id: "second-server",

      name: "Second Server",

      shortName: "S2",

      description:
        "Your second server",

      longDescription:
        "Description of your second server.",

      game:
        "Garry's Mod",

      mode:
        "TDM",

      map:
        "gm_construct",

      players:
        "0 / 32",

      maxPlayers:
        "32",

      address:
        "123.123.123.123:27015",

      status:
        "online",

      featured:
        false,

      icon:
        "S2",

      artwork:
        "",

      tags: [
        "TDM",
        "Garry's Mod"
      ],

      links: {
        workshop: "#",
        discord: "#",
        steam: "#"
      }
    }

    ==========================================================
    */
  ],


  /*
  ==========================================================
  NEWS
  ==========================================================
  */

  news: [

    {
      date: "2026-10-05",
      category: "SERVER GUIDE",
      title: "Server Guide 2.0",
      text:
        "The server guide has received a complete storefront-inspired redesign."
    },

    {
      date: "2026-10-01",
      category: "COMBINE WAR",
      title: "Development Update",
      text:
        "Development continues on the Combine War experience."
    }

  ],


  /*
  ==========================================================
  COMMUNITY
  ==========================================================
  */

  community: [

    {
      title: "Discord",
      description:
        "Join the community for announcements, events and discussion.",
      button:
        "OPEN DISCORD",
      url:
        "#"
    },

    {
      title: "Steam",
      description:
        "Find the community and related Steam content.",
      button:
        "OPEN STEAM",
      url:
        "#"
    },

    {
      title: "GitHub",
      description:
        "Follow development and browse the project's source.",
      button:
        "OPEN GITHUB",
      url:
        "https://github.com/Irvkut/server-guide"
    }

  ],


  /*
  ==========================================================
  DOWNLOADS
  ==========================================================
  */

  downloads: [

    {
      title: "Workshop Collection",
      description:
        "Required or recommended Steam Workshop content.",
      button:
        "OPEN WORKSHOP",
      url:
        "#"
    },

    {
      title: "Required Content",
      description:
        "Client-side files and other required downloads.",
      button:
        "DOWNLOAD",
      url:
        "#"
    },

    {
      title: "Installation Guide",
      description:
        "Instructions for getting everything ready to play.",
      button:
        "READ GUIDE",
      url:
        "index.html"
    }

  ],


  /*
  ==========================================================
  RULES
  ==========================================================
  */

  rules: [

    {
      title:
        "Respect Other Players",

      text:
        "Do not harass, threaten, or intentionally disrupt other players."
    },

    {
      title:
        "No Cheating",

      text:
        "Cheats, unauthorized scripts, exploits and unfair modifications are prohibited."
    },

    {
      title:
        "Follow Staff Instructions",

      text:
        "Reasonable staff instructions must be followed while an issue is being handled."
    },

    {
      title:
        "Use Common Sense",

      text:
        "Do not deliberately abuse loopholes or ruin the experience for other players."
    }

  ]

};


/*
============================================================
 AUTHORITATIVE SERVER OVERRIDE
============================================================
*/

if (
    Array.isArray(SERVER_DATABASE) &&
    Array.isArray(SITE_CONFIG.servers)
) {
    SITE_CONFIG.servers =
        SERVER_DATABASE;
}

window.ServerGuide =
    window.ServerGuide || {};

window.ServerGuide.servers =
    SITE_CONFIG.servers;

console.info(
    "[SERVER GUIDE] Loaded " +
    SITE_CONFIG.servers.length +
    " server(s) from config/servers.json"
);
