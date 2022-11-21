import React, {useState} from 'react';

const BottomDocument = ({ws, userIp, valueDoc}) => {
    const [counter, setCounter] = useState(1);

    const handleClickMinus = () => {
        if(counter > 0)
            setCounter(counter - 1)
    }
    const handleClickPlus = () => {
        if(counter < 100)
            setCounter(counter + 1)
    }

    function sendMsg (userIp, valueDoc){
        const obj = {
            method: "message",
            ip : userIp,
            id : '',
            message: valueDoc,
        }
        return JSON.stringify(obj)
    }

    return (
        <div className="bottom-document">
            <div className="left-menu">
                <button className='btn-document'>Документы</button>
            </div>
            <div className="right-menu">
                <p>Колличесвто отправок</p>
                <div className='box-spinner'>
                    <div className='in-num'> {counter}</div>
                    <div className="module-strip"></div>
                    <div className="module-minus" onClick={handleClickMinus}>
                        <div className="minus"></div>
                    </div>
                    <div className="module-plus" onClick={handleClickPlus}>
                        <div className="plus"></div>
                    </div>
                </div>
                {/*<button disabled className='btn-send'>Отправить</button>*/}
                <button className='btn-send-true' onClick={() => ws.send(sendMsg(userIp, valueDoc))}>
                                         <span>
                                            Отправить
                                         </span>
                    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 14L14.8371 7L0 0V5.44444L10.598 7L0 8.55556V14Z" fill="#FCFCFD"/>
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default BottomDocument;