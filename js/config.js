const SITE_CONFIG = {
  site: {
    name: "SERVER GUIDE",
    tagline: "Game servers and community connections",
    mark: "SG",
    heroLabel: "WELCOME",
    heroTitle: "Choose a server",
    heroDescription: "Select a server below to connect directly through Steam.",
    footerLeft: "SERVER GUIDE",
    footerRight: "© 2026"
  },

  navigation: [
    { name: "Home", page: "index.html" },
    { name: "Servers", page: "servers.html" },
    { name: "Community", page: "community.html" },
    { name: "Rules", page: "rules.html" },
    { name: "Status", page: "status.html" },
    { name: "Downloads", page: "downloads.html" }
  ],

  servers: [
    {
      name: "Combine War",
      description: "Combine vs Rebels",
      game: "Garry's Mod",
      mode: "Conquest",
      map: "Configure me",
      players: "Configure me",
      address: "YOUR.SERVER.IP:27015",
      status: "online",
      icon: "CW"
    }

    /*
    Add more servers like this:

    ,{
      name: "Second Server",
      description: "Your description",
      game: "Garry's Mod",
      mode: "TDM",
      map: "gm_construct",
      players: "0 / 32",
      address: "123.123.123.123:27015",
      status: "online",
      icon: "S2"
    }
    */
  ],

  information: [
    {
      title: "How To Connect",
      text: "Select Connect on an available server. Steam will open the game and attempt to join automatically."
    },
    {
      title: "Need Help?",
      text: "If Steam does not launch, copy the server address and connect manually through the game's console."
    },
    {
      title: "Community",
      text: "Join the community for announcements, updates, events, and other players."
    }
  ],

  community: [
    {
      title: "Discord",
      text: "Add your Discord invite here.",
      button: "OPEN DISCORD",
      url: "#"
    },
    {
      title: "Steam",
      text: "Add your Steam group here.",
      button: "OPEN STEAM",
      url: "#"
    },
    {
      title: "GitHub",
      text: "Add your project repository here.",
      button: "OPEN GITHUB",
      url: "https://github.com/Irvkut/server-guide"
    }
  ],

  downloads: [
    {
      title: "Workshop Collection",
      text: "Add your Steam Workshop collection here.",
      button: "OPEN WORKSHOP",
      url: "#"
    },
    {
      title: "Required Content",
      text: "List required downloads or client-side files here.",
      button: "DOWNLOAD",
      url: "#"
    },
    {
      title: "Server Guide",
      text: "Keep setup instructions and useful resources here.",
      button: "MORE INFO",
      url: "index.html"
    }
  ],

  rules: [
    {
      title: "Respect Other Players",
      text: "Do not harass, threaten, or intentionally disrupt other players."
    },
    {
      title: "No Cheating",
      text: "Do not use cheats, exploits, scripts, or unauthorized tools that provide an unfair advantage."
    },
    {
      title: "Follow Staff Instructions",
      text: "Reasonable staff instructions must be followed while an issue is being handled."
    },
    {
      title: "Use Common Sense",
      text: "Do not deliberately abuse loopholes or ruin the experience for other players."
    }
  ]
};
