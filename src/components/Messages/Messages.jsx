import React, {useState} from "react";


const Messages = ({ws}) => {
    const [data, setData] = useState(null);

    ws.onmessage = (event) => {
        console.log('С сервера пришло сообщение:', event.data)
        // setData(JSON.parse(event.data))
        // console.log((new Date()).getTime())
        localStorage.setItem((new Date()).getTime(), JSON.stringify(event.data))
        console.log(JSON.parse(localStorage.getItem((new Date()).getTime())))
    }


    return (
        <aside className="list-users">
            <div>
                <h1 className="all-message">Входящие сообщения</h1>
                <div className='message-field'>{data  ? data : "Пока пусто"}</div>
                {/*{localStorage? localStorage.map(localStorage=>*/}
                {/*    <div className='message-field' {...localStorage} key={localStorage.ip}*/}
                {/*         localStorage={localStorage}/>) : "пока пусто"}*/}
            </div>
        </aside>
    )
}

export default Messages;