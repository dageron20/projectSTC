import React, {useState} from "react";
import './styles/index.css';
import BottomDocument from "./components/BottomDocument/BottomDocument";
import ChooseDocument from "./components/chooseDocumentButton/ChooseDocument";
import CurrentDocument from "./components/currentDocument/CurrentDocument";
import ListUser from "./components/listUsers/ListUser";
import Messages from "./components/Messages/Messages";

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
    return (
        <>
            <div className="App">
                <div className="container">
                    <main className="main">
                        <div className="main-container">
                            <div className="work-flow">
                                <ListUser clients={clients} />
                                <div className="document-flow">
                                    {
                                        isOpened ?
                                            <CurrentDocument qwe={handleChangeClose} />
                                                 :
                                            <ChooseDocument qwe={handleChangeOpened} />

                                    }
                                    <BottomDocument  />
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
