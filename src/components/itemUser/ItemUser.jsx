import React from 'react';

const ItemUser = ({data, setUserIp}) => {
    return (
        <div className="item-user">
            <input type="checkbox" id={data.ip} name="users" onClick={() => {setUserIp(data.ip)}}/>
            <label htmlFor={data.ip}>
                <div className="title-user">
                    <span className="naming">{data.name}</span>
                    <span className="job">{data.ip}</span>
                </div>
            </label>
            <div className="counter-cycle">

            </div>
        </div>
    )
}

export default ItemUser;