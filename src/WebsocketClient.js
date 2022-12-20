import {useDispatch, useSelector} from "react-redux";
import {setValueMsg} from "./toolkitRedux/toolkitSlice";

export class WebsocketClient {
    constructor() {
        this.dispatch = useDispatch();
        if (WebsocketClient.instance) {
            return WebsocketClient.instance;
        }
        this.client = new WebSocket("ws://192.168.0.103:9399");
        WebsocketClient.instance = this;
        return this;
    }

    getWebsocketClient() {
        return this.client;
    }

    onOpen() {
        this.client.onopen = () => {
            console.log("privet");
            const obj = {
                method: "getMessage",
                ipRecipient : '',
                ipSender: '',
                ipCurr: '',
                id: '',
                message: '',
                timestamp: '',
            }
            this.client.send(JSON.stringify(obj));
        }
    }

    onMessage() {
        this.client.onmessage = (event) => {
            this.dispatch(setValueMsg(event.data));
        }
    }

    onClose() {
        this.client.onclose = () => {
            console.log("ws closed");
        }
    }

    onError() {
        this.client.onerror = (error) => {
            console.log("WebSocket Error: ", error )
        }
    }
}

