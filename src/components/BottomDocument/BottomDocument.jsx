import React from 'react';

const BottomDocument = () => {
    return (
        <div className="bottom-document">
            <div className="left-menu">
                <button className='btn-document'>Документы</button>
            </div>
            <div className="right-menu">
                <p>Колличесвто отправок</p>
                <div className='box-spinner'>
                    <div className='in-num'> 1</div>
                    <div className="module-strip"></div>
                    <div className="module-minus">
                        <div className="minus"></div>
                    </div>
                    <div className="module-plus">
                        <div className="plus"></div>
                    </div>
                </div>
                {/*<button disabled className='btn-send'>Отправить</button>*/}
                <button className='btn-send-true'>
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