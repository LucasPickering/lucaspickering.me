---
title: Laulud
date: 2021-04-06
summary: Ever wanted to assign tags to tracks, albums, and artists in Spotify? No? Well I have because I'm neurotic. Laulud is a simple site to browse and tag Spotify items.
banner: /assets/laulud/banner.png
links:
  {
    Code: "https://github.com/LucasPickering/laulud",
    Site: "https://laulud.lucaspickering.me",
  }
tags:
  - post
  - project
  - rust
  - typescript
  - spotify
---

## What is it?

Laulud is a simple site that lets you assign custom tags to tracks, albums, and artists from Spotify. Log in through Spotify, and all the tags will be attached to your Spotify account.

The site is pretty simple, not much more to explain about it. Click the link at the top of the post to try it out.

## Is it safe? What data do you store?

The **only** user data that Laulud stores is your account ID, which is public anyway. When you log in, Spotify will tell you that the site is requesting more data than that (your name, username, profile picture, etc.). That is the _minimum_ amount of data we can request from Spotify, none of it other than the account ID ever gets used or stored.
