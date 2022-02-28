import { useState } from "react";
import ListEntry from "../ListEntry";
import "./index.css";


const add_entry = (items: JSX.Element[], set_method: React.Dispatch<React.SetStateAction<JSX.Element[]>>) => {
    set_method(items.concat([<ListEntry completed={false} />]));
}


/**
 * Used to store list elements to represent a `List`.
 */
function List() {
    const [contents, set_contents] = useState<JSX.Element[]>([  ]);

    return (
        <li className="List">
            {contents}
            <button className="AddEntry" onClick={() => add_entry(contents, set_contents)}>+</button>
        </li>
    );
}

export default List;