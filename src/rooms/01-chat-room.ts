import { ExtractUserData, ExtractAuthData } from "@colyseus/core/build/Room";
import { Client, Room } from "colyseus";

export class ChatRoom extends Room {
    // this room supports only 4 clients connected
    maxClients = 4;

    onCreate(options) {
        console.log("ChatRoom created!", options);

        this.onMessage("message", (client, message) => {
            console.log("ChatRoom received message from", client.sessionId, ":", message);
            this.broadcast("messages", `(${client.sessionId}) ${message}`);
        });
    }//
    // onJoin (client) {
    //     this.broadcast("messages", `${ client.sessionId } joined.`);
    // }
    onJoin(client: Client<ExtractUserData<this["clients"]>, ExtractAuthData<this["clients"]>>, options?: any, auth?: ExtractAuthData<this["clients"]>): void | Promise<any> {
        // console.log(auth);
        this.broadcast("messages", `${client.sessionId} joined.`);//
    }
    onLeave(client) {
        this.broadcast("messages", `${client.sessionId} left.`);
    }//
    onDispose(): void | Promise<any> {

    }
}
