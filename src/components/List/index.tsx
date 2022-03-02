import { MutableRefObject, useRef, useState } from "react";
import { Entry, save_list as save_list_to_ls } from "../../persistence";
import ListEntry from "../ListEntry";
import "./index.css";


/**
 * Helper function that adds a new `ListEntry` to the `List` hook, parameters derived from the `useState` method.
*/
const add_entry = (items: JSX.Element[], set_method: React.Dispatch<React.SetStateAction<JSX.Element[]>>) => {
    set_method(items.concat([<ListEntry completed={false} />]));
}


/**
 * Helper function saving the `List` hook to `localStorage`.
*/
const save_list = (name: string | undefined, contents: JSX.Element[]) => {
    if (!name) { return; }

    let arr: Array<Entry> = new Array;
    contents.forEach((value: JSX.Element, _idx, _arr) => {
        // TODO: Retrieve inner-scope variables of `value` for interface construction.
        let entry: Entry = {
            name: "",
            completed: false,
        };

        if (entry.name.trim()) { arr.push(entry); }
    });

    // save_list_to_ls(name, arr);
}


/**
 * Used to store list elements to represent a `List`.
 */
function List() {
    const name_input: MutableRefObject<HTMLInputElement | null> = useRef(null);
    const [contents, set_contents] = useState<JSX.Element[]>([  ]);

    return (
        <div className="List">
            <input type="text" placeholder="Untitled List" className="Name" ref={name_input} />
            <li className="Entries">{contents}</li>
            <div className="Utility">
                <button className="AddEntry" onClick={() => add_entry(contents, set_contents)}>Add Entry</button>
                <button className="Settings" disabled={true}>Settings</button>
                <button className="Save" onClick={() => save_list(name_input.current?.value, contents)}>Save</button>
                <button className="Export" disabled={true}>Export</button>
            </div>
        </div>
    );
}

export default List;