# Quinten's Startpage v2
For anyone that finds this useful or likes to geek out. This repo is a rewrite of [my old startpage](https://github.com/Quintenps/Startpage).


## Features
- JSON Config file for RSS Links and Quicklinks
- Light/Dark colorscheme (based on [prefers-color-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme))
- RSS Reader
- Cron (node-schedule) and cache (node-cache)

## Installation
- Copy sample.config.json to config.json and configure it to your liking.
- Run the docker image
` docker run --name startpage -v ${PWD}/config.json:/usr/src/app/config.json -p 80:3000 quintenps/startpage`

## Preview
![Imgur](https://i.imgur.com/Pqfjdhw.png)
![Imgur](https://i.imgur.com/NBPdfCZ.png)