import React, {useEffect, useState} from "react";
import ItemUser from "../itemUser/ItemUser";
import ItemMessage from "../ItemMessage/ItemMessage";
const os = require('os');


const Messages = ({OpenDoc, curMessage}) => {

    return (
        <aside className="messages-list">
            <h1 className="messages-list-header">Входящие сообщения</h1>
            <div className="messages-list-items">
                {
                    localStorage.length === 0
                    ?
                        "пока пусто"
                    :
                        (new Array(localStorage.length).fill().map((e, i) => i + 1))
                            .map(i => <ItemMessage curMessage={curMessage} OpenDoc={OpenDoc} message={JSON.parse(localStorage.getItem(i))} key={JSON.parse(localStorage.getItem(i)).id} />)
                }
            </div>
        </aside>
    )
}

export default Messages;