import React, {useEffect, useState} from "react";
import ItemUser from "../itemUser/ItemUser";
import ItemMessage from "../ItemMessage/ItemMessage";
const os = require('os');


const Messages = () => {

    return (
        <aside className="list-messages">
            <div>
                <h1 className="all-message">Входящие сообщения</h1>
                {
                    localStorage.length === 0
                    ?
                        "пока пусто"
                    :
                        (new Array(localStorage.length).fill().map((e, i) => i + 1)).map(i => <ItemMessage message={JSON.parse(localStorage.getItem(i))} key={JSON.parse(localStorage.getItem(i)).id} />)
                }
            </div>
        </aside>
    )
}

export default Messages;