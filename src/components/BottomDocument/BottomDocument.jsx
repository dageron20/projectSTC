import React, {useEffect, useState} from 'react';

<<<<<<< HEAD
const BottomDocument = ({userIp, valueDoc, sendMsg}) => {
    const [counter, setCounter] = useState(1);


    const handleClickMinus = () => {
        if(counter > 0)
            setCounter(counter - 1)
    }
    const handleClickPlus = () => {
        if(counter < 100)
            setCounter(counter + 1)
    }

=======
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment} from "../../toolkitRedux/toolkitSlice";
>>>>>>> caskey99

const BottomDocument = ({valueDoc, sendMsg}) => {
    const count = useSelector(state => state.toolkit.count)
    const userIp = useSelector(state => state.toolkit.userIp)
    const dispatch = useDispatch()
    return (
        <div className="bottom-document">
            <div className="left-menu">
                <button className='btn-document'>Документы</button>
            </div>
            <div className="right-menu">
                <p>Колличесвто отправок</p>
                <div className='box-spinner'>
                    <div className='in-num'> {count}</div>
                    <div className="module-strip"/>
                    <div className="module-minus" onClick={() => dispatch(decrement())}>
                        <div className="minus"/>
                    </div>
                    <div className="module-plus" onClick={() => dispatch(increment())}>
                        <div className="plus"/>
                    </div>
                </div>
                {/*<button disabled className='btn-send'>Отправить</button>*/}
                <button className='btn-send-true' onClick={() => {sendMsg(userIp, valueDoc)}}>
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