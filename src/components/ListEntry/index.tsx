import { MutableRefObject, useRef, useState } from "react";
import "./index.css";




interface ListEntryProps {
    completed: boolean,
    name?: string | undefined,
}


function ListEntry({ completed, name }: ListEntryProps) {
    const self: MutableRefObject<HTMLDivElement | null> = useRef(null);
    const [ is_complete, set_is_complete ] = useState(completed);

    const remove_self = () => { self.current?.parentNode?.removeChild(self.current) }
    const toggle_is_complete = () => set_is_complete(!is_complete);

    return (
        <div className="ListEntry" ref={self}>
            <input type="text" placeholder="Empty" className="EntryName" />

            <button className={`ToggleComplete ${ is_complete ? "True" : "False" }`} onClick={toggle_is_complete}>
                { is_complete ? <strong>✔</strong> : <strong>✖</strong> }
            </button>

            <button className="RemoveButton" onClick={remove_self}>
                <strong>🗑</strong>
            </button>
        </div>
    );
}

export default ListEntry;