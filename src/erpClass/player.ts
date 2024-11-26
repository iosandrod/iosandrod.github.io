const { Schema, type } = require("@colyseus/schema");

class Player extends Schema {
    // 玩家用户名
    @type("string") username = "";

    // 玩家分数
    @type("number") score = 0;

    // 玩家生命值
    @type("number") health = 100;

    // 玩家是否在线
    @type("boolean") isOnline = true;

    // 玩家位置 (x, y 坐标)
    @type("number") positionX = 0;
    @type("number") positionY = 0;
    // 初始化玩家
    constructor(username) {
        super();
        this.username = username || "Unnamed Player";
    }
}

module.exports = Player;
