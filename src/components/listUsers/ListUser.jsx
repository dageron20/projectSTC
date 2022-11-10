import React from "react";
import ItemUser from "../itemUser/ItemUser";

const ListUser = ({clients}) => {
    return (
        <aside className="list-users">
            <div className="all-users">
                <input type="checkbox" id="users1" name="users"  />
                <label htmlFor="users1">Пользователи</label>
            </div>
            { clients.map(clients => <ItemUser {...clients} key={clients.ip} clients={clients} />) }
        </aside>
    )
}

export default ListUser;