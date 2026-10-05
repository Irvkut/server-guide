# Server Guide

Multi-page static server guide with a PS3/XMB-inspired interface.

## Configuration

Most changes happen in:

    js/config.js

You can configure:

- Site name
- Tagline
- Navigation
- Servers
- Server IPs
- Server status
- Maps
- Player counts
- Community links
- Downloads
- Rules
- Home information panels

## Adding a server

Open:

    js/config.js

Find:

    servers: [

Copy an existing server object and change its values.

## Server icons

You can use text:

    icon: "CW"

or an image:

    icon: "images/servers/combine-war.png"

## Preview locally

Run:

    python3 -m http.server 8080

Then open:

    http://localhost:8080

## GitHub Pages

This project works directly with GitHub Pages.
