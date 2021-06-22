const cron = require("node-schedule");
const {exec} = require("./cron/rss");
const cache = require("./cache");

module.exports = {
    async readAndSaveRSS() {
        try {
            let config = cache.get("config");
            let items = await exec(config.rss);

            cache.save("rssItems", items, 600);
        } catch (e) {
            console.log(e)
        }
    },
    async scheduleCron() {
        cron.scheduleJob('*/5 * * * *', async function () {
            await module.exports.readAndSaveRSS()
        });
    }
}