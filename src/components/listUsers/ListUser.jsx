import React from "react";

const ListUser = () => {
    return (
        <aside className="list-users">
            <div className="all-users">
                <input type="checkbox" id="users1" name="users"  />
                <label htmlFor="users1">Пользователи</label>
            </div>
            <div className="item-user">
                <input type="checkbox" id="users2" name="users" />
                <label htmlFor="users2">
                    <div className="title-user">
                        <span className="naming">Фамилия Имя</span>
                        <span className="job">Должность, Статус</span>
                    </div>
                </label>
                <div className="counter-cycle">
                    3
                </div>
            </div>
            <div className="item-user">
                <input type="checkbox" id="users3" name="users" />
                <label htmlFor="users3">
                    <div className="title-user">
                        <span className="naming">Фамилия Имя</span>
                        <span className="job">Должность, Статус</span>
                    </div>
                </label>
            </div>
            <div className="item-user">
                <input type="checkbox" id="users4" name="users" />
                <label htmlFor="users4">
                    <div className="title-user">
                        <span className="naming">Фамилия Имя</span>
                        <span className="job">Должность, Статус</span>
                    </div>
                </label>
            </div>
        </aside>
    )
}

export default ListUser;