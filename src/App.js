import React, {useEffect, useRef, useState} from "react";
import './styles/index.css';
import BottomDocument from "./components/BottomDocument/BottomDocument";
import ChooseDocument from "./components/chooseDocumentButton/ChooseDocument";
import CurrentDocument from "./components/currentDocument/CurrentDocument";
import ListUser from "./components/listUsers/ListUser";
import Messages from "./components/Messages/Messages";

<<<<<<< HEAD
function App({events, clients}) {
=======

function App({clients}) {

    const [isOpenedSettings, setIsOpenedSettings] = useState(false);
>>>>>>> caskey99
    const [isOpened, setIsOpened] = useState(false);
    const [valueDoc, setValueDoc] = useState()
    const [data, setData] = useState(null);

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

<<<<<<< HEAD
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
=======
    const ws = useRef();

    useEffect(() => {
        ws.current = new WebSocket("ws://192.168.31.14:9399");
        ws.current.onopen = () => {
            console.log("ws opened");
        }
        ws.current.onmessage = (event) => {
            // console.log('С сервера пришло сообщение:', event.data)
>>>>>>> caskey99
            const lastObj = JSON.parse(localStorage.getItem(localStorage.length))
            const obj = JSON.parse(event.data)
            if(lastObj === null)
                obj.id = 1
            else
                obj.id = lastObj.id + 1
            localStorage.setItem(obj.id, JSON.stringify(obj))
            setData(obj)
<<<<<<< HEAD
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
=======
        }

        ws.current.onclose = () => {
            console.log("ws closed");
        }

        ws.current.onerror = () => {
            console.log('Socket ошибка')
        }
    }, [data])

    const sendMsg = (userIp, valueDoc) => {
>>>>>>> caskey99
        const obj = {
            method: "message",
            ipRecipient : userIp,
            ipSender: '',
            ipCurr: '',
<<<<<<< HEAD
            id: '',
            message: valueDoc,
            timestamp: time,
=======
            id : '',
            message: valueDoc,
>>>>>>> caskey99
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
                                <ListUser clients={clients} isOpenedSettings={isOpenedSettings} setState={setIsOpenedSettings} />
                                <div className="document-flow">
                                    {
                                        isOpened ?
                                            <CurrentDocument qwe={handleChangeClose} setValueDoc={setValueDoc} />
                                            :
                                            <ChooseDocument qwe={handleChangeOpened} />
                                    }
<<<<<<< HEAD
                                    <BottomDocument userIp={userIp} valueDoc={valueDoc} sendMsg={sendMsg} />
=======
                                    <BottomDocument  valueDoc={valueDoc} sendMsg={sendMsg} />
>>>>>>> caskey99
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