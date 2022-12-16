import React from "react";


const ItemMessage = ({message, OpenDoc, curMessage}) => {

    return (
        <div className='message-field'>
            <div className="item-message" onClick={() => {
                OpenDoc();
                curMessage(message);
                console.log(message);
            }}>
                <div className="item-message-info">
                    <div className="item-message-info-id">
                        <span>ID {message.id}</span>
                    </div>
                    <div className="item-message-info-time">
                        <span>{message.timestamp}</span>
                    </div>
                </div>
                <div className="item-message-content">
                    <span>{message.message}</span>
                </div>
            </div>
        </div>
    )
}

export default ItemMessage;