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
