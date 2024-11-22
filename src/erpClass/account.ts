/*
//账套类
*/

import { ExtractUserData, ExtractAuthData } from "@colyseus/core/build/Room";
import { Client, Room } from "colyseus";
import { IncomingMessage } from "http";

export class Account extends Room {//
    onInit(options: any) {//
        console.log(this.clients, 'testClients')//
    }
    onCreate(options: any): void | Promise<any> {
        console.log(options, 'testOptions')//
    }
    async onAuth(client: Client<ExtractUserData<this["clients"]>, ExtractAuthData<this["clients"]>>, options: any, request?: IncomingMessage) {
        console.log('onAuth')//
    }
}
//
//用户行为分析//