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
                            <div className="all-users">
                                <input type="checkbox" id="users1" name="users"  />
                                <label htmlFor="users1">Пользователи</label>
                            </div>
                            <div className="item-user">
                                <input type="checkbox" id="users2" name="users" />
                                <label htmlFor="users2">
                                    <div className="title-user">
                                        <span className="naming">Фамилия Имя</span>
                                        <span className="job">Должность, Статус</span>
                                    </div>
                                </label>
                                <div className="counter-cycle">
                                    3
                                </div>
                            </div>
                            <div className="item-user">
                                <input type="checkbox" id="users3" name="users" />
                                <label htmlFor="users3">
                                    <div className="title-user">
                                        <span className="naming">Фамилия Имя</span>
                                        <span className="job">Должность, Статус</span>
                                    </div>
                                </label>
                            </div>
                            <div className="item-user">
                                <input type="checkbox" id="users4" name="users" />
                                <label htmlFor="users4">
                                    <div className="title-user">
                                        <span className="naming">Фамилия Имя</span>
                                        <span className="job">Должность, Статус</span>
                                    </div>
                                </label>
                            </div>

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
