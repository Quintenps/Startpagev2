# Quinten's Startpage v2
For anyone that finds this useful or likes to geek out. This repo is a rewrite of [my old startpage](https://github.com/Quintenps/Startpage).


## Features
- JSON Config file for RSS Links and Quicklinks
- Light & Dark colorscheme (Toggle with **minus** key) 
- RSS Reader
- Cron (node-schedule) and cache (node-cache)
- Notes (Toggle with **N** key)
- No bloated css/js

## Installation
- Copy sample.config.json to config.json and configure it to your liking.
- Run the docker image
` docker run --name startpage -v ${PWD}/config.json:/usr/src/app/config.json -p 80:3000 quintenps/startpage`

## Preview
![Imgur](https://i.imgur.com/yoOFanL.jpg)
![Imgur](https://i.imgur.com/LhxqXS7.jpg)
![Imgur](https://i.imgur.com/5K0mGc7.gif)