/**
 * IMPORTANT:
 * ---------
 * Do not manually edit this file if you'd like to host your server on Colyseus Cloud
 *
 * If you're self-hosting (without Colyseus Cloud), you can manually
 * instantiate a Colyseus Server as documented here:
 *
 * See: https://docs.colyseus.io/server/api/#constructor-options
 */
// import { listen } from "@colyseus/tools";
// // Import arena config
// import appConfig from "./app.config";
// // Create and listen on 2567 (or PORT environment variable.)
import { createServer } from 'http'
import { Server, } from "colyseus";
import express from "express";

// listen(appConfig);
let server = new Server({
    devMode: true,//
})//
const app = express();
app.use('/test', async (req, res, next) => {//
    res.send('test')//
})
server.attach({
    server: createServer(app),
})
server.listen(2567);//