import React, { useState } from 'react';
import CurrentDocument from "../currentDocument/CurrentDocument";

const ChooseDocument = ({qwe, opened}) => {
    return (
        <>
            <div className="choose-document">
                <div className="choose-document-title">
                    Нет выбранных документов
                </div>
                <div className="choose-document-description">
                    Для отправки документа откройте документы и выберите пользоватея
                </div>
                <button onClick={qwe} className="choose-document-button">
                    Документы
                </button>
            </div>
        </>
    )
}

export default ChooseDocument;