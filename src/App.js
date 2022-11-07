import React from "react";
import './styles/index.css';
import BottomDocument from "./components/BottomDocument/BottomDocument";
import ChooseDocument from "./components/chooseDocumentButton/ChooseDocument";
import CurrentDocument from "./components/currentDocument/CurrentDocument";
import ListUser from "./components/listUsers/ListUser";
import Messages from "./components/Messages/Messages";

function App() {
  return (
    <div className="App">
        <div className="container">
            <main className="main">
                <div className="main-container">
                    <div className="work-flow">
                        <ListUser />
                        <div className="document-flow">
                            {/*<ChooseDocument />*/}
                            <CurrentDocument />
                            <BottomDocument />
                        </div>
                        <Messages />
                    </div>
                </div>
            </main>
        </div>
    </div>
  );
}

export default App;
