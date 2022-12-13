import React, {useEffect, useState} from "react";
import ItemUser from "../itemUser/ItemUser";
import ItemMessage from "../ItemMessage/ItemMessage";
const os = require('os');


const Messages = () => {

    return (
        <aside className="list-messages">
                <h1 className="all-message">Входящие сообщения</h1>
                {
                    localStorage.length === 0
                    ?
                        <div className="noMessage">Новые сообщения отсутствуют</div>
                    :
                        (new Array(localStorage.length).fill().map((e, i) => i + 1)).map(i => <ItemMessage message={JSON.parse(localStorage.getItem(i))} key={JSON.parse(localStorage.getItem(i)).id} />)
                }
        </aside>
    )
}

export default Messages;