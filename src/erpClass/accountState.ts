import { Schema, MapSchema, ArraySchema, type, defineTypes } from '@colyseus/schema';
import { Player } from '../rooms/02-state-handler';
export class accountState extends Schema {
    @type({ map: Player }) player = new MapSchema<Player>();
    @type("string") name = "";
    @type("number") score = 0;//
}//

