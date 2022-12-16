const {client, connection} = require("websocket");
const {WebSocketServer} = require("ws");
const req = require("websocket/lib/WebSocketClient");

const server = new WebSocketServer({ port: 9399 })

const clients = {};
var counter = 0
const message = {};

server.on('connection', function connection(ws, req) {
    clients[req.headers.origin] = ws
    console.log('зашел')
    ws.on('message', msg => {
        msg = JSON.parse(msg)
        const ip = req.socket.remoteAddress.replace(/^.*:/, '');
        msg.ipCurr = ip
        // console.log(msg)
        switch (msg.method) {
            case "sendMessage":
                console.log('sendMessage')
                sendMsgToIp(ws, req, msg)
                break
            case "getMessage":
                console.log('getMessage')
                getMsgToIp(ws, req, msg)
                break
            default :
                break
        }
    })
 // ws.send('ты успешно зашел')
// const ip = req.socket.remoteAddress.replace(/^.*:/, '');
//console.log('IP:', ip)
// console.log(': ', server.clients)
})


const sendMsgToIp = (ws, req, msg) => {
    const ip = req.socket.remoteAddress.replace(/^.*:/, '');
    msg.ipSender = ip
// console.log(`IpMsg:${msg.ip} IpCurr: ${ip}`)
    console.log("sendMsgToIp")
// console.log(req.headers.origin);
    const wss = clients[`http://${msg.ipRecipient}:8080`];
    // console.log("CLIENTS: ", clients)
    console.log("==================================================================")
    console.log("IP RECIPIENT: ", msg.ipRecipient)
    // console.log("IP ipSender: ", msg.ipSender)
    // console.log(wss)
    wss?.send(JSON.stringify(msg));
    message[counter] = msg
    // console.log(message[counter])
    counter++

}

const getMsgToIp = (ws, req) => {

}
