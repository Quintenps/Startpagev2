const NodeCache = require( "node-cache" );
const nodeCacheClient = new NodeCache();

module.exports = {
    save(key, item, ttl) {
        nodeCacheClient.set(key, item, ttl);
    },

    get(key) {
        return nodeCacheClient.get(key);
    },
}