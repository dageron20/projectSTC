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

                            {/*<div className="choose-document">*/}
                            {/*    <div className="choose-document-title">*/}
                            {/*        Нет выбранных документов*/}
                            {/*    </div>*/}
                            {/*    <div className="choose-document-description">*/}
                            {/*        Для отправки документа откройте документы и выберите пользоватея*/}
                            {/*    </div>*/}
                            {/*    <button className="choose-document-button">*/}
                            {/*        Документы*/}
                            {/*    </button>*/}
                            {/*</div>*/}

                            <div className="current-document">
                                <div className="current-document-title">
                                    <h3>Название</h3>
                                    <div className="icon">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.29409 8L0 0.705911L0.705911 0L8 7.29409L15.2941 0L16 0.705911L8.70591 8L16 15.2941L15.2941 16L8 8.70591L0.705911 16L0 15.2941L7.29409 8Z" fill="#45494D"/>
                                        </svg>

                                    </div>
                                </div>
                                <div className="current-document-container">
                                    <div className="current-document-container-identity">
                                        <span>идентификатор распоряжения</span>
                                        <input type="text" placeholder="Placeholder"/>
                                        <span className="identity-subtitle">Текст пояснения</span>
                                    </div>
                                    <div className="current-document-container-project">
                                        <span>Проект</span>
                                        <select name="" id="" >
                                            <option value="">Не задано</option>
                                        </select>
                                    </div>
                                    <div className="current-document-container-timer">
                                        <span className="timer-subtitle">Длительность</span>
                                        <input type="time" step="2"/>
                                        <span className="timer-metric">сек</span>
                                    </div>
                                    <div className="current-document-container-nameObject">
                                        <span>Наименование объекта</span>
                                        <input type="text" placeholder="Placeholder"/>
                                    </div>

                                    <div className="drop-down-menu">
                                        <div className="drop-down-menu-value">
                                            Имя по умолчанию
                                        </div>
                                        <select className="drop-down-menu-selection-field" required="required">
                                            <option className="drop-down-menu-selection-field-value-disabled" value="" disabled selected>Не выбрано</option>
                                            <option className="drop-down-menu-selection-field-value" value="">Выбрано</option>
                                            <option className="drop-down-menu-selection-field-value" value="">Не выбрано</option>
                                        </select>
                                    </div>



                                </div>

                            </div>


                            <div className="bottom-document">
                                <div className="left-menu">
                                    <button className='btn-document'>Документы</button>
                                </div>
                                <div className="right-menu">
                                    <p>Колличесвто отправок</p>
                                    <div className='box-spinner'>
                                        <div className='in-num'> 1</div>
                                        <div className="module-strip"></div>
                                        <div className="module-minus">
                                            <div className="minus"></div>
                                        </div>
                                        <div className="module-plus">
                                            <div className="plus"></div>
                                        </div>
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
