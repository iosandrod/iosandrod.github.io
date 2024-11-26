import { matchMaker } from 'colyseus'

export async function run() {
    const user = await matchMaker.joinOrCreate("account", {
        userName: "xiaofeng",
        password: "123456",
        token: "token"
    })
    // console.log(matchMaker.processId)
    // console.log(user.sessionId, ' is join user')//l
    // console.log(user.sessionId, 'testId')//
    //
    const user2 = await matchMaker.joinOrCreate("account", {
        userName: "xiaofeng",
        password: "123456",
        token: "token"
    })
    // const stats = await matchMaker.stats.fetchAll();
    // console.log(stats, 'test111')
    // console.log(user2.sessionId, 'testId')
    // console.log(user2.sessionId, ' is join user2')
}