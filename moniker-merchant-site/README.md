# Moniker Merchant (Static Site)

This is a simple static site ready for Netlify + GitHub.

## Deploy
1) Create a new GitHub repo (Public) and upload all files in this folder.
2) In Netlify: Add new site → Import from Git → pick this repo.
3) Build command: (leave empty). Publish directory: `.`
4) Set your custom domains and ensure DNS points to Netlify.

## Amazon Associates
- Footer includes the required disclosure text.
- `/js/affiliate.js` automatically appends your tag `monikermercha-20` to any Amazon link that doesn’t already include a tag.