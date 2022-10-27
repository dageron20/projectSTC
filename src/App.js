import React from "react";
import './styles/index.css';

function App() {
  return (
    <div className="App">
        <div className="container">
            <header className="header-window">
                <nav className="navbar">
                    <button className='nav-btn-roll-up'/>
                    <button className='nav-btn-full-screen'/>
                    <button className='nav-btn-close'/>
                </nav>
            </header>
            <main className="main">
                <div className="left-bufferLine">

                </div>
                <div className="main-container">
                    <div className="up-bufferLine">

                    </div>
                    <div className="work-flow">
                        <aside className="list-users">

                        </aside>
                        <div className="document-flow">
                            <div className="bottom-document">
                                <div className="left-menu">
                                    <button className='btn-document'>Документы</button>
                                </div>
                                <div className="right-menu">
                                    <p>Колличесвто отправок</p>
                                    <div className='box-spinner'>
                                        <input className='in-num' type='number' min='1' max='99' step='1' value='1'/>
                                        <span className="span-strip"></span>
                                        <span className="span-minus"></span>
                                        <span className="span-plus"></span>
                                    </div>
                                    {/*<button disabled className='btn-send'>Отправить</button>*/}
                                    <button className='btn-send-true'>
                                         <span>
                                            Отправить
                                         </span>
                                        <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 14L14.8371 7L0 0V5.44444L10.598 7L0 8.55556V14Z" fill="#FCFCFD"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </main>
        </div>

    </div>
  );
}

export default App;
