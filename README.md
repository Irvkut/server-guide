# Server Guide 2.0

A multi-page PS3 Store / XMB-inspired game server directory.

## Main configuration

Almost everything is controlled from:

    js/config.js

You can configure:

- Website name
- Tagline
- Navigation
- Servers
- Server IPs
- Player counts
- Maps
- Game modes
- Server status
- Server artwork
- Featured servers
- Server tags
- Discord
- Steam
- GitHub
- Downloads
- Rules
- News

## Adding a server

Edit:

    js/config.js

Find:

    servers: [

Copy an existing server object and add a comma before it.

## Server detail pages

Servers are accessed using:

    server.html?id=combine-war

The server cards automatically create these links.

## Steam connection

Online servers automatically use:

    steam://connect/IP:PORT

## Local testing

Run:

    python3 -m http.server 8080

Then open:

    http://localhost:8080

## GitHub Pages

The site is static and works with GitHub Pages.

No backend is required for the basic site.

## Future live status

The status system currently uses configuration values.

It can later be connected to a server-status API so that:

- player counts
- maps
- online/offline state
- server latency
- uptime

can update automatically.
