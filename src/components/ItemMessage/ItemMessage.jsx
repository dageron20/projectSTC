import React from "react";


const ItemMessage = ({message}) => {
    // console.log(message)
    return (
        <div className='message-field'>
            <span>Сообщение: {message.message}, с ID: {message.id}</span>
        </div>
    )
}

export default ItemMessage;