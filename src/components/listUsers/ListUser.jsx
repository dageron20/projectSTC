import React, {useRef, useState} from "react";
import ItemUser from "../itemUser/ItemUser";
import { Buffer } from 'buffer';

    const ListUser = ({clients, state, setState}) => {

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
                    <input type="checkbox" id="users1" name="users"/>
                    <label htmlFor="users1">Пользователи</label>
                </div>

                {jsonfile ? jsonfile.map(jsonfile => <ItemUser {...jsonfile} key={jsonfile.ip}
                                                               jsonfile={jsonfile}/>) : "Пользователи не выбраны"}

                <form>
                    <input type="file"
                           onChange={handleOnChange}
                           accept=".json"/>
                </form>

                {state ?
                    <div className="list-users-settings">
                        <div className="list-users-settings-window">
                            <span>IP</span>
                            <input type="text" placeholder="Введите свой ip"/>
                            <button>Сохранить</button>
                        </div>
                    </div>
                    :
                    <div></div>
                }
                <div className="list-users-settings-button">
                    <a className="list-users-settings-button-gearWhee " onClick={() => {
                        if (state === false) setState(true); else setState(false)
                    }}>
                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                             width="32px" height="32px" viewBox="0 0 1280.000000 1280.000000"
                             preserveAspectRatio="xMidYMid meet">
                            <metadata>
                                Created by potrace 1.15, written by Peter Selinger 2001-2017
                            </metadata>
                            <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
                               fill="#000000" stroke="none">
                                <path d="M5860 12792 c0 -4 -29 -174 -65 -377 -36 -204 -95 -541 -131 -750
        -37 -209 -68 -381 -69 -383 -1 -1 -61 -14 -133 -27 -233 -45 -467 -108 -691
        -187 -110 -38 -114 -39 -131 -21 -9 10 -225 268 -480 573 -255 305 -470 563
        -480 573 -16 17 -38 5 -476 -248 -252 -146 -460 -269 -462 -274 -2 -5 115
        -332 259 -727 l262 -717 -40 -36 c-289 -261 -333 -304 -614 -615 l-36 -39
        -704 257 c-387 142 -714 258 -726 259 -19 2 -58 -61 -288 -457 -253 -438 -265
        -460 -248 -476 10 -10 270 -228 578 -485 308 -257 566 -473 573 -479 10 -10 5
        -35 -27 -127 -85 -249 -141 -456 -185 -688 -14 -74 -27 -135 -28 -136 -2 -1
        -174 -32 -383 -69 -209 -36 -546 -95 -750 -131 -203 -36 -373 -65 -377 -65 -4
        0 -8 -243 -8 -540 0 -297 4 -540 8 -540 4 0 174 -29 377 -65 204 -36 541 -95
        750 -131 209 -37 381 -68 383 -69 1 -1 14 -62 28 -136 44 -232 100 -439 185
        -688 32 -92 37 -117 27 -127 -7 -6 -265 -222 -573 -479 -308 -257 -568 -475
        -578 -485 -17 -16 -5 -38 248 -476 230 -396 269 -459 288 -457 12 1 339 117
        726 259 l704 257 36 -39 c281 -311 325 -354 614 -615 l40 -36 -262 -717 c-144
        -395 -261 -722 -259 -727 2 -5 210 -128 462 -274 438 -253 460 -265 476 -248
        10 10 225 268 480 573 255 305 471 563 480 573 17 18 21 17 131 -21 224 -79
        458 -142 691 -187 72 -13 132 -26 133 -27 1 -2 32 -174 69 -383 36 -209 95
        -546 131 -750 36 -203 65 -373 65 -377 0 -4 242 -8 538 -8 l538 0 52 292 c28
        161 88 502 133 758 44 256 82 466 84 468 1 1 69 16 151 32 254 50 420 94 673
        181 92 32 117 37 127 27 6 -7 222 -265 479 -573 257 -308 475 -568 485 -578
        16 -17 38 -5 476 248 252 146 460 269 462 274 2 7 -163 465 -465 1290 l-57
        154 65 56 c217 190 384 356 570 570 l55 64 185 -67 c708 -260 1250 -456 1257
        -456 5 0 94 147 198 327 103 181 223 388 266 462 63 108 76 137 66 146 -7 7
        -267 225 -578 485 -311 260 -571 478 -578 484 -10 10 -5 35 27 127 84 246 150
        491 191 712 12 64 26 117 30 117 4 0 227 38 496 85 269 47 604 106 744 130
        140 25 258 45 262 45 5 0 8 243 8 540 0 297 -4 540 -8 540 -4 0 -172 29 -372
        64 -201 35 -539 95 -752 132 l-387 68 -21 115 c-41 219 -107 465 -191 710 -32
        92 -37 117 -27 127 7 6 267 224 578 484 311 260 571 478 578 485 10 9 -3 38
        -66 146 -43 74 -163 281 -266 462 -104 180 -193 327 -198 327 -7 0 -549 -196
        -1257 -456 l-185 -67 -55 64 c-186 214 -353 380 -570 570 l-65 56 57 154 c302
        825 467 1283 465 1290 -2 5 -210 128 -462 274 -438 253 -460 265 -476 248 -10
        -10 -228 -270 -485 -578 -257 -308 -473 -566 -479 -573 -10 -10 -35 -5 -127
        27 -253 87 -419 131 -673 181 -82 16 -150 31 -151 32 -2 2 -40 212 -84 468
        -45 256 -105 597 -133 758 l-52 292 -538 0 c-296 0 -538 -4 -538 -8z m745
        -2616 c678 -24 1405 -277 1985 -690 358 -254 675 -576 924 -936 373 -538 598
        -1161 657 -1820 14 -161 14 -499 0 -660 -94 -1039 -601 -1983 -1416 -2632
        -493 -393 -1095 -662 -1715 -767 -246 -42 -300 -46 -640 -46 -340 0 -394 4
        -640 46 -1177 199 -2203 959 -2740 2030 -295 587 -425 1198 -398 1870 48 1199
        680 2316 1688 2983 502 332 1046 531 1658 606 96 12 405 28 457 23 17 -1 98
        -5 180 -7z"/>
                            </g>
                        </svg>
                    </a>
                </div>
            </aside>
        )
}

export default ListUser;