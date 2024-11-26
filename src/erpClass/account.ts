/*
//账套类
*/

import { ExtractUserData, ExtractAuthData } from "@colyseus/core/build/Room";
import { MapSchema } from "@colyseus/schema";
import { Client, Room } from "colyseus";
import { IncomingMessage } from "http";

export class Account extends Room {//
    maxClients: number = 3
    players: MapSchema = new MapSchema()//
    onCreate(options: any): void | Promise<any> {

    }
    async onAuth(client: Client<ExtractUserData<this["clients"]>, ExtractAuthData<this["clients"]>>, options: any, request?: IncomingMessage) {
        // console.log('onAuth')//
        return true//
    }
    async onJoin(client: Client<ExtractUserData<this["clients"]>, ExtractAuthData<this["clients"]>>, options?: any, auth?: ExtractAuthData<this["clients"]>): Promise<any> {
        return true//
    }
    async addPlayer(client) {

    }
    setState(newState: any): void {
        console.log(this.state, 'testState')//
    }
}
//
//用户行为分析//