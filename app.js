const nsfw = require('nsfw');

let watcher1;
const dirToWatch = __dirname + '/dir-to-watch';
return nsfw(
    dirToWatch,
    function(events) {
        console.log("events captured::::", events);
    })
    .then(function(watcher) {
        console.log("About to start watching dir-to-watch folder....");
        watcher1 = watcher;
        return watcher.start();
    })
    .then(function(param) {        
        // To stop watching
        // watcher1.stop();
    }
);