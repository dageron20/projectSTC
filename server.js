const {client, connection} = require("websocket");
const {WebSocketServer} = require("ws");
const req = require("websocket/lib/WebSocketClient");

const server = new WebSocketServer({ port: 9399 })
<<<<<<< HEAD

const clients = {};

server.on('connection', function connection(ws, req) {
    clients[req.headers.origin] = ws
    console.log('зашел')
=======

const clients = {};

server.on('connection', function(ws, req) {
    clients[req.headers.origin] = ws
    console.log("req.headers.origin: " + req.headers.origin)
>>>>>>> caskey99
    ws.on('message', msg => {
        msg = JSON.parse(msg)
        const ip = req.socket.remoteAddress.replace(/^.*:/, '');
        msg.ipCurr = ip
<<<<<<< HEAD
        console.log(msg)
=======
        console.log("ipCurr: " + ip)
>>>>>>> caskey99
        switch (msg.method) {
            case "message":
                console.log('message ')
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
<<<<<<< HEAD
// console.log(`IpMsg:${msg.ip} IpCurr: ${ip}`)
    console.log("sendMsgToIp")
// console.log(ws);
// console.log(req.headers.origin);
// console.log(msg);
// console.log(clients);
    const wss = clients[`http://${msg.ipRecipient}:8080`];
    console.log("CLIENTS: ", clients)
    console.log("==================================================================")
    console.log("IP RECIPIENT: ", msg.ipRecipient)
    console.log(wss)
    wss?.send(JSON.stringify(msg));
=======
    console.log("ipSender: " + msg.ipSender)
    console.log("ipRecipient: " + msg.ipRecipient)
    // console.log(`IpMsg:${msg.ip} IpCurr: ${ip}`)
    console.log("sendMsgToIp")
    // console.log(ws);
    console.log(req.headers.origin);
    // console.log(msg);
    // console.log(clients);
    const wss = clients[`http://${msg.ipRecipient}:8080`];
    if(wss) {
        wss.send(JSON.stringify(msg));
    } else
        console.log("exeption")
>>>>>>> caskey99
}
