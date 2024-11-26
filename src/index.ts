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
import { listen } from "@colyseus/tools";


import { createServer } from 'http'
import { Server, Room, Client, ClientArray, matchMaker } from "colyseus";
import express from "express";
import { Router } from 'express'
// import { ChatRoom } from './rooms/01-chat-room';
import { Account } from './erpClass/account';
import { run } from "./clients";
import appConfig from "./app.config";
// listen(appConfig)//
setTimeout(() => {
    // run()//
}, 1000);
async function fn1() {
    const r = Router()

    // .enableRealtimeListing()//
    r.post('/addRoom', (req, res) => {//
        res.send('room is create')//
    })//
    r.get('/', (req, res) => {
        res.send('testget')
    })//
    const app = express();
    //
    app.use(async (req, res, next) => {//
        await next()//
    })//
    app.use('/', r)//
    // server.attach({
    //     server: createServer(app),//
    // })//
    let server = new Server({
        // devMode: true,//
        server: createServer(app),//
    })//
    await server.listen(2567)
    //模拟创建账套//
    //模拟登录//
    await server.define(`account`, Account, {
    }).enableRealtimeListing()//
    await matchMaker.createRoom("account", {})//
    setTimeout(async () => {//
        await run()//
    }, 100);//
}////
fn1()
