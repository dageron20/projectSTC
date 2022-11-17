const {client, connection} = require("websocket");
const {WebSocketServer} = require("ws");

const server = new WebSocketServer({ port: 3000 })

// server.on('connection', function connection(ws, req) {
//     const ip = req.socket.remoteAddress;
//     // console.log('IP:', ip.replace(/^.*:/, ''))
//
// });

server.on('connection', ws => {
    ws.on('message', msg => {
        msg = JSON.parse(msg)
        switch (msg.method) {
            case "connection":
                connectionHandler(ws, msg)
                break
            case "message":
                ws.send(JSON.stringify(msg))
                break
            default :
                break
        }
    })
    // ws.send('ты успешно зашел')
})

const connectionHandler = (ws, msg) => {
    ws.id = msg.id
    console.log('connectionHandler')
}

// ws.on('message', message => {
//     server.clients.forEach(client => {
//         //client.send(JSON.parse(message.toString()))
//         console.log(JSON.parse(message))
//     })
// })