import React, {useRef, useState} from "react";
import ItemUser from "../itemUser/ItemUser";
import { Buffer } from 'buffer';

const ListUser = ({clients}) => {
    const [file, setFile] = useState();
    const [fileurl, setFileurl] = useState();
    const [jsonfile, setJsonfile] = useState();
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
        setFileurl(fileReader.result);
        const obj = JSON.parse(JSON.stringify(fileReader.result));
        const json = Buffer.from(obj.substring(29), "base64").toString();
        const result = JSON.parse(json);
        console.log(result);
        setJsonfile(result);
    };

    fileReader.addEventListener('progress', (event) => { /* Процент загрузки json файла в console */
        if (event.loaded && event.total) {
            const percent = (event.loaded / event.total) * 100;
            console.log(`Progress: ${Math.round(percent)}`);
        }
    });

    const handleOnChange = (event) => {
        event.preventDefault();
        const clients2 = event.target.files[0];
        setFile(clients2);
        fileReader.readAsDataURL(clients2);
    }


    return (
        <aside className="list-users">
            <div className="all-users">
                <input type="checkbox" id="users1" name="users"  />
                <label htmlFor="users1">Пользователи</label>
            </div>
            {jsonfile ? jsonfile.map(jsonfile => <ItemUser {...jsonfile} key={jsonfile.ip} jsonfile={jsonfile} />) : "Пользователи не выбраны" }

            <form>
                <input type="file"
                onChange={handleOnChange}
                accept=".json"/>
            </form>
        </aside>
    )
}

export default ListUser;