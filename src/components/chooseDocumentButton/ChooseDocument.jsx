import React from 'react';

const ChooseDocument = () => {
    return (
        <div className="choose-document">
            <div className="choose-document-title">
                Нет выбранных документов
            </div>
            <div className="choose-document-description">
                Для отправки документа откройте документы и выберите пользоватея
            </div>
            <button className="choose-document-button">
                Документы
            </button>
        </div>
    )
}

export default ChooseDocument;