import config from "@colyseus/tools";
import { monitor } from "@colyseus/monitor";
import { playground } from "@colyseus/playground";
import { auth } from "@colyseus/auth";
import path from 'path';
import serveIndex from 'serve-index';
import express from 'express';

// import { uWebSocketsTransport} from "@colyseus/uwebsockets-transport";
import "./config/auth";

// Import demo room handlers
import { LobbyRoom, RelayRoom } from 'colyseus';
import { ChatRoom } from "./rooms/01-chat-room";
import { StateHandlerRoom } from "./rooms/02-state-handler";
import { AuthRoom } from "./rooms/03-auth";
import { ReconnectionRoom } from './rooms/04-reconnection';
import { CustomLobbyRoom } from './rooms/07-custom-lobby-room';

export default config({
    options: {
        devMode: true,
    },
    initializeGameServer: (gameServer) => {
        gameServer.define("lobby", LobbyRoom);//定义房间?//
        gameServer.define("relay", RelayRoom, { maxClients: 4 })
            .enableRealtimeListing();//
        gameServer.define("chat", ChatRoom)
            .enableRealtimeListing();
        gameServer.define("chat_with_options", ChatRoom, {
            custom_options: "you can use me on Room#onCreate"
        });
        gameServer.define("state_handler", StateHandlerRoom)
            .enableRealtimeListing();
        gameServer.define("auth", AuthRoom)
            .enableRealtimeListing();
        gameServer.define("reconnection", ReconnectionRoom)
            .enableRealtimeListing();
        gameServer.define("custom_lobby", CustomLobbyRoom);
        gameServer.onShutdown(function () {
            console.log(`game server is going down.`);
        });
    },
    initializeExpress: (app) => {
        app.use(auth.prefix, auth.routes());
        app.use('/playground', playground);
        app.use('/colyseus', monitor());
        app.use('/test', async (req, res, next) => {
            await next()//
            res.send('hello world')//
        })
        app.use('/', serveIndex(path.join(__dirname, "static"), { 'icons': true }))
        app.use('/', express.static(path.join(__dirname, "static")));
    },
    beforeListen: () => {
        /**
         * Before before gameServer.listen() is called.
         */
    }
});
