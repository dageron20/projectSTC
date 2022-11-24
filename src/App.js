import React, {useEffect, useState} from "react";
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


    useEffect(() => {
        ws.onopen = () => {
            console.log('Подключение установлено')

            // ws.send(JSON.stringify({
            //     method: "connection",
            //     id: 9,
            // }))
        }
        return () => ws.close();
    }, [])


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
                                    <BottomDocument ws={ws} userIp={userIp} valueDoc={valueDoc} />
                                </div>
                                <Messages ws={ws} />
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>

  );
}

export default App;
