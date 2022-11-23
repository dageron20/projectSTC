import React, {useEffect, useState} from "react";
import ItemUser from "../itemUser/ItemUser";
import ItemMessage from "../ItemMessage/ItemMessage";


const Messages = ({ws}) => {
    const [data, setData] = useState(null);

    ws.onmessage = (event) => {
        console.log('С сервера пришло сообщение:', event.data)
        const lastObj = JSON.parse(localStorage.getItem(localStorage.length))
        const obj = JSON.parse(event.data)
        if(lastObj === null)
            obj.id = 1
        else
            obj.id = lastObj.id + 1
        localStorage.setItem(obj.id, JSON.stringify(obj))
        setData(obj)
    }

    useEffect(() => {
    }, [data])


    return (
        <aside className="list-users">
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