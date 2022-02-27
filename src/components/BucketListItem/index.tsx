import { MutableRefObject, useRef, useState } from "react";
import "./index.css";




interface BucketListItemProps {
    completed: boolean,
    name?: string | undefined,
}


function BucketListItem({ completed, name }: BucketListItemProps) {
    const self: MutableRefObject<HTMLDivElement | null> = useRef(null);
    const [ is_complete, set_is_complete ] = useState(completed);

    const remove_self = () => { self.current?.parentNode?.removeChild(self.current) }
    const toggle_is_complete = () => set_is_complete(!is_complete);

    return (
        <div className="BucketListItem" ref={self}>
            <input type="text" placeholder="Empty" className="ItemName" />

            <button className={`ToggleComplete ${ is_complete ? "True" : "False" }`} onClick={toggle_is_complete}>
                { is_complete ? <strong>✖</strong> : <strong>✔</strong> }
            </button>

            <button className="RemoveButton" onClick={remove_self}>
                <strong>🗑</strong>
            </button>
        </div>
    );
}

export default BucketListItem;