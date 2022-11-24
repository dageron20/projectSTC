import React from "react";


const ItemMessage = ({message}) => {
    return (
        <div className='message-field' onClick={() => {}}>
            <span>Сообщение: {message.message}, с ID: {message.id}</span>
        </div>
    )
}

export default ItemMessage;