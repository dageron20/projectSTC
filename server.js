const {client, connection} = require("websocket");
const {WebSocketServer} = require("ws");
const req = require("websocket/lib/WebSocketClient");

const server = new WebSocketServer({ port: 3000 })

server.on('connection', function connection(ws, req) {
    ws.on('message', msg => {
        msg = JSON.parse(msg)
        const ip = req.socket.remoteAddress.replace(/^.*:/, '');
        msg.ipCurr = ip
        switch (msg.method) {
            case "message":
                sendMsgToIp(ws, req, msg)
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
    server.clients.forEach(client => {
        client.send(JSON.stringify(msg))
    })
}
