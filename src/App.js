import React, {useEffect, useRef, useState} from "react";
import './styles/index.css';
import BottomDocument from "./components/BottomDocument/BottomDocument";
import ChooseDocument from "./components/chooseDocumentButton/ChooseDocument";
import CurrentDocument from "./components/currentDocument/CurrentDocument";
import ListUser from "./components/listUsers/ListUser";
import Messages from "./components/Messages/Messages";
import ItemMessage from "./components/ItemMessage/ItemMessage";

function App({events, clients}) {
    const [isOpened, setIsOpened] = useState(false);
    function handleChangeOpened()  {
        setIsOpened((prevState) => {
            return prevState = true;
        })
    }
    function handleChangeClose() {
        setIsOpened((prevState) => {
            return prevState = false;
        })
    }

    const [isOpenedSettings, setIsOpenedSettings] = useState(false);
    const [userIp, setUserIp] = useState();
    const [valueDoc, setValueDoc] = useState()

    const [data, setData] = useState(null);
    const [obj, setObj] = useState();

    const ws = useRef();
    const [connected, setConnected] = useState(false);

    useEffect(() => {
        ws.current = new WebSocket("ws://192.168.0.103:9399");
        ws.current.onopen = () => {
            setConnected(true);
            console.log("ws opened");
        }
        ws.current.onmessage = (event) => {
            console.log('С сервера пришло сообщение:', event.data)
            const lastObj = JSON.parse(localStorage.getItem(localStorage.length))
            const obj = JSON.parse(event.data)
            if(lastObj === null)
                obj.id = 1
            else
                obj.id = lastObj.id + 1
            localStorage.setItem(obj.id, JSON.stringify(obj))
            setData(obj)
        }

        ws.current.onclose = () => {
            console.log("ws closed");
        }

        ws.current.onerror = () => {
            console.log('Socket ошибка')
        }
    }, [])

    useEffect(() => {
    }, [data])

    const sendMsg = (userIp, valueDoc) => {
        const date = new Date();
        const hour = date.getHours();
        const minutes = date.getMinutes();
        const time = hour + ":" + minutes;
        console.log(time);
        const obj = {
            method: "message",
            ipRecipient : userIp,
            ipSender: '',
            ipCurr: '',
            id: '',
            message: valueDoc,
            timestamp: time,
        }
        ws.current.send(JSON.stringify(obj));
    }

    return (
        <>
            <div className="App">
                <div className="container">
                    <main className="main">
                        <div className="main-container">
                            <div className="work-flow">
                                <ListUser clients={clients} isOpenedSettings={isOpenedSettings} setState={setIsOpenedSettings} setUserIp={setUserIp} />
                                <div className="document-flow">
                                    {
                                        isOpened ?
                                            <CurrentDocument qwe={handleChangeClose} setValueDoc={setValueDoc} />
                                            :
                                            <ChooseDocument qwe={handleChangeOpened} />
                                    }
                                    <BottomDocument userIp={userIp} valueDoc={valueDoc} sendMsg={sendMsg} />
                                </div>
                                <Messages />
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>

    );
}

export default App;