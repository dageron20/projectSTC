const {client, connection} = require("websocket");
const {WebSocketServer} = require("ws");
const req = require("websocket/lib/WebSocketClient");

const server = new WebSocketServer({ port: 3000 })

// server.on('connection', function connection(ws, req) {
//     const ip = req.socket.remoteAddress;
//     console.log('IP:', ip.replace(/^.*:/, ''))
//
// });

server.on('connection', function connection(ws, req) {
    ws.on('message', msg => {
        msg = JSON.parse(msg);

        switch (msg.method) {
            case "connection":
                connectionHandler(ws, msg)
                break
            case "message":
                sendMsgToIp(ws, req, msg)
                break
            default:
                break
        }
    })
    // ws.send('ты успешно зашел')
    // const ip = req.socket.remoteAddress.replace(/^.*:/, '');
    // console.log('IP:', ip)
})

const connectionHandler = (ws, msg) => {
    ws.id = msg.id
    // console.log('connectionHandler')
}

const sendMsgToIp = (ws, req, msg) => {
    const ip = req.socket.remoteAddress.replace(/^.*:/, '');
    if(msg.ip === ip) {
        ws.send(JSON.stringify(msg))
        console.log("sendMsgToIp")
    }
}

// ws.on('message', message => {
//     server.clients.forEach(client => {
//         //client.send(JSON.parse(message.toString()))
//         console.log(JSON.parse(message))
//     })
// })