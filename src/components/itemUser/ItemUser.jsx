import React from 'react';

const ItemUser = ({ip, name}) => {
    return (
        <div className="item-user">
            <input type="checkbox" id={ip} name="users" />
            <label htmlFor={ip}>
                <div className="title-user">
                    <span className="naming">{name}</span>
                    <span className="job">{ip}</span>
                </div>
            </label>
            <div className="counter-cycle">

            </div>
        </div>
    )
}

export default ItemUser;