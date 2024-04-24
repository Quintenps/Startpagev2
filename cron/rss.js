let Parser = require('rss-parser');
let parser = new Parser();

module.exports = {
    /*
    Fetches RSS feed from link array
    Sorts the total feed by date (newest first) and take the first 20 items ()
     */
    async exec(urls) {
        console.log("Running cron")
        let rssItems = [];

        for (const url of Object.values(urls)) {
            try {
                console.log("Reading RSS Feed "+ url)
                let feed = await parser.parseURL(url);
                for (const item of feed.items) {
                    rssItems.push({title: item.title, link: item.link, pubDate: item.pubDate})
                }
            } catch (e) {
                console.log("Error parsing XML from URL " + url)
                console.log(e);
            }
        }

        rssItems.sort(function(a, b) {
            const c = new Date(a.pubDate);
            const d = new Date(b.pubDate);
            return d-c;
        });

        return rssItems.slice(0,18);
    }
}